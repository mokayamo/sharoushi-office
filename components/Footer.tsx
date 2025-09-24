import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-6">
            <Link to="/tos" className="text-slate-300 hover:text-white transition-colors">利用規約</Link>
            <Link to="/privacy" className="text-slate-300 hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link to="/sct" className="text-slate-300 hover:text-white transition-colors">特定商取引法に基づく表記</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} ◯◯社会保険労務士事務所. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
