export default function IsimAlani({ isim, onChange }) {
  return (
    <>
      <h3>Name</h3>
      <label className="isim-input">
        <input placeholder="name" type="text" id="text" name="isim" value={isim} onChange={onChange} />
      </label>
    </>
  )
}
