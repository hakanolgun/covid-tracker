import "./App.css";
import CardsContainer from "./components/cards/CardsContainer";
import Header from "./components/header/Header";
import Select from "./components/select/Select";

function App() {
  return (
    <div className="App">
      <Header />
      <CardsContainer />
      <Select />
    </div>
  );
}

export default App;
