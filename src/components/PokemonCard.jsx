import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ name, url }) => {
  const id = url?.match(/\/pokemon\/(\d+)\/?$/)?.[1];
  const spriteUrl = id
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    : "";
  return (
    <Card
      title={name}
      cover={
        <img
          src={spriteUrl}
          alt={name}
        />
      }
    >
      <Meta description="fire, magic"></Meta>
    </Card>
  );
};

export default PokemonCard;
