import SearchBar from "./components/SearchBar/SearchBar";

export default function Nav(props) {

  return (
     <div>
        <SearchBar onSearch={props.onSearch} />
     </div>
  );
}