export default function EkMalzemeler({
  disabled,
  onChange,
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
          onChange={onChange}
          checked={checked}
        />
        {malzeme}
      </label>
    </>
  );
}
