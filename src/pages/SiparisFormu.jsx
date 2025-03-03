import { useEffect, useState } from 'react'
import SiparisFormuHeader from '../components/SiparisFormu_header'
import SiparisFormuInfo from '../components/SiparisFormu_info'
import PizzaBoyut from '../components/SiparisFormu_pizzaBoyut'
import PizzaHamur from '../components/SiparisFormu_pizzaHamur'
import EkMalzemeler from '../components/SiparisFormu_ekMalzemeler'
import SiparisNotu from '../components/SiparisFormu_siparisNotu'
import UcretHesap from '../components/SiparisFormu_ucretHesap'
import IsimAlani from '../components/SiparisFormu_isimAlani'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Form } from 'reactstrap'
import Footer from '../layouts/Footer'
import { boyutlar, pizza_ucreti, ekMalzemeler } from '../../db/order-page'

const initialSiparis = {
  isim: '',
  boyut: '',
  hamur: '',
  'ek-malzeme': '',
  'siparis-notu': '',
  secimler: 0,
  toplam_ucret: 0,
}

const initialErrors = {
  isim: '',
  boyut: 'required*',
  hamur: 'required*',
  'ek-malzeme': '',
}

const errorMessages = {
  isim: 'Name needs to be minimum of 3 characters',
  'ek-malzeme': 'Minimum of 4 ingredients required*',
}

function SiparisFormu({ setUserChoices }) {
  const [siparis, setSiparis] = useState(initialSiparis)
  const [errors, setErrors] = useState(initialErrors)
  const [isValid, setIsValid] = useState(false)
  const [adet, setAdet] = useState(1)

  useEffect(() => {
    if (siparis.boyut !== '' && siparis.hamur !== '' && siparis.isim.length >= 3 && siparis['ek-malzeme'].length >= 4) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }

    if (siparis['ek-malzeme'].length >= 4) {
      setErrors({ ...errors, ['ek-malzeme']: '' })
    } else {
      setErrors({ ...errors, ['ek-malzeme']: errorMessages['ek-malzeme'] })
    }
  }, [siparis])

  const countHandler = (event) => {
    const { id } = event.target
    if (id === 'cikar') {
      if (adet == 1) {
        setAdet(1)
      } else {
        setAdet((adet) => adet - 1)
      }
    } else if (id === 'ekle') {
      setAdet((adet) => adet + 1)
    }
  }

  function handleInputChange(event) {
    let { name, value } = event.target

    if (name === 'ek-malzeme') {
      if (siparis['ek-malzeme'].includes(value)) {
        setSiparis({
          ...siparis,
          [name]: siparis['ek-malzeme'].filter((malzeme) => malzeme !== value),
        })
      } else {
        setSiparis({
          ...siparis,
          [name]: [...siparis['ek-malzeme'], value],
        })
      }
    } else {
      setSiparis({ ...siparis, [name]: value })
    }

    if (name === 'isim') {
      if (value.length >= 3) {
        setErrors({ ...errors, [name]: '' })
      } else {
        setErrors({ ...errors, [name]: errorMessages.isim })
      }
    }

    if (name === 'boyut' || name === 'hamur') {
      if (siparis.boyut !== '') {
        setErrors({ ...errors, [name]: '' })
      } else {
        setErrors({ ...errors, [name]: errorMessages.boyut })
      }
    }
  }

  siparis.secimler = siparis['ek-malzeme'].length * 5
  siparis.toplam_ucret = adet * (siparis.secimler + pizza_ucreti)
  let history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isValid) {
      console.error('an error occured')
      return
    } else {
      history.push('/siparis-ozeti')
    }

    axios
      .post('https://reqres.in/api/pizza', siparis)
      .then((response) => {
        setUserChoices(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="siparis-formu">
        <SiparisFormuHeader />
        <div className="form">
          <SiparisFormuInfo />
          <div className="pizza-boyutlari">
            <div className="boyut-sec">
              <h3>Size</h3>
              {errors.boyut && <p className="error-message">{errors.boyut}</p>}
              {boyutlar.map((boyut, index) => {
                return (
                  <PizzaBoyut
                    className={index == 1 ? 'data-cy-boyut' : ''}
                    key={index}
                    boyut={boyut}
                    checked={siparis.boyut === boyut}
                    onChange={handleInputChange}
                  />
                )
              })}
            </div>
            <div className="hamur-sec">
              <h3>Dough Type</h3>
              {errors.hamur && <p className="error-message">{errors.hamur}</p>}
              <PizzaHamur handleInputChange={handleInputChange} hamur={siparis.hamur} />
            </div>
          </div>
          <div className="ek-malzemeler">
            <h3>Extra Ingredients</h3>
            <p>Min 4, max 10 ingredients can be added. (5₺ per ingredient)</p>
            <div className="malzemos">
              {ekMalzemeler.map((malzeme, index) => {
                return (
                  <EkMalzemeler
                    className={index >= 10 ? 'data-cy-disabled' : 'data-cy-not-disabled'}
                    key={index}
                    disabled={siparis['ek-malzeme'].length >= 10 && !siparis['ek-malzeme'].includes(malzeme)}
                    onChange={handleInputChange}
                    value={malzeme}
                    checked={siparis['ek-malzeme'].includes(malzeme)}
                  />
                )
              })}
            </div>
            {errors['ek-malzeme'] && <p className="error-message">{errors['ek-malzeme']}</p>}
          </div>
          <div className="isim-alani">
            <IsimAlani isim={siparis.isim} onChange={handleInputChange} />
            {errors.isim && <p className="error-message">{errors.isim}</p>}
          </div>
          <div className="siparis-notu">
            <SiparisNotu handleInputChange={handleInputChange} siparisnotu={siparis['siparis-notu']} />
          </div>
          <UcretHesap
            handleInputChange={countHandler}
            adet={adet}
            ekMalzemeHesabi={siparis['ek-malzeme'].length * 5}
            toplamHesap={(pizza_ucreti + siparis['ek-malzeme'].length * 5) * adet}
            disabled={!isValid}
            onClick={handleSubmit}
          />
        </div>
      </Form>
      <Footer />
    </>
  )
}

export default SiparisFormu
