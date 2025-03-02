import { NavLink, useHistory } from "react-router-dom";

export default function MainContent() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/siparis-formu");
  };

  return (
    <>
      <div className="giris-icerik">
        <div className="giris-content">
          <img src="./images/iteration-1-assets/logo.svg" />
          <div>
            <p id="firsat">a wise man once said:</p>
            <p id="slogan">
              You Can Always Look Thicker <br /> Looks Better!
            </p>
          </div>

          <NavLink to="/siparis-formu">
            <button className="giris-btn">ARE YOU HUNGRY?</button>
          </NavLink>
        </div>
      </div>
      <section className="main-container">
        <ul className="ul_bir">
          <li>
            <img src="./images/iteration-2-aseets/icons/1.svg" />
            YENİ! Kore
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/2.svg" />
            Pizza
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/3.svg" />
            Burger
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/4.svg" />
            Kızartmalar
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/5.svg" />
            Fast food
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/6.svg" />
            Gazlı İçecek
          </li>
        </ul>
        <div className="trinity">
          <div className="tri-left">
            <div className="left-card">
              <h2>
                Chef's <br />
                Special
              </h2>
              <p>No pain no gain pizza</p>
              <MakeOrderButton onClick={handleClick} />
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="tri-right">
            <div className="right-card-one">
              <h4>
                BoxInABox <br />
                Burger Menu
              </h4>
              <button onClick={handleClick} className="btnburak">
                SİPARİŞ VER
              </button>
            </div>
            <div className="right-card-two">
              <h4>
                <span>Waay faster courier</span> <br />
                just like Schumacher!
              </h4>
              <button onClick={handleClick} className="btnburak">
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
        <div className="text-container">
          <p id="satisfy">stop acting rough on yourself</p>
          <p className="xlarge-yazi">We Already Know You Want Them All!</p>
        </div>
        <ul className="ul_iki">
          <li>
            <img src="./images/iteration-2-aseets/icons/1.svg" />
            YENİ! Kore
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/2.svg" />
            Pizza
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/3.svg" />
            Burger
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/4.svg" />
            Kızartmalar
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/5.svg" />
            Fast food
          </li>
          <li>
            <img src="./images/iteration-2-aseets/icons/6.svg" />
            Gazlı İçecek
          </li>
        </ul>
        <div className="menu-cards">
          <div className="card">
            <img src="./images/iteration-2-aseets/pictures/food-1.png" />
            <div>
              <h4>Terminal Pizza</h4>
              <div className="puantor">
                4.9
                <div className="card-item-points">
                  <p>(200)</p>
                  <p>
                    <strong>60₺</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./images/iteration-2-aseets/pictures/food-2.png" />
            <div>
              <h4>Acı yok raki burger</h4>
              <div className="puantor">
                4.9
                <div className="card-item-points">
                  <p>(200)</p>
                  <p>
                    <strong>60₺</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./images/iteration-2-aseets/pictures/food-3.png" />
            <div>
              <h4>useEffect Tavuklu Burger</h4>
              <div className="puantor">
                4.9
                <div className="card-item-points">
                  <p>(200)</p>
                  <p>
                    <strong>60₺</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
