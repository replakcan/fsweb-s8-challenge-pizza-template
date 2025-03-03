import { NavLink } from 'react-router-dom'

export default function UcretHesap({ handleInputChange, adet, ekMalzemeHesabi, toplamHesap, disabled, onClick }) {
  return (
    <div className="hesap-butonlari">
      <div className="adet-butonlari">
        <button type="button" id="cikar" name="adet" value={adet} onClick={handleInputChange}>
          -
        </button>
        <p id="adettendir">{adet}</p>
        <button type="button" id="ekle" name="adet" value={adet} onClick={handleInputChange}>
          +
        </button>
      </div>
      <div className="siparis-toplami">
        <div className="siparis-toplami-info">
          <h3>Order Total</h3>
          <p>Ingredients____________________{ekMalzemeHesabi}₺</p>
          <p id="kirmizi">
            Total____________________
            {toplamHesap}₺
          </p>
        </div>
        <div className="submit-btn">
          <button onClick={onClick} disabled={disabled} type="submit">
            CONFIRM ORDER
          </button>
        </div>
      </div>
    </div>
  )
}
