export default function PizzaBoyut({
  handleInputChange,
  boyut,
  checked,
  className,
}) {
  return (
    <>
      <label>
        <input
          className={className}
          type="radio"
          name="boyut"
          value={boyut}
          onChange={handleInputChange}
          checked={checked}
        />
        {boyut}
      </label>
    </>
  );
}
