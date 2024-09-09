export default function EkMalzemeler({ disabled, handleInputChange, malzeme, checked }) {
  return (
    <>
      <label className="malzeme">
        <input
          disabled={disabled}
          type="checkbox"
          name="ek-malzeme"
          value={malzeme}
          onChange={handleInputChange}
          checked={checked}
        />{" "}
        {malzeme}
      </label>
    </>
  );
}
