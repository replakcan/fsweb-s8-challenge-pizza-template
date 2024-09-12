import PizzaBoyut from "../components/SiparisFormu_pizzaBoyut";
import SiparisFormu from "./SiparisFormu";

SiparisFormu

function Sonuc({boyut}) {
  return (
    <section className="siparis-ozet-sayfasi">
      <img src="Assets/Iteration-1-assets/logo.svg" />
      <div><p>lezzetin yolda</p>
      <p id="siparis-alindi"> SİPARİŞ ALINDI!</p></div>
      <p>Poisition Absolute Acı Pizza</p>
      <div>
        <p>Boyut: {}</p>
        <p>Hamur: {boyut}</p>
        <p>Ek Malzemeler: {boyut}</p>
      </div>
      <div>
        <p>Sipariş Toplamı </p>
        <p>Seçimler______{boyut}</p>
        <p>Toplam______{boyut}</p>
      </div>
    </section>
  );
}

export default Sonuc;
