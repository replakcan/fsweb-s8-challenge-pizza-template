import { NavLink, useHistory } from 'react-router-dom'
import { restaurantMenu } from '../../db/restaurant-menu'
import MenuItem from '../components/MenuItem'
import { mealItems } from '../../db/meal-item'
import MealItem from '../components/MealItem'
import MakeOrderButton from '../components/MakeOrderButton'

export default function MainContent() {
  let history = useHistory()

  const handleClick = () => {
    history.push('/siparis-formu')
  }

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
          {mealItems.map((meal) => {
            return <MealItem key={meal.id} img={meal.img} name={meal.name} />
          })}
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
            </div>
          </div>
          <div className="tri-right">
            <div className="right-card-one">
              <h4>
                BoxInABox <br />
                Burger Menu
              </h4>
              <MakeOrderButton onClick={handleClick} />
            </div>
            <div className="right-card-two">
              <h4>
                <span>Waay faster courier</span> <br />
                just like Schumacher!
              </h4>
              <MakeOrderButton onClick={handleClick} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <p id="satisfy">stop acting rough on yourself</p>
          <p className="xlarge-yazi">We Already Know You Want Them All!</p>
        </div>
        <ul className="ul_iki">
          {mealItems.map((meal) => {
            return <MealItem key={meal.id} img={meal.img} name={meal.name} />
          })}
        </ul>
        <div className="menu-cards">
          {restaurantMenu.map((el) => {
            return (
              <MenuItem
                key={el.id}
                img={el.img}
                name={el.name}
                rating={el.rating}
                soldCount={el.soldCount}
                price={el.price}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
