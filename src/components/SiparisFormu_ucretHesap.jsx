import { NavLink } from "react-router-dom";

export default function UcretHesap({
  handleInputChange,
  adet,
  ekMalzemeHesabi,
  toplamHesap,
  disabled,
  onClick
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
        <div className="siparis-toplami-info">
        <h3>Sipariş Toplamı</h3>
        <p>Seçimler____________________{ekMalzemeHesabi}₺</p>
        <p id="kirmizi">
          Toplam____________________
          {toplamHesap}₺
        </p>
        </div>
        <div className="submit-btn">
        <NavLink to="/siparis-ozeti">
        <button onClick={onClick} disabled={disabled} type="submit">SİPARİŞ VER</button>
        </NavLink>
        </div>
      </div>
    </div>
  );
}
