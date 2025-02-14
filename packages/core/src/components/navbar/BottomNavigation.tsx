import { Add as AddIcon } from '@styled-icons/material/Add';
import { Menu as MenuIcon } from '@styled-icons/material/Menu';
import { OpenInNew as OpenInNewIcon } from '@styled-icons/material/OpenInNew';
import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import useNewEntryUrl from '@staticcms/core/lib/hooks/useNewEntryUrl';
import { isNotEmpty } from '@staticcms/core/lib/util/string.util';
import { generateClassNames } from '@staticcms/core/lib/util/theming.util';
import { selectDisplayUrl } from '@staticcms/core/reducers/selectors/config';
import { useAppSelector } from '@staticcms/core/store/hooks';
import IconButton from '../common/button/IconButton';
import NavigationDrawer from './NavigationDrawer';
import QuickCreate from './QuickCreate';

import type { Collection } from '@staticcms/core/interface';
import type { FC } from 'react';

import './BottomNavigation.css';

export const classes = generateClassNames('BottomNavigation', [
  'root',
  'menu-button',
  'menu-button-icon',
  'add-button',
  'add-button-icon',
  'quick-create',
  'quick-create-button',
  'site-url-button',
  'site-url-button-icon',
]);

export interface BottomNavigationProps {
  collection: Collection | undefined;
}

const BottomNavigation: FC<BottomNavigationProps> = ({ collection }) => {
  const params = useParams();
  const filterTerm = useMemo(() => params['*'], [params]);
  const newEntryUrl = useNewEntryUrl(collection, filterTerm);

  const displayUrl = useAppSelector(selectDisplayUrl);

  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setMobileOpen(old => !old);
  }, []);

  return (
    <>
      <div className={classes.root}>
        <IconButton variant="text" className={classes['menu-button']} onClick={toggleMobileMenu}>
          <MenuIcon className={classes['menu-button-icon']} />
        </IconButton>
        {isNotEmpty(newEntryUrl) ? (
          <IconButton to={newEntryUrl} variant="text" className={classes['add-button']}>
            <AddIcon className={classes['add-button-icon']} />
          </IconButton>
        ) : (
          <QuickCreate
            key="quick-create"
            variant="text"
            rootClassName={classes['quick-create']}
            buttonClassName={classes['quick-create-button']}
            hideDropdownIcon
            hideLabel
          />
        )}
        {displayUrl ? (
          <IconButton variant="text" className={classes['site-url-button']} href={displayUrl}>
            <OpenInNewIcon className={classes['site-url-button-icon']} />
          </IconButton>
        ) : null}
      </div>
      <NavigationDrawer mobileOpen={mobileOpen} onMobileOpenToggle={toggleMobileMenu} />
    </>
  );
};

export default BottomNavigation;
