import { useEffect, useState } from "react";
import SiparisFormuHeader from "../components/SiparisFormu_header";
import SiparisFormuInfo from "../components/SiparisFormu_info";
import PizzaBoyut from "../components/SiparisFormu_pizzaBoyut";
import PizzaHamur from "../components/SiparisFormu_pizzaHamur";

const initialSiparis = {
  boyut: "",
  hamur: "",
  "ek-malzeme": "",
  "siparis-notu": "",
  adet: "1",
  fiyat: "",
};

const boyutlar = ["Küçük", "Orta", "Büyük"];

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
    </section>
  );
}

export default SiparisFormu;
