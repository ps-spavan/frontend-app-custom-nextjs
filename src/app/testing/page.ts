'use client';

import dynamic from 'next/dynamic';

// import Link from 'next/link';

const DashboardPage = () => {
  const searchParams = useSearchParams() ;
  const path = searchParams.get('path');
  console.log(path, "Test");
  if (path !== null && path !== '' && path !== '/') {
    localStorage.setItem('url', path);
  }
  // <BrowserRouter>
  // </BrowserRouter>
  return null;
};

export default DashboardPage;
