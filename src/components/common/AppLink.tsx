import { Link, type LinkProps } from 'react-router-dom';

import { forwardRef } from 'react';
import { useLanguage } from '@/hook/useLanguage';

interface AppLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  external?: boolean;
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ to, external = false, children, ...props }, ref) => {
    const { isKyrillic } = useLanguage();

    // Tashqi link uchun
    if (external) {
      return (
        <a href={to} ref={ref} {...props}>
          {children}
        </a>
      );
    }


    const getLocalizedPath = (path: string): string => {
      if (path.startsWith('/kr') || path.startsWith('/uz')) {
        return path;
      }


      if (isKyrillic) {
        return path === '/' ? '/kr' : `/kr${path}`;
      }

      return path;
    };

    return (
      <Link to={getLocalizedPath(to)} ref={ref} {...props}>
        {children}
      </Link>
    );
  }
);

AppLink.displayName = 'AppLink';