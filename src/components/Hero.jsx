import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'تجارة التجزئة للأجهزة الكهربائية والأثاث';
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(displayText + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [displayText, textIndex]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      setIsVisible(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`hero section-full ${scrolled ? 'scrolled' : ''}`} id="home">
      <div className="hero-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>
      <div className="hero-sparkles">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
      <div className="hero-shine"></div>
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="glow-effect">إبراهيم راضي</h1>
          <div className="typing-text">
            <h2>{displayText}<span className="cursor">|</span></h2>
          </div>
          <p>متخصصون في تجارة الأجهزة الكهربائية المنزلية والأثاث والمعدات المنزلية بأعلى جودة وأفضل الأسعار</p>
          <div className="hero-contacts">
            <div className="contact-item"><i className="fas fa-phone"></i> 01117558999</div>
            <div className="contact-item"><i className="fas fa-phone"></i> 01024141022</div>
            <div className="contact-item"><i className="fas fa-phone"></i> 01117151999</div>
          </div>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">منتجاتنا</a>
            <a href="#contact" className="btn btn-secondary">تواصل معنا</a>
            <a href="https://wa.me/+201024141022" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
      <div className="hero-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,202.7C672,224,768,256,864,250.7C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero; 