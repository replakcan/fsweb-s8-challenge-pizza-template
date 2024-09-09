import { NavLink } from "react-router-dom";

export default function UcretHesap({
  handleInputChange,
  adet,
  ekMalzemeHesabi,
  toplamHesap,
}) {
  return (
    <div className="hesap-butonlari">
      <div className="adet-butonlari">
        <button id="cikar" name="adet" value={adet} onClick={handleInputChange}>
          -
        </button>
        <p id="adettendir">{adet}</p>
        <button id="ekle" name="adet" value={adet} onClick={handleInputChange}>
          +
        </button>
      </div>
      <div className="siparis-toplami">
        <h3>Sipariş Toplamı</h3>
        <p>Seçimler..........{ekMalzemeHesabi}</p>
        <p id="kirmizi">
          Toplam..........
          {toplamHesap}
        </p>
        <NavLink to="/siparis-ozeti">
        <button type="submit">SİPARİŞ VER</button>
        </NavLink>
      </div>
    </div>
  );
}
