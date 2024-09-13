export default function EkMalzemeler({
  disabled,
  handleInputChange,
  malzeme,
  checked,
  className,
}) {
  return (
    <>
      <label className="malzeme">
        <input
          className={className}
          disabled={disabled}
          type="checkbox"
          name="ek-malzeme"
          value={malzeme}
          onChange={handleInputChange}
          checked={checked}
        />
        {malzeme}
      </label>
    </>
  );
}
