import { useState } from 'react';
import logo from '../assets/Logo.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="إبراهيم راضي" />
            إبراهيم راضي
          </a>
        </div>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>خدماتنا</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>من نحن</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>اتصل بنا</a>
        </nav>
      </div>
    </header>
  );
}

export default Header; 