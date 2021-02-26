import React, { useEffect } from "react";
import { connect } from 'react-redux'

function SearchBox(props) {

  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {

    const results = props.congressMembers.filter(item => {
        return Object.keys(item).some(key => {
            return (
                (typeof item[key] === 'string' && item[key].includes(search.toLocaleLowerCase()))
                || 
                (typeof item[key] === 'number' && item[key] === Number(search.toLocaleLowerCase()))
            )
        });
    });

    setSearchResults(results);
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

function mapStateToProps(state, props) {
    return {
        congressMembers: state.congressMembers
    };
}

export default connect(mapStateToProps, null)(SearchBox);