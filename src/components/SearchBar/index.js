import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SearchBar = ({ searchStatus, searchTerm, searchComic }) => (
  <>
    <div className="search">
      <input
        className="inputbox"
        type="text"
        placeholder="Pesquise por título..."
        name="search"
        value={searchTerm}
        onChange={searchComic}
      />
    </div>
    {searchStatus && <div className="notfound">Nenhum comic encontrado.</div>}
  </>
);

SearchBar.propTypes = {
  searchStatus: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchComic: PropTypes.func.isRequired,
};

export default SearchBar;
