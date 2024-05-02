import "./App.css";
import Beneficios from "./Components/Beneficios";
import Header from "./Components/Header";
import HomeSection from "./Components/Home";
import QuienesSomos from "./Components/QuienesSomos";

function App() {
  return (
    <>
      <Header></Header>
      <HomeSection></HomeSection>
      <QuienesSomos></QuienesSomos>
      <Beneficios></Beneficios>
    </>
  );
}

export default App;
