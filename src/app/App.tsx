import React, { useState } from 'react';
import { Layout } from '@/app/components/stars/Layout';
import { Home } from '@/app/components/stars/Home';
import { Project } from '@/app/components/stars/Project';
import { Partners } from '@/app/components/stars/Partners';
import { FAQ } from '@/app/components/stars/FAQ';
import { Contact } from '@/app/components/stars/Contact';
import { Toaster } from 'sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'project':
        return <Project />;
      case 'partners':
        return <Partners />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
      <Toaster position="top-right" richColors />
    </>
  );
}
