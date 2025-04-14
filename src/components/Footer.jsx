import logo from '../assets/Logo.png';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <div className="footer-logo">
                <img src={logo} alt="إبراهيم راضي" />
                <h4>إبراهيم راضي</h4>
              </div>
              <p>نقدم خدمات كهربائية متكاملة للمنازل والمنشآت التجارية بأعلى معايير الجودة والأمان وبأسعار منافسة.</p>
              <div className="footer-social">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="https://wa.me/+201234567890" className="social-icon whatsapp-icon"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>روابط سريعة</h4>
              <ul>
                <li><a href="#home">الرئيسية</a></li>
                <li><a href="#services">خدماتنا</a></li>
                <li><a href="#about">من نحن</a></li>
                <li><a href="#contact">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>تواصل معنا</h4>
              <p><i className="fas fa-map-marker-alt"></i> شارع المعرض، المنطقة الصناعية</p>
              <p><i className="fas fa-phone"></i> الهاتف: 0123456789</p>
              <p><i className="fas fa-envelope"></i> البريد الإلكتروني: info@electrician.com</p>
              <p><i className="fas fa-clock"></i> من السبت إلى الخميس، 9 صباحًا - 9 مساءً</p>
              <a href="https://wa.me/+201234567890" className="whatsapp-btn">
                <i className="fab fa-whatsapp"></i> تواصل معنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>جميع الحقوق محفوظة &copy; {currentYear} إبراهيم راضي</p>
        </div>
      </div>
      
      <div className="scroll-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </footer>
  );
}

export default Footer; 