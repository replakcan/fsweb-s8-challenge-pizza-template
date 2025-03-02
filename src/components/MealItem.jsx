const MealItem = (props) => {
  const { img, name } = props

  return (
    <li>
      <img src={`./images/iteration-2-aseets/icons/${img}.svg`} />
      {name}
    </li>
  )
}

export default MealItem
