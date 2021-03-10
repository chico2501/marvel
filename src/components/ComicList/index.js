import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.scss';

const ComicList = ({
  searchResults,
  selectedComics,
  handleComic,
  openModal,
}) => (
  <ul className="lista">
    {searchResults.map((comic) => (
      <Card
        key={comic.id}
        comic={comic}
        handleComic={handleComic}
        selectedComics={selectedComics}
        openModal={openModal}
      />
    ))}
  </ul>
);

ComicList.propTypes = {
  searchResults: PropTypes.shape.isRequired,
  selectedComics: PropTypes.shape.isRequired,
  handleComic: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ComicList;
