import { Input, InputGroup, InputLeftElement, filter } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup margin="0 50px" width="1000px">
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} placeholder="Search games....."></Input>;
      </InputGroup>
    </form>
  );
};

export default SearchInput;
