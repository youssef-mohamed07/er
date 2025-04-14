import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission (e.g., send to backend)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
  };

  return (
    <section className="section contact" id="contact">
      <div className="container-fluid">
        <div className="container">
          <div className="section-title">
            <h2>اتصل بنا</h2>
            <p>نحن هنا للإجابة على استفساراتكم وتلبية احتياجاتكم</p>
          </div>
          
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>معلومات التواصل</h3>
              <p><i className="fas fa-map-marker-alt"></i> العنوان: شارع المعرض، المنطقة الصناعية</p>
              <p><i className="fas fa-phone"></i> الهاتف: 0123456789</p>
              <p><i className="fas fa-envelope"></i> البريد الإلكتروني: info@electrician.com</p>
              <p><i className="fas fa-clock"></i> ساعات العمل: من السبت إلى الخميس، 9 صباحًا - 9 مساءً</p>
              
              <div className="social-links">
                <h4>تابعنا على</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="الاسم" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="البريد الإلكتروني" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="رقم الهاتف" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="رسالتك" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">إرسال الرسالة</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 