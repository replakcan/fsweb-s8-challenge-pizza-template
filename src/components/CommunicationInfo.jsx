const CommunicationInfo = (props) => {
  const { img, text } = props

  return (
    <div className="iconke">
      <img src={`./images/iteration-2-aseets/footer/icons/icon-${img}.png`} />
      <p>{text}</p>
    </div>
  )
}

export default CommunicationInfo