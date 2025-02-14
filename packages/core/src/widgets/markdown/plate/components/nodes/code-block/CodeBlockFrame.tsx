import { indentWithTab } from '@codemirror/commands';
import { keymap } from '@codemirror/view';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import CodeMirror from '@uiw/react-codemirror';
import { basicSetup } from 'codemirror';
import React, { useCallback, useMemo } from 'react';
import { useFrame } from 'react-frame-component';

import languages from '@staticcms/code/data/languages';
import { isEmpty } from '@staticcms/core/lib/util/string.util';

import type { FC, KeyboardEvent } from 'react';

export interface CodeBlockFrameProps {
  id: string;
  lang?: string;
  code: string;
  theme: 'dark' | 'light';
}

const CodeBlockFrame: FC<CodeBlockFrameProps> = ({ id, lang, code, theme }) => {
  const { window } = useFrame();

  const loadedLangExtension = useMemo(() => {
    if (!lang) {
      return null;
    }

    const languageName = languages.find(language =>
      language.identifiers.includes(lang),
    )?.codemirror_mode;

    if (!languageName) {
      return null;
    }

    return loadLanguage(languageName);
  }, [lang]);

  const extensions = useMemo(() => {
    const coreExtensions = [basicSetup, keymap.of([indentWithTab])];

    if (!loadedLangExtension) {
      return coreExtensions;
    }

    return [...coreExtensions, loadedLangExtension];
  }, [loadedLangExtension]);

  const handleChange = useCallback(
    (value: string) => {
      window?.parent.postMessage({ message: `code_block_${id}_onChange`, value });
    },
    [id, window],
  );

  const handleFocus = useCallback(() => {
    window?.parent.postMessage({ message: `code_block_${id}_onFocus` });
  }, [id, window?.parent]);

  const handleBlur = useCallback(() => {
    window?.parent.postMessage({ message: `code_block_${id}_onBlur` });
  }, [id, window?.parent]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Backspace' && isEmpty(code)) {
        window?.parent.postMessage({ message: `code_block_${id}_delete` });
      }
    },
    [code, id, window?.parent],
  );

  return (
    <CodeMirror
      value={code}
      height="auto"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      extensions={extensions}
      theme={theme}
    />
  );
};

export default CodeBlockFrame;
