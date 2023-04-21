import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';

import Logo from './Logo';
import NavigationDrawer from './mobile-drawer/NavigationDrawer';
import Search from './search/Search';
import SponsorButton from './SponsorButton';

import type { PaletteMode } from '@mui/material';
import type { ButtonTypeMap } from '@mui/material/Button';
import type { ExtendButtonBase } from '@mui/material/ButtonBase';
import type { DocsGroup, MenuItem, SearchablePage } from '../../interface';

const StyledHeaderWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const StyledNewerDocsWarning = styled('div')(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 40px;
    font-weight: 600;
    font-size: 18px;
    background: ${theme.palette.mode === 'light' ? '#b4d1f6' : '#022a39'};
  `,
);

const StyledLink = styled(Link)(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
  `,
);

const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
    background: ${theme.palette.mode === 'light' ? theme.palette.primary.main : '#121212'};
    top: 40px;
  `,
);

const StyledToolbar = styled(Toolbar)(
  ({ theme }) => `
    gap: 16px;
    height: 72px;

    ${theme.breakpoints.down('lg')} {
      justify-content: space-between;
    }
  `,
);

const StyledIconsWrapper = styled('div')(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;

    ${theme.breakpoints.up('lg')} {
      flex-grow: 1;
    }
  `,
);

const StyledGithubLink = styled('a')(
  ({ theme }) => `
    display: flex;
    align-items: center;

    ${theme.breakpoints.down('lg')} {
      display: none;
    }
  `,
);

const StyledGithubImage = styled('img')`
  display: flex;
`;

const StyledMenuButton = styled(IconButton)(
  ({ theme }) => `
    z-index: 30;

    ${theme.breakpoints.up('lg')} {
      visibility: hidden;
      height: 0;
      width: 0;
      padding: 0;
    }
  `,
);

const StyledDesktopGap = styled('div')(
  ({ theme }) => `
    flex-grow: 1;

    ${theme.breakpoints.down('lg')} {
      display: none;
    }
  `,
);

const StyledDesktopLink = styled(Button)(
  ({ theme }) => `
    color: white;

    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }

    ${theme.breakpoints.down('lg')} {
      display: none;
    }
  `,
) as ExtendButtonBase<ButtonTypeMap<{}, 'a'>>;

interface HeaderProps {
  mode: PaletteMode;
  docsGroups: DocsGroup[];
  searchablePages: SearchablePage[];
  toggleColorMode: () => void;
}

const Header = ({ mode, docsGroups, searchablePages, toggleColorMode }: HeaderProps) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const items: MenuItem[] = useMemo(
    () => [
      {
        title: 'Docs',
        path: '/docs',
        groups: docsGroups.map(group => ({
          title: group.title,
          links: group.links.map(link => ({
            title: link.title,
            url: `/docs/${link.slug}`,
            beta: link.beta,
          })),
        })),
      },
      {
        title: 'Contributing',
        url: '/docs/contributor-guide',
      },
      {
        title: 'Community',
        url: '/community',
      },
    ],
    [docsGroups],
  );

  return (
    <StyledHeaderWrapper>
      <StyledNewerDocsWarning>
        This documentation is for Static CMS v1.{' '}
        <StyledLink href="https://staticcms.org">Go to the latest docs.</StyledLink>
      </StyledNewerDocsWarning>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <StyledMenuButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" />
          </StyledMenuButton>
          <Logo />
          <StyledIconsWrapper>
            <Search searchablePages={searchablePages} />
            <IconButton
              sx={{ [theme.breakpoints.up('lg')]: { ml: 1 } }}
              onClick={toggleColorMode}
              color="inherit"
              title={mode === 'dark' ? 'Turn on the light' : 'Turn off the light'}
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <StyledDesktopGap />
            <StyledGithubLink
              href="https://github.com/StaticJsCMS/static-cms"
              aria-label="Star StaticJsCMS/static-cms on GitHub"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <StyledGithubImage
                alt="Star StaticJsCMS/static-cms on GitHub"
                src="https://img.shields.io/github/stars/StaticJsCMS/static-cms?style=social"
              />
            </StyledGithubLink>
            <IconButton href="https://github.com/StaticJsCMS/static-cms" color="inherit">
              <GitHubIcon />
            </IconButton>
            <SponsorButton
              sx={{
                display: 'none',
                marginLeft: '8px',
                [theme.breakpoints.only('md')]: { display: 'inline-flex' },
              }}
            />
          </StyledIconsWrapper>
          {items.map(item => {
            let url = '#';
            if ('url' in item) {
              url = item.url;
            } else if (item.groups.length > 0 && item.groups[0].links.length > 0) {
              url = item.groups[0].links[0].url;
            }

            return (
              <StyledDesktopLink key={`desktop-${item.title}-${url}`} component={Link} href={url}>
                {item.title}
              </StyledDesktopLink>
            );
          })}
          {/*
            <StyledDesktopLink component={Link} href="/blog">Blog</StyledDesktopLink>
          */}
          <SponsorButton sx={{ [theme.breakpoints.down('lg')]: { display: 'none' } }} />
        </StyledToolbar>
      </StyledAppBar>
      <NavigationDrawer
        key="mobile-navigation-drawer"
        items={items}
        mobileOpen={mobileOpen}
        onMobileOpenToggle={handleDrawerToggle}
      />
    </StyledHeaderWrapper>
  );
};

export default Header;
