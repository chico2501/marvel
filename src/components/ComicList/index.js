/* eslint-disable react/prop-types */
import React from 'react';
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

export default ComicList;
