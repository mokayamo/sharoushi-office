import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center">
          <span className="text-slate-400">&copy; {new Date().getFullYear()} ◯◯社会保険労務士事務所. All rights reserved.</span>
          <Link to="/tos" className="text-slate-300 hover:text-white transition-colors">利用規約</Link>
          <Link to="/privacy" className="text-slate-300 hover:text-white transition-colors">プライバシーポリシー</Link>
          <Link to="/sct" className="text-slate-300 hover:text-white transition-colors">特定商取引法に基づく表記</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
