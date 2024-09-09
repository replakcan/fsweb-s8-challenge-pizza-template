import { useEffect, useState } from "react";
import SiparisFormuHeader from "../components/SiparisFormu_header";
import SiparisFormuInfo from "../components/SiparisFormu_info";
import PizzaBoyut from "../components/SiparisFormu_pizzaBoyut";
import PizzaHamur from "../components/SiparisFormu_pizzaHamur";
import EkMalzemeler from "../components/SiparisFormu_ekMalzemeler";
import SiparisNotu from "../components/SiparisFormu_siparisNotu";
import UcretHesap from "../components/SiparisFormu_ucretHesap";
import IsimAlani from "../components/SiparisFormu_isimAlani";
import "bootstrap/dist/css/bootstrap.min.css";

const initialSiparis = {
  isim: "",
  boyut: "",
  hamur: "",
  "ek-malzeme": "",
  "siparis-notu": "",
  adet: "1",
};

const pizza_ucreti = 85.5;

const boyutlar = ["Küçük", "Orta", "Büyük"];

const ekMalzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

function SiparisFormu() {
  const [siparis, setSiparis] = useState(initialSiparis);
  const [isValid, setIsValid] = useState(false);
  const [adet, setAdet] = useState(1);

  useEffect(() => {
    if (siparis.boyut !== "" && siparis.hamur !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [siparis]);

  function handleInputChange(event) {
    let { id, name, value } = event.target;

    if (id === "cikar") {
      setAdet((adet) => adet - 1);
    } else if (id === "ekle") {
      setAdet((adet) => adet + 1);
    }
    

    if (name === "ek-malzeme") {
      if (siparis["ek-malzeme"].includes(value)) {
        setSiparis({
          ...siparis,
          [name]: siparis["ek-malzeme"].filter((malzeme) => malzeme !== value),
        });
      } else {
        setSiparis({
          ...siparis,
          [name]: [...siparis["ek-malzeme"], value],
        });
      }
    } else {
      setSiparis({ ...siparis, [name]: value });
    }
  }
  console.log(siparis);
  return (
    <section className="siparis-formu">
      <SiparisFormuHeader />
      <div className="form">
        <SiparisFormuInfo />
        <div className="pizza-boyutlari">
          <div className="boyut-sec">
            <h3>Boyut Seç</h3>
            {boyutlar.map((boyut, index) => {
              return (
                <PizzaBoyut
                  key={index}
                  boyut={boyut}
                  checked={siparis.boyut === boyut}
                  handleInputChange={handleInputChange}
                />
              );
            })}
          </div>
          <div className="hamur-sec">
            <h3>Hamur Seç</h3>
            <PizzaHamur
              handleInputChange={handleInputChange}
              hamur={siparis.hamur}
            />
          </div>
        </div>
        <div className="ek-malzemeler">
            <h3>Ek Malzemeler</h3>
            <p>En az 4 adet ve en fazla 10 adet seçim yapabilirsiniz. 5₺</p>
          <div className="malzemos">
          {ekMalzemeler.map((malzeme, index) => {
            return (
              <EkMalzemeler
                key={index}
                handleInputChange={handleInputChange}
                malzeme={malzeme}
                checked={siparis["ek-malzeme"].includes(malzeme)}
              />
            );
          })}
          </div>
        </div>
        <div className="isim-alani">
          <IsimAlani isim={siparis.isim} onChange={handleInputChange}/>
        </div>
        <div className="siparis-notu">
        <SiparisNotu
          handleInputChange={handleInputChange}
          siparisnotu={siparis["siparis-notu"]}
        />
        </div>
        <UcretHesap
          handleInputChange={handleInputChange}
          adet={adet}
          ekMalzemeHesabi={siparis["ek-malzeme"].length * 5}
          toplamHesap={(pizza_ucreti + siparis["ek-malzeme"].length * 5) * adet}
          disabled={!isValid}
        />
      </div>
    </section>
  );
}

export default SiparisFormu;
