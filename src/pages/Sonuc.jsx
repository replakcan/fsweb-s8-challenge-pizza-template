import Footer from "../layouts/Footer";

function Sonuc({ userChoices }) {
  return (
    <>
      <section className="siparis-ozet-sayfasi">
        <img src="./images/iteration-1-assets/logo.svg" />
        <div className="sonuc-text">
          <p className="lezzet">rest is up to us</p>
          <p id="siparis-alindi"> WE RECIEVED YOUR ORDER!</p>
        </div>
        <div>
          <h3>No Pain No Gain Pizza</h3>
          <div>
            <p>
              Size: <strong>{userChoices.boyut}</strong>
            </p>
            <p>
              Dough: <strong>{userChoices.hamur}</strong>
            </p>
            <p>
              Extra Ingredients: <strong>{userChoices["ek-malzeme"]}</strong>
            </p>
          </div>
        </div>
        <div className="price-container">
          <h3>Order Total </h3>
          <div className="secim-harci">
            <p>Extra</p>
            <p>
              <strong>{userChoices.secimler}.00₺</strong>
            </p>
          </div>
          <div className="secim-harci">
            <p>Total</p>
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
