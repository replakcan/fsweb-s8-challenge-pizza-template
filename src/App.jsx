import "./App.css";
import { Switch, Route } from "react-router-dom";
import SiparisFormu from "./pages/SiparisFormu";
import Giris from "./pages/Giris";
import Sonuc from "./pages/Sonuc";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Giris />
        </Route>
      </Switch>
      <Switch>
        <Route path="/siparis-formu">
          <SiparisFormu />
        </Route>
      </Switch>
      <Switch>
        <Route path="/siparis-ozeti">
          <Sonuc />
        </Route>
      </Switch>
    </>
  );
}

export default App;
