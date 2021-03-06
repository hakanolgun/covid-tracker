import "./App.css";
import CardsContainer from "./components/cards/CardsContainer";
import Footer from "./components/footer/Footer";
import Graphics from "./components/graphic/Graphics";
import LineChart from "./components/graphic/LineChart";
import Header from "./components/header/Header";
import Select from "./components/select/Select";

function App() {
  return (
    <div className="App">
      <Header />
      <Select />
      <CardsContainer />
      <Graphics />
      <LineChart />
      <Footer />
    </div>
  );
}

export default App;
