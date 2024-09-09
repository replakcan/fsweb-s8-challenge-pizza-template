export default function SiparisNotu({handleInputChange, siparisnotu}) {
    return (
      <>
        <h3>Sipariş Notu</h3>
        <label className="bold-label">
          <textarea
          placeholder="Siparişine eklemek istediğin bir not var mı?"
            id="siparis-notu"
            name="siparis-notu"
            value={siparisnotu}
            onChange={handleInputChange}
          />
        </label>
      </>
    );
  }
  