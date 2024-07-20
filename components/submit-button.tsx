'use client';

import { Loader2 } from 'lucide-react';
import React, { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export const SubmitButton = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending ? <Loader2 className="animate-spin" /> : children}
    </Button>
  );
};
