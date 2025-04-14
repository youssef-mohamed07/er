import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'مكيفات هواء',
      description: 'مكيفات هواء عالية الجودة من ماركات عالمية',
      imageUrl: '/src/assets/product1.jpg',
    },
    {
      id: 2,
      name: 'أنظمة إضاءة LED',
      description: 'إضاءة LED موفرة للطاقة بأشكال متنوعة',
      imageUrl: '/src/assets/product2.jpg',
    },
    {
      id: 3,
      name: 'أفران كهربائية',
      description: 'أفران كهربائية حديثة بميزات متقدمة',
      imageUrl: '/src/assets/product3.jpg',
    },
    {
      id: 4,
      name: 'ثلاجات',
      description: 'ثلاجات بأحجام مختلفة وتقنيات حديثة',
      imageUrl: '/src/assets/product4.jpg',
    },
    {
      id: 5,
      name: 'غسالات ملابس',
      description: 'غسالات أوتوماتيكية توفر الوقت والجهد',
      imageUrl: '/src/assets/product5.jpg',
    },
    {
      id: 6,
      name: 'سخانات مياه',
      description: 'سخانات مياه آمنة وفعالة',
      imageUrl: '/src/assets/product6.jpg',
    },
  ];

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-title">
          <h2>منتجاتنا</h2>
          <p>نعرض مجموعة واسعة من المنتجات الكهربائية عالية الجودة</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-img">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products; 