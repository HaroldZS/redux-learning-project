import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ name, image }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
    >
      <Meta description="fire, magic"></Meta>
    </Card>
  );
};

export default PokemonCard;
