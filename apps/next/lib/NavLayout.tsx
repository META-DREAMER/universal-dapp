import React from 'react';
import { NavBar } from 'app/ui/navbar';
import { Box } from 'app/ui/Box';

type NavLayoutProps = {
  children: React.ReactNode;
};

export const NavLayout: React.FC<NavLayoutProps> = ({ children }) => {
  return (
    <Box>
      <NavBar
        links={[
          { href: '/settings', label: 'Settings' },
          { href: '/username/posts', label: 'Posts' },
        ]}
      />
      {children}
    </Box>
  );
};
