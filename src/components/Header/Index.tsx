import './styles.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="menu-toogle">
          <div className='menu-mob' onClick={toggleMenu}>
            <svg width="30" height="30" viewBox="0 0 100 80" fill="#FFF" xmlns="http://www.w3.org/2000/svg" className={`hamburger ${isOpen ? 'open' : ''}`}>
              <rect className="bar top" width="100" height="10" rx="5"></rect>
              <rect className="bar middle" y="30" width="100" height="10" rx="5"></rect>
              <rect className="bar bottom" y="60" width="100" height="10" rx="5"></rect>
            </svg>
          </div>
          <div className="type-logo">Dev Portfólio</div>
        </div>
        <nav className={`navigation ${isOpen ? 'open' : ''}`}>
          <a href="#inicio" className="nav-item">Início</a>
          <a href="#sobre" className="nav-item">Sobre</a>
          <a href="#skills" className="nav-item">Habilidades</a>
          <a href="#projetos" className="nav-item">Projetos</a>
          <a href="#blog" className="nav-item">Blog</a>
          <a href="#study-list" className="nav-item">Estudos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
