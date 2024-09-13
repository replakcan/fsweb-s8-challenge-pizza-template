import Footer from "../layouts/Footer";

function Sonuc({ userChoices }) {
  return (
    <>
      <section className="siparis-ozet-sayfasi">
        <img src="Assets/Iteration-1-assets/logo.svg" />
        <div className="sonuc-text">
          <p className="lezzet">lezzetin yolda</p>
          <p id="siparis-alindi"> SİPARİŞ ALINDI!</p>
        </div>
        <div>
          <h3>Poisition Absolute Acı Pizza</h3>
          <div>
            <p>Boyut: {userChoices.boyut}</p>
            <p>Hamur: {userChoices.hamur}</p>
            <p>Ek Malzemeler: {userChoices["ek-malzeme"]}</p>
          </div>
        </div>
        <div className="price-container">
          <h3>Sipariş Toplamı </h3>
          <div className="secim-harci">
            <p>Seçimler</p>
            <p>{userChoices.secimler}.00₺</p>
          </div>
          <div className="secim-harci">
            <p>Toplam</p>
            <p>{userChoices.toplam_ucret}.00₺</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sonuc;
