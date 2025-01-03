'use client';
import React from 'react';
import { NavigationProps } from '../types/interfaces';

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => (
  <nav className="bg-sky-950 p-4">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
      <div className="text-white font-bold text-xl">BSE25-26</div>
      <div className="flex space-x-4">
        {['Home', 'Documents', 'Team'].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 rounded ${
              currentPage === page
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

export default Navigation;