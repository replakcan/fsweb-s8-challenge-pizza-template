const MenuItem = (props) => {
  const { img, name, rating, soldCount, price } = props

  return (
    <>
      <div className="card">
        <img src={`./images/iteration-2-aseets/pictures/food-${img}.png`} />
        <div>
          <h4 className="menu-item-header">{name}</h4>
          <div className="puantor">
            {rating}
            <div className="card-item-points">
              <p>({soldCount})</p>
              <p>
                <strong>{price}₺</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuItem
