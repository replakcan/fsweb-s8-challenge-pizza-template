export default function SiparisNotu({ handleInputChange, siparisnotu }) {
  return (
    <>
      <h3>Order Note</h3>
      <label className="bold-label">
        <textarea
          placeholder="write a note to the courier"
          id="siparis-notu"
          name="siparis-notu"
          value={siparisnotu}
          onChange={handleInputChange}
        />
      </label>
    </>
  )
}
