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
              <p>متخصصون في تجارة الأجهزة الكهربائية المنزلية والأثاث والمعدات المنزلية بأعلى جودة وأفضل الأسعار. منذ أكثر من 10 سنوات من الخبرة في مجالنا.</p>
              <div className="footer-social">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="https://wa.me/+201117558999" className="social-icon whatsapp-icon"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>روابط سريعة</h4>
              <ul>
                <li><a href="#home">الرئيسية</a></li>
                <li><a href="#services">منتجاتنا</a></li>
                <li><a href="#about">من نحن</a></li>
                <li><a href="#contact">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>تواصل معنا</h4>
              <p><i className="fas fa-map-marker-alt"></i> 162 ب ش 26يوليو جامعه الدول العربيه العجوزة الجيزة</p>
              <p><i className="fas fa-phone"></i> الهاتف الأول: 01117558999</p>
              <p><i className="fas fa-phone"></i> الهاتف الثاني: 01024141022</p>
              <p><i className="fas fa-phone"></i> الهاتف الثالث: 01117151999</p>
              <p><i className="fas fa-envelope"></i> البريد الإلكتروني: ebrhimrady2024@gmail.com</p>
              <p><i className="fas fa-clock"></i> من السبت إلى الخميس، 9 صباحًا - 9 مساءً</p>
              <a href="https://wa.me/+201117558999" className="whatsapp-btn">
                <i className="fab fa-whatsapp"></i> تواصل معنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>جميع الحقوق محفوظة &copy; {currentYear} إبراهيم راضي - تجارة الأجهزة الكهربائية والأثاث</p>
        </div>
      </div>
      
      <div className="scroll-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </footer>
  );
}

export default Footer; 