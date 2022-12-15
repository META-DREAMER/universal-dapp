import React from 'react';
import { Box } from 'app/ui/Box';
import { Text, TextLink } from 'app/ui/typography';
import MenuIcon from 'app/ui/icons/menu';
import { Button } from 'app/ui/Button';
import { ConnectWalletButton } from 'app/lib/ConnectWalletButton';
import { Link } from 'solito/link';

type NavBarProps = {
  links: Array<{ href: string; label: string }>;
};

export const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <Box className="bg-grayA-1 border-gray-6 sticky top-0 right-0 left-0 z-20 flex w-full flex-row items-center justify-between border-b p-4 backdrop-blur-md backdrop-saturate-150 lg:p-6">
      <Box className="lg:hidden">
        <Button intent={'icon'} size={'icon'}>
          <MenuIcon />
        </Button>
      </Box>
      <Link href="/">
        <Box className="flex flex-row items-center">
          <Box className="bg-teal-5 mr-2 h-8 w-8 rounded-full"></Box>
          <Text className="text-xl font-semibold tracking-tight">My App</Text>
        </Box>
      </Link>

      <Box className="ml-8 hidden w-full flex-grow flex-row lg:flex lg:w-auto lg:items-center">
        <Box className="flex-row text-sm lg:flex-grow">
          {links.map(({ href, label }) => (
            <TextLink
              key={href}
              href={href}
              intent={'secondary'}
              className="mt-4 mr-4 lg:mt-0"
            >
              {label}
            </TextLink>
          ))}
        </Box>
      </Box>
      <Box className={'flex-row'}>
        <ConnectWalletButton />
      </Box>
    </Box>
  );
};
