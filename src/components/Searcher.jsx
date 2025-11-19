import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../slices/dataSlice";

const Searcher = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.data.searchTerm);

  const handleSearch = (value) => {
    dispatch(setSearchTerm(value));
  };

  return (
    <Input.Search
      placeholder="Buscar..."
      style={{ marginBottom: 16 }}
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      onSearch={handleSearch}
      allowClear
    />
  );
};

export default Searcher;
