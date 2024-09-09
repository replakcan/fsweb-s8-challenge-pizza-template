export default function EkMalzemeler({handleInputChange, malzeme, checked}) {
    return (
      <>
        <label className="malzeme">
              <input
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
  