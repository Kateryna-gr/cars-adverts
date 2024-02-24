import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { PhonebookBar } from './PhonebookBar/PhonebookBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px' }}>
      <PhonebookBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
