import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import "./App.css";
import { usePokemons } from "./hooks/usePokemons";
import { useSelector } from "react-redux";
import { selectFilteredPokemons } from "./slices/dataSlice";

function App() {
  const { loading } = usePokemons();
  const filteredPokemons = useSelector(selectFilteredPokemons);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
  );
}

export default App;
