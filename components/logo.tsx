import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      className="font-jetBrains font-semibold mr-4 text-2xl text-muted-foreground"
      href="/"
    >
      Alex.
    </Link>
  );
};

export default Logo;
