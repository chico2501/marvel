import React from 'react';
import PropTypes from 'prop-types';
import { MdFavorite } from 'react-icons/md';
import './style.scss';

const Card = ({ comic, handleComic, openModal, selectedComics }) => {
  const statusCard = selectedComics.find((c) => c.id === comic.id);

  console.log(statusCard);
  return (
    <li className={`item ${statusCard ? 'ativo' : ''}`}>
      <div className="infos">
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          onClick={() => openModal(comic.id)}
          aria-hidden="true"
        />
        <h3>{comic.title}</h3>
      </div>

      <button
        className={`selecionar ${statusCard ? 'ativo' : ''}`}
        type="button"
        onClick={() => handleComic(comic.id)}
      >
        <MdFavorite size={30} /> Selecione
      </button>
    </li>
  );
};

Card.propTypes = {
  comic: PropTypes.shape.isRequired,
  selectedComics: PropTypes.shape.isRequired,
  handleComic: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Card;
