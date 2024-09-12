import { NavLink } from "react-router-dom";

function GirisIcerik() {
  return (
    <div className="giris-icerik">
      <img src="Assets/Iteration-1-assets/logo.svg" />
      <p id="slogan" >KOD ACIKTIRIR, <br/> PİZZA DOYURUR</p>

      <NavLink to="/siparis-formu">
        <button className="giris-btn">ACIKTIM</button>
      </NavLink>
    </div>
  );
}

export default GirisIcerik;
