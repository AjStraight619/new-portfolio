import { ReactNode } from 'react';
import { Separator } from './ui/separator';

export default function PageHeader({ children }: { children: ReactNode }) {
  return (
    <div className="w-full space-y-2 sm:pb-0 pb-8 block sm:hidden">
      <h1 className="text-3xl text-muted">{children}</h1>
      <Separator orientation="horizontal" />
    </div>
  );
}
