const MakeOrderButton = (props) => {
  const { onClick } = props

  return (
    <>
      <button onClick={onClick} className="make-order-btn">
        ORDER NOW
      </button>
    </>
  )
}

export default MakeOrderButton
