export default function ({ isim, onChange }) {
  return (
    <>
      <label>
        İsim:
        <input
          type="text"
          id="text"
          name="isim"
          value={isim}
          onChange={onChange}
        />
      </label>
    </>
  );
}
