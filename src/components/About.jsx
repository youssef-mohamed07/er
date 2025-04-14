import { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [animated, setAnimated] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

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
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: 'fas fa-check-circle', text: 'منتجات أصلية بضمان', color: '#e53935' },
    { icon: 'fas fa-star', text: 'أفضل الماركات العالمية', color: '#fb8c00' },
    { icon: 'fas fa-certificate', text: 'ضمان على جميع المنتجات', color: '#43a047' },
    { icon: 'fas fa-tags', text: 'أسعار منافسة', color: '#1e88e5' },
    { icon: 'fas fa-truck', text: 'خدمة توصيل سريعة', color: '#8e24aa' },
    { icon: 'fas fa-headset', text: 'دعم فني متكامل', color: '#f4511e' }
  ];

  return (
    <section className="section about" id="about">
      <div className="about-bg-elements">
        <div className="about-shape shape-1"></div>
        <div className="about-shape shape-2"></div>
        <div className="about-shape shape-3"></div>
        <div className="about-dots"></div>
        <div className="about-line line-1"></div>
        <div className="about-line line-2"></div>
      </div>
      
      <div className="container">
        <div className={`section-title ${animated ? 'animated' : ''}`}>
          <h2>من نحن</h2>
          <p>تعرف على متجر إبراهيم راضي وخبرتنا الواسعة في مجال تجارة الأجهزة الكهربائية والأثاث المنزلي</p>
          <div className="title-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className="about-content-new">
          <div className={`about-card ${animated ? 'animated' : ''}`}>
            <div className="card-glow"></div>
            <div className="about-card-header">
              <h3>إبراهيم راضي</h3>
              <div className="experience-badge">+10 سنوات خبرة</div>
            </div>
            
            <div className="about-card-content">
              <p>نحن متخصصون في تجارة التجزئة للأجهزة الكهربائية المنزلية والأثاث والمعدات المنزلية الأخرى بخبرة تزيد عن 10 سنوات في هذا المجال. نقدم منتجات ذات جودة عالية وأسعار منافسة لعملائنا الكرام.</p>
              <p>يتميز متجرنا بتوفير تشكيلة واسعة من الأجهزة الكهربائية من أشهر الماركات العالمية، بالإضافة إلى قطع الأثاث المنزلي العصرية والمتينة التي تناسب جميع الأذواق.</p>
            </div>
          </div>
          
          <div className="features-container">
            <div className="features-title">
              <h3>ما يميزنا</h3>
              <div className="features-decoration"></div>
            </div>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div 
                  className={`feature-box ${animated ? 'animated' : ''}`} 
                  style={{ 
                    animationDelay: `${0.1 * index}s`, 
                    borderColor: activeFeature === index ? feature.color : 'transparent'
                  }}
                  key={index}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div 
                    className="feature-icon-wrapper" 
                    style={{ backgroundColor: feature.color }}
                  >
                    <i className={feature.icon}></i>
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`vision-mission ${animated ? 'animated' : ''}`}>
            <div className="vision-card">
              <div className="vision-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>رؤيتنا</h4>
              <p>أن نكون الخيار الأول للعملاء في مجال الأجهزة الكهربائية والأثاث، من خلال توفير منتجات عالية الجودة وخدمات متميزة في السوق المصري.</p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h4>مهمتنا</h4>
              <p>توفير حلول متكاملة للمنزل العصري من خلال تقديم منتجات ذات جودة عالية وأسعار منافسة، مع ضمان تجربة تسوق مثالية لجميع عملائنا.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 