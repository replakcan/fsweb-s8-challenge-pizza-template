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
            <p>
              Boyut: <strong>{userChoices.boyut}</strong>
            </p>
            <p>
              Hamur: <strong>{userChoices.hamur}</strong>
            </p>
            <p>
              Ek Malzemeler: <strong>{userChoices["ek-malzeme"]}</strong>
            </p>
          </div>
        </div>
        <div className="price-container">
          <h3>Sipariş Toplamı </h3>
          <div className="secim-harci">
            <p>Seçimler</p>
            <p>
              <strong>{userChoices.secimler}.00₺</strong>
            </p>
          </div>
          <div className="secim-harci">
            <p>Toplam</p>
            <p>
              <strong>{userChoices.toplam_ucret}.00₺</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sonuc;
