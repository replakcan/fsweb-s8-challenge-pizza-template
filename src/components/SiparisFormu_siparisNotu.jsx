export default function SiparisNotu({handleInputChange, siparisnotu}) {
    return (
      <>
        <h3>Siparis Notu</h3>
        <label className="bold-label">
          <textarea
            id="siparis-notu"
            name="siparis-notu"
            value={siparisnotu}
            onChange={handleInputChange}
          />
        </label>
      </>
    );
  }
  