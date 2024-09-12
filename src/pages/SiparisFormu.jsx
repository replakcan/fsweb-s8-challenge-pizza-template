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
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form } from "reactstrap";

const initialSiparis = {
  isim: "",
  boyut: "",
  hamur: "",
  "ek-malzeme": "",
  "siparis-notu": "",
};

const initialErrors = {
  isim: "",
  boyut: "zorunlu alan*",
  hamur: "zorunlu alan*",
  "ek-malzeme": "En az 4 seçim yapmalısınız.",
};

const errorMessages = {
  isim: "İsim en az 3 karakter içermelidir.",
  "ek-malzeme": "En az 4 seçim yapmalısınız."
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
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const [adet, setAdet] = useState(1);

  useEffect(() => {
    if (
      siparis.boyut !== "" &&
      siparis.hamur !== "" &&
      siparis.isim.length >= 3 &&
      siparis["ek-malzeme"].length >= 4
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [siparis]);

  const countHandler = (event) => {
    const { id } = event.target;
    if (id === "cikar") {
      if (adet == 1) {
        setAdet(1);
      } else {
        setAdet((adet) => adet - 1);
      }
    } else if (id === "ekle") {
      setAdet((adet) => adet + 1);
    }
  };

  function handleInputChange(event) {
    let { name, value, checked } = event.target;
    console.log(event);
    

    if (name === "ek-malzeme") {
      if (siparis["ek-malzeme"].length >= 4) {
        setErrors({ ...errors, [name]: "" });
      } else {
        setErrors({ ...errors, [name]: errorMessages["ek-malzeme"] });
      }
    }

    if (name === "isim") {
      if (value.length >= 3) {
        setErrors({ ...errors, [name]: "" });
      } else {
        setErrors({ ...errors, [name]: errorMessages.isim });
      }
    }

    if (name === "boyut" || name === "hamur") {
      if (siparis.boyut !== "") {
        setErrors({ ...errors, [name]: "" });
      } else {
        setErrors({ ...errors, [name]: errorMessages.boyut });
      }
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

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) {
      console.log("h4t4");
      return;
    } else {
      history.push("/siparis-ozeti");
    }

    axios
      .post("https://reqres.in/api/pizza", siparis)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(siparis);
  return (
    <Form onSubmit={handleSubmit} className="siparis-formu">
      <SiparisFormuHeader />
      <div className="form">
        <SiparisFormuInfo />
        <div className="pizza-boyutlari">
          <div className="boyut-sec">
            <h3>Boyut Seç </h3>
            {errors.boyut && <p className="error-message">{errors.boyut}</p>}
            {boyutlar.map((boyut, index) => {
              return (
                <PizzaBoyut
                  className={index == 1 ? "data-cy-boyut" : ""}
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
            {errors.hamur && <p className="error-message">{errors.hamur}</p>}
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
                  className={
                    index >= 10 ? "data-cy-disabled" : "data-cy-not-disabled"
                  }
                  key={index}
                  disabled={
                    siparis["ek-malzeme"].length >= 10 &&
                    !siparis["ek-malzeme"].includes(malzeme)
                  }
                  handleInputChange={handleInputChange}
                  malzeme={malzeme}
                  checked={siparis["ek-malzeme"].includes(malzeme)}
                />
              );
            })}
            {errors["ek-malzeme"] && (
              <p className="error-message">{errors["ek-malzeme"]}</p>
            )}
          </div>
        </div>
        <div className="isim-alani">
          <IsimAlani isim={siparis.isim} onChange={handleInputChange} />
          {errors.isim && <p className="error-message">{errors.isim}</p>}
        </div>
        <div className="siparis-notu">
          <SiparisNotu
            handleInputChange={handleInputChange}
            siparisnotu={siparis["siparis-notu"]}
          />
        </div>
        <UcretHesap
          handleInputChange={countHandler}
          adet={adet}
          ekMalzemeHesabi={siparis["ek-malzeme"].length * 5}
          toplamHesap={(pizza_ucreti + siparis["ek-malzeme"].length * 5) * adet}
          disabled={!isValid}
          onClick={handleSubmit}
        />
      </div>
    </Form>
  );
}

export default SiparisFormu;
