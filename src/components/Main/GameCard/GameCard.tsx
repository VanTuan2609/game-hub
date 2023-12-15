import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../../services/imgUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={5}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={17} height={10}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
