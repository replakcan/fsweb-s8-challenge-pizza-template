export default function PizzaHamur({ handleInputChange, hamur }) {
  return (
    <>
      <label className="data-cy-selectbox">
        <select value={hamur} name="hamur" onChange={handleInputChange}>
          <option className="data-cy-hamur" value="Slim">
            Slim
          </option>
          <option value="Classic">Classic</option>
          <option value="Thick">Thick</option>
        </select>
      </label>
    </>
  )
}
