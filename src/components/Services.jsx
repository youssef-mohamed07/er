import './Services.css';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import service5 from '../assets/service5.jpg';
import service6 from '../assets/service6.jpg';

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>منتجاتنا</h2>
          <p>نقدم لكم مجموعة متنوعة من الأجهزة الكهربائية والأثاث المنزلي بأعلى جودة وأفضل الأسعار</p>
        </div>
        
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img">
              <img src={service1} alt="أجهزة تلفزيون وشاشات" />
            </div>
            <div className="product-content">
              <div className="product-icon">
                <i className="fas fa-tv"></i>
              </div>
              <h3>أجهزة تلفزيون وشاشات</h3>
              <p>تشكيلة واسعة من أحدث موديلات الشاشات وأجهزة التلفزيون من أشهر الماركات العالمية بأحجام متنوعة وتقنيات متطورة</p>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-img">
              <img src={service2} alt="أثاث منزلي" />
            </div>
            <div className="product-content">
              <div className="product-icon">
                <i className="fas fa-chair"></i>
              </div>
              <h3>أثاث منزلي</h3>
              <p>تشكيلة متكاملة من الأثاث المنزلي بتصاميم عصرية وخامات عالية الجودة تناسب مختلف الأذواق والمساحات</p>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-img">
              <img src={service3} alt="أجهزة المطبخ" />
            </div>
            <div className="product-content">
              <div className="product-icon">
                <i className="fas fa-blender"></i>
              </div>
              <h3>أجهزة المطبخ</h3>
              <p>أحدث أجهزة المطبخ الكهربائية من ثلاجات وأفران وغسالات وخلاطات وغيرها من الأجهزة الضرورية للمطبخ العصري</p>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-img">
              <img src={service4} alt="أجهزة التكييف والتبريد" />
            </div>
            <div className="product-content">
              <div className="product-icon">
                <i className="fas fa-fan"></i>
              </div>
              <h3>أجهزة التكييف والتبريد</h3>
              <p>مكيفات ومراوح وأنظمة تبريد وتدفئة بأحدث التقنيات وأعلى معايير الكفاءة في استهلاك الطاقة وبمختلف القدرات</p>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-img">
              <img src={service5} alt="أجهزة العناية بالملابس" />
            </div>
            <div className="product-content">
              <div className="product-icon">
                <i className="fas fa-tshirt"></i>
              </div>
              <h3>أجهزة العناية بالملابس</h3>
              <p>غسالات ومجففات وأجهزة كي الملابس من ماركات عالمية موثوقة توفر أفضل النتائج في العناية بملابسك</p>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-img">
              <img src={service6} alt="أثاث غرف المعيشة" />
            </div>
            <div className="product-content">
              <div className="product-icon">
                <i className="fas fa-couch"></i>
              </div>
              <h3>أثاث غرف المعيشة</h3>
              <p>تشكيلة رائعة من أثاث غرف المعيشة والصالونات بتصاميم أنيقة ومريحة تجمع بين الأناقة والراحة لمنزلك</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 