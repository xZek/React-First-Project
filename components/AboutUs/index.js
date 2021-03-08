import React from 'react'
import './style.css'
function AboutUs() {
    return (
        <div>

         <div style={{ padding:'20px' }}  />


          <div className="section-header">
            <h3> Ofix.com</h3>
            <hr /><br />
            <p>Türkiye’deki başarılı online alışveriş siteleri arasında yer almakta olan Ofix.com, ürün çeşitliliği, avantajlı fiyatları ve %100 güvenilir alışveriş imkânı sağlayan sistemi ile kurulduğu 2012 yılından bu yana bireysel ve kurumsal müşterilerimizin en çok tercih ettiği e-ticaret platformlarından biri olmaya devam etmektedir. </p>
          </div>

          <div className="topLeft">
            <div class="about-text textrow">
              <p>Eğitim hayatınızda kullandığınız kalem çeşitlerinden dosyalara, klasörlerden fotokopi kağıtlarına, kişisel bakımınızdan genel temizlik ürünlerine, çay, kahve ve şeker gibi temel gıda ürünlerden kullan at malzemelere, elektrikli ofis cihazlarından teknoloji harikası ürünlere, orijinal kartuş ve tonerlerden muadil ürünlere, ofis mobilya seçeneklerinden iş güvenliği ve sağlığı ekipmanlarına kadar hayatın pek çok alanında ihtiyaç duyacağınız ürünlere internet alışverişinin tek adresi Ofix.com’dan ulaşabilirsiniz. Global ve yerli markaların ürünlerini müşterilerimize ‘’uygun fiyatlarla’’ sunmak en temel ilkelerimizdendir.</p>    
            </div>
          </div>
            
              <img src="assets/img/logo.png"  />
          
           
           
            <div style={{ padding:'50px' }}  />  
           
             
             <div className="float30">
              <img className="aboutImg" src="assets/img/about/1.png" />
              <h3>1 Günde Hızlı Teslimat</h3>
              <p>Hafta içi her gün saat 16:00’a kadar vermiş olduğunuz siparişleriniz 1 gün içerisinde teslim edilmektedir.</p>
             </div>
            

            <div className="float30">
              <img className="aboutImg" src="assets/img/about/2.png" />
              <h3>125 TL Üzerine Ücretsiz Kargo</h3>
              <p>125 TL ve üzeri siparişleriniz ücretsiz olarak teslim edilecektir. 125 TL altındaki siparişlerinizde ise kargo bedeli 8,26 TL dir.</p>
             </div>
            
             <div className="float30">
              <img className="aboutImg" src="assets/img/about/3.png" />
              <h3>Güvenli Alışveriş</h3>
              <p>Üyelik veya sipariş aşamasında paylaştığınız kişisel bilgiler koruma altındadır. </p>
             </div>


            <div style={{ padding:'20px' }}  />
            
           
         </div>
    )
}

export default AboutUs
