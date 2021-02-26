import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { search } from '../../redux/actions/filterActions';

function SearchBox(props) {

  const [searchValue, setSearchValue] = React.useState("");

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const inputData = props.congressMembers;
    props.search({searchValue, inputData});

  }, [searchValue]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <span className="search-state p-2">{props.searchState}</span>
    </div>
  );
}

function mapStateToProps(state) {
    return {
        congressMembers: state.fetch.congressMembers,
        searchState: state.search.searchState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        search: (searchValue, inputData) => dispatch(search(searchValue, inputData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);