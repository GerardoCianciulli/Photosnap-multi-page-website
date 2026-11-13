import { useEffect, type ReactNode } from 'react';
import { initPlaceholderLinks } from '../lib/interactions';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  useEffect(() => initPlaceholderLinks(), []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
