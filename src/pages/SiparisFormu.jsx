import { useEffect, useState } from "react";
import SiparisFormuHeader from "../components/SiparisFormu_header";
import SiparisFormuInfo from "../components/SiparisFormu_info";
import PizzaBoyut from "../components/SiparisFormu_pizzaBoyut";
import PizzaHamur from "../components/SiparisFormu_pizzaHamur";
import EkMalzemeler from "../components/SiparisFormu_ekMalzemeler";

const initialSiparis = {
  boyut: "",
  hamur: "",
  "ek-malzeme": "",
  "siparis-notu": "",
  adet: "1",
  fiyat: "",
};

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

  function handleInputChange(event) {
    let { id, name, value } = event.target;
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
      <SiparisFormuInfo />
      <div className="pizza-boyutlari">
        <div className="boyut-sec">
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
          <PizzaHamur
            handleInputChange={handleInputChange}
            hamur={siparis.hamur}
          />
        </div>
      </div>
      <div className="ek-malzemeler">
        {ekMalzemeler.map((malzeme, index) => {
          return <EkMalzemeler
            key={index}
            handleInputChange={handleInputChange}
            malzeme={malzeme}
            checked={siparis["ek-malzeme"].includes(malzeme)}
          />;
        })}
      </div>
    </section>
  );
}

export default SiparisFormu;
