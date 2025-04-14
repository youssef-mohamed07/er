import { useEffect, useState } from 'react';
import './Contact.css';

function Contact() {
  const [animated, setAnimated] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleIconHover = (index) => {
    setHoveredIcon(index);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '162 ب ش 26يوليو جامعه الدول العربيه العجوزة الجيزة' },
    { icon: 'fas fa-phone', text: '01117558999' },
    { icon: 'fas fa-phone', text: '01024141022' },
    { icon: 'fas fa-phone', text: '01117151999' },
    { icon: 'fas fa-envelope', text: 'ebrhimrady2024@gmail.com' },
    { icon: 'fas fa-clock', text: 'من السبت إلى الخميس، 9 صباحًا - 9 مساءً' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', color: '#4267B2' },
    { icon: 'fab fa-instagram', url: '#', color: '#E1306C' },
    { icon: 'fab fa-twitter', url: '#', color: '#1DA1F2' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/+201117558999', color: '#25D366' }
  ];

  return (
    <section className="section contact" id="contact">
      <div className="contact-bg-elements">
        <div className="contact-circle circle-1"></div>
        <div className="contact-circle circle-2"></div>
        <div className="contact-circle circle-3"></div>
        <div className="contact-line line-1"></div>
        <div className="contact-line line-2"></div>
      </div>
      
      <div className="container">
        <div className={`section-title ${animated ? 'animated' : ''}`}>
          <h2>اتصل بنا</h2>
          <p>نحن هنا لتلبية احتياجاتكم في أي وقت</p>
          <div className="title-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`contact-cards-container ${animated ? 'animated' : ''}`}>
          <div className="contact-info-card">
            <div className="card-glow"></div>
            <h3>معلومات التواصل</h3>
            
            <div className="contact-info-items">
              {contactInfo.map((item, index) => (
                <div 
                  className={`contact-info-item ${animated ? 'animated' : ''}`} 
                  style={{ animationDelay: `${0.1 * index}s` }}
                  key={index}
                >
                  <div className="contact-icon-wrapper">
                    <i className={item.icon}></i>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-social-card">
            <div className="card-glow"></div>
            <h3>تواصل معنا</h3>
            
            <div className="contact-description">
              <p>يمكنكم التواصل معنا في أي وقت من خلال وسائل التواصل الاجتماعي أو الاتصال المباشر. نحن دائمًا في خدمتكم لتلبية احتياجاتكم وتقديم أفضل المنتجات بأعلى جودة وأفضل الأسعار.</p>
            </div>
            
            <div className="social-icons-container">
              {socialLinks.map((link, index) => (
                <a 
                  href={link.url} 
                  className={`social-icon-large ${animated ? 'animated' : ''}`}
                  style={{ 
                    animationDelay: `${0.15 * index}s`,
                    background: hoveredIcon === index ? link.color : 'white',
                    color: hoveredIcon === index ? 'white' : link.color
                  }}
                  onMouseEnter={() => handleIconHover(index)}
                  onMouseLeave={handleIconLeave}
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={index}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            
            <div className="cta-button-container">
              <a href="https://wa.me/+201117558999" className="contact-cta-button" target="_blank" rel="noopener noreferrer">
                <span className="button-text">تواصل معنا الآن</span>
                <i className="fas fa-arrow-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 