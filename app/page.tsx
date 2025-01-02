'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import DocumentsPage from '@/pages/DocumentsPage';
import TeamPage from '@/pages/TeamPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Documents':
        return <DocumentsPage />;
      case 'Team':
        return <TeamPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <main>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </main>
  );
}