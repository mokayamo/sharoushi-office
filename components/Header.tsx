import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScroll = (id: string) => {
    setIsOpen(false);
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home and then scroll
      window.location.hash = `/#${id}`;
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      window.location.href = '/';
    }
  };
  
  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { id: 'about', text: '事務所紹介' },
    { id: 'services', text: '業務内容' },
    { id: 'pricing', text: '料金' },
    { id: 'faq', text: 'Q&A' },
    { id: 'contact', text: 'お問い合わせ' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleLogoClick} className="text-2xl sm:text-3xl font-bold text-primary">
              ◯◯社会保険労務士事務所
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={
                    link.id === 'contact'
                      ? "bg-primary text-white font-bold px-6 py-2 rounded-full shadow-lg hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300"
                      : "text-slate-600 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
                  }
                >
                  {link.text}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary-dark inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={
                  link.id === 'contact'
                    ? "bg-primary text-white font-bold block w-full text-center px-3 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 mx-2 mb-2"
                    : "text-slate-600 hover:bg-secondary hover:text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
                }
              >
                {link.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
