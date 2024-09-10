export default function PizzaHamur({handleInputChange, hamur}) {
    return (
      <>
        <label className="bold-label">
            <select
              value={hamur}
              name="hamur"
              onChange={handleInputChange}
            >
              <option className="data-cy-hamur" value="İnce">İnce Hamur</option>
              <option value="Orta">Orta Hamur</option>
              <option value="Kalın">Kalın Hamur</option>
            </select>
          </label>
      </>
    );
  }
  