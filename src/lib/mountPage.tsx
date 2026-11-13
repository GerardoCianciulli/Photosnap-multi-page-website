// Global tokens and base styles must load before any component stylesheet.
import '../styles/base.css';
import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from '../components/Layout';

export function mountPage(page: ReactNode): void {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error('Missing #root element');
  }
  createRoot(container).render(
    <StrictMode>
      <Layout>{page}</Layout>
    </StrictMode>,
  );
}
