import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = () => {
  return (
    <Card
      title="Ditto"
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto"
        />
      }
    >
      <Meta description="fire, magic"></Meta>
    </Card>
  );
};

export default PokemonCard;
