'use client';

import { navExternalLinks, navLinks } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import React from 'react';
import { IconType } from 'react-icons';

export const Navbar = () => {
  const pathname = usePathname();
  const currentRoute = pathname.split('/').pop()!;

  return (
    <nav className="h-16 fixed top-0 w-full border-b border-muted-foreground z-50 backdrop-blur-md">
      <div className="flex items-center justify-between h-full w-full">
        <ul className="flex items-center justify-center gap-4 h-full relative px-4">
          {navLinks.map((link, idx) => (
            <li className="h-full flex items-center relative" key={idx}>
              <Link href={link.route}>{link.label}</Link>
              {currentRoute === link.route.split('/').pop() && (
                <motion.div
                  className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-white"
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center gap-4 h-full relative px-4">
          {navExternalLinks.map((link, idx) => (
            <li key={idx}>
              <ExternalLinkButton icon={link.icon} route={link.route} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

type ExternalLinkButtonProps = {
  icon: IconType;
  route: string;
};

function ExternalLinkButton({ icon, route }: ExternalLinkButtonProps) {
  return (
    <Button size="icon" type="button" variant="ghost" className="rounded-full">
      <a target="_blank" rel="noopener noreferrer" href={route}>
        {React.createElement(icon, {
          className: 'w-8 h-8',
        })}
      </a>
    </Button>
  );
}
