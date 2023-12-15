import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Header/Navbar/Navbar";
import GameGrid from "./components/Main/GameGrid/GameGrid";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelected from "./components/Main/GameCard/PlatformSelected";
import SortSelected from "./components/Main/GameCard/SortSelected";
import GameHeading from "./components/Main/GameCard/GameHeading";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: `200px 1fr`,
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingLeft="6px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" margin="0 10px 10px 10px">
        <HStack marginBottom={5}>
          <GameHeading gameQuery={gameQuery} />
        </HStack>
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelected
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelected
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
