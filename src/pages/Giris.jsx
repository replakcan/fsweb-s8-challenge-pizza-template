import GirisIcerik from "../components/Giris_Icerik";
import MainContent from "../layouts/Main_content";

function Giris() {
  return (
    <div className="baslangic">
      <section className="giris">
        <GirisIcerik />
      </section>
      <MainContent />
    </div>
  );
}

export default Giris;
