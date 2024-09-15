import { useState } from 'react';

const Search = () => {
  const [keyWord, setKeyWord] = useState('');
  //   const [search, setSearch] = useState([]);

  return (
    <input
      type='text'
      value={keyWord}
      onChange={setKeyWord}
    />
  );
};

export default Search;
