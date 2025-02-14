import { findNodePath, focusEditor, removeNodes, setNodes } from '@udecode/plate';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Frame from 'react-frame-component';

import useUUID from '@staticcms/core/lib/hooks/useUUID';
import { generateClassNames } from '@staticcms/core/lib/util/theming.util';
import { useWindowEvent } from '@staticcms/core/lib/util/window.util';
import { selectTheme } from '@staticcms/core/reducers/selectors/globalUI';
import { useAppSelector } from '@staticcms/core/store/hooks';
import CodeBlockFrame from './CodeBlockFrame';

import type { MdCodeBlockElement, MdValue } from '@staticcms/markdown';
import type { PlateRenderElementProps, TCodeBlockElement } from '@udecode/plate';
import type { FC, MutableRefObject, RefObject } from 'react';

import './CodeBlockElement.css';

const classes = generateClassNames('WidgetMarkdown_CodeBlock', ['root', 'language-input']);

const CodeBlockElement: FC<PlateRenderElementProps<MdValue, MdCodeBlockElement>> = props => {
  const { attributes, nodeProps, element, editor, children } = props;
  const id = useUUID();

  const lang = ('lang' in element ? element.lang : '') as string | undefined;
  const code = ('code' in element ? element.code ?? '' : '') as string;

  const handleChange = useCallback(
    (value: string) => {
      const path = findNodePath(editor, element);
      path && setNodes<TCodeBlockElement>(editor, { code: value }, { at: path });
    },
    [editor, element],
  );

  const handleDelete = useCallback(() => {
    const path = findNodePath(editor, element);
    path && removeNodes(editor, { at: path });
    focusEditor(editor);
  }, [editor, element]);

  const receiveMessage = useCallback(
    (event: MessageEvent) => {
      switch (event.data.message) {
        case `code_block_${id}_onChange`:
          handleChange(event.data.value);
          break;
        case `code_block_${id}_delete`:
          handleDelete();
          break;
      }
    },
    [handleChange, handleDelete, id],
  );

  useWindowEvent('message', receiveMessage);

  const initialFrameContent = useMemo(
    () => `
      <!DOCTYPE html>
      <html>
        <head>
          <base target="_blank"/>
          <style>
            body {
              margin: 0;
              overflow: hidden;
              position: fixed;
              top: 0;
              width: 100%;
            }
          </style>
        </head>
        <body><div></div></body>
      </html>
    `,
    [],
  );

  const [height, setHeight] = useState(24);
  const iframeRef = useRef<typeof Frame & HTMLIFrameElement>();

  const handleResize = useCallback(
    (iframe: MutableRefObject<(typeof Frame & HTMLIFrameElement) | undefined>) => {
      const height = iframe.current?.contentDocument?.body?.scrollHeight ?? 0;
      if (height !== 0) {
        setHeight(height);
      }
    },
    [],
  );

  useEffect(() => handleResize(iframeRef), [handleResize, iframeRef, code]);
  useEffect(() => {
    setTimeout(() => handleResize(iframeRef), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = useAppSelector(selectTheme);

  return (
    <>
      <div
        key={theme}
        {...attributes}
        {...nodeProps}
        contentEditable={false}
        className={classes.root}
      >
        <input
          id={id}
          value={lang}
          onChange={event => {
            const value = event.target.value;
            const path = findNodePath(editor, element);
            path && setNodes<TCodeBlockElement>(editor, { lang: value }, { at: path });
          }}
          className={classes['language-input']}
        />
        <div>
          <Frame
            key={`code-frame-${id}`}
            id={id}
            ref={iframeRef as RefObject<typeof Frame> & RefObject<HTMLIFrameElement>}
            style={{
              border: 'none',
              width: '100%',
              height,
              overflow: 'hidden',
            }}
            initialContent={initialFrameContent}
          >
            <CodeBlockFrame id={id} code={code} lang={lang} theme={theme} />
          </Frame>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default CodeBlockElement;
