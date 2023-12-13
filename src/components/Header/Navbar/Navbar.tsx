import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import logo from "../../../../src/assets/react.svg";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} height={20} padding="0 12px">
      <HStack>
        <Image src={logo}></Image>
        <SearchInput onSearch={onSearch} />
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
