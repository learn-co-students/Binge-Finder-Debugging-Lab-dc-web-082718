import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = (props) => {
  return (
    <div>
      <Input type="text" placeholder="Search" onChange={props.handleSearch} />
    </div>
  )
}

export default Search;
