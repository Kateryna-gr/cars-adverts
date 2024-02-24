import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import { PhonebookBar } from './PhonebookBar/PhonebookBar';

const Layout = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px' }}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
