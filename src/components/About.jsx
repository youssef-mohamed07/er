import './About.css';

function About() {
  return (
    <section className="section about" id="about">
      <div className="container-fluid">
        <div className="container">
          <div className="section-title">
            <h2>من نحن</h2>
            <p>تعرف على فريق إبراهيم راضي وخبرتنا الواسعة في مجال الخدمات الكهربائية</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3>إبراهيم راضي</h3>
              <p>نحن فريق متخصص في مجال الخدمات الكهربائية بخبرة تزيد عن 15 عامًا في هذا المجال. نقدم خدمات شاملة للمنازل والمنشآت التجارية بأعلى معايير الجودة والأمان.</p>
              <p>يضم فريقنا نخبة من الفنيين المؤهلين والمدربين على أحدث التقنيات في مجال الكهرباء، ونلتزم بتقديم خدمات متميزة في الوقت المحدد وبأسعار منافسة.</p>
              
              <div className="about-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>خدمة على مدار الساعة</span>
                </div>
                <div className="feature">
                  <i className="fas fa-user-tie"></i>
                  <span>فريق فني محترف</span>
                </div>
                <div className="feature">
                  <i className="fas fa-certificate"></i>
                  <span>ضمان على جميع الخدمات</span>
                </div>
                <div className="feature">
                  <i className="fas fa-tags"></i>
                  <span>أسعار منافسة</span>
                </div>
                <div className="feature">
                  <i className="fas fa-clock"></i>
                  <span>التزام بالمواعيد</span>
                </div>
                <div className="feature">
                  <i className="fas fa-tools"></i>
                  <span>معدات حديثة ومتطورة</span>
                </div>
              </div>
            </div>
            
            <div className="about-img">
              <img src="/src/assets/about.jpg" alt="إبراهيم راضي" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 