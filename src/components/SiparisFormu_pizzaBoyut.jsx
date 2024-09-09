export default function PizzaBoyut({handleInputChange, boyut, checked}) {
  return (
    <>
      <label>
        <input
          type="radio"
          name="boyut"
          value={boyut}
          onChange={handleInputChange}
          checked={checked}
        />{" "}
        {boyut}
      </label>
    </>
  );
}
