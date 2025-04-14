import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'تركيب وصيانة الأجهزة الكهربائية',
      description: 'نقدم خدمات تركيب وصيانة احترافية لجميع أنواع الأجهزة الكهربائية المنزلية والتجارية مع ضمان الجودة.',
      imageUrl: '/src/assets/service1.jpg',
      icon: 'fas fa-tools'
    },
    {
      id: 2,
      title: 'تمديدات كهربائية',
      description: 'خدمات تمديدات كهربائية للمنازل والمباني التجارية بأعلى معايير الجودة والأمان وفق المواصفات العالمية.',
      imageUrl: '/src/assets/service2.jpg',
      icon: 'fas fa-plug'
    },
    {
      id: 3,
      title: 'تركيب أنظمة الإضاءة',
      description: 'تصميم وتركيب أنظمة إضاءة حديثة وموفرة للطاقة تناسب احتياجاتك وتضيف لمسة جمالية مميزة.',
      imageUrl: '/src/assets/service3.jpg',
      icon: 'fas fa-lightbulb'
    },
    {
      id: 4,
      title: 'صيانة دورية',
      description: 'خدمات صيانة دورية للأنظمة الكهربائية للتأكد من سلامتها وكفاءتها واكتشاف الأعطال قبل حدوثها.',
      imageUrl: '/src/assets/service4.jpg',
      icon: 'fas fa-wrench'
    },
    {
      id: 5,
      title: 'تركيب كاميرات مراقبة',
      description: 'تركيب وصيانة أنظمة المراقبة وكاميرات الأمان للمنازل والمنشآت التجارية بأحدث التقنيات.',
      imageUrl: '/src/assets/service5.jpg',
      icon: 'fas fa-video'
    },
    {
      id: 6,
      title: 'أنظمة الطاقة الشمسية',
      description: 'تركيب أنظمة الطاقة الشمسية الصديقة للبيئة والموفرة للكهرباء للمنازل والمنشآت التجارية.',
      imageUrl: '/src/assets/service6.jpg',
      icon: 'fas fa-solar-panel'
    }
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container-fluid">
        <div className="container">
          <div className="section-title">
            <h2>خدماتنا</h2>
            <p>نقدم مجموعة متنوعة من الخدمات الكهربائية الاحترافية بأعلى معايير الجودة</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-img">
                  <img src={service.imageUrl} alt={service.title} />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 