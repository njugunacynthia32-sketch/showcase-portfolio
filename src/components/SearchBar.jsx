function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "10px",
        margin: "10px 0",
        width: "100%",
        maxWidth: "400px"
      }}
    />
  );
}

export default SearchBar;