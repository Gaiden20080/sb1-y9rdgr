import React from 'react';
import { Code2 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 size={32} />
          <h1 className="text-2xl font-bold">CodeMaster</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#resources" className="hover:text-purple-200">Resources</a></li>
            <li><a href="#tools" className="hover:text-purple-200">Tools</a></li>
            <li><a href="#learn" className="hover:text-purple-200">Learn</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};