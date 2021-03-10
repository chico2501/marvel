/* eslint-disable react/prop-types */
import React from 'react';
import { MdFavorite } from 'react-icons/md';
import './style.scss';

const Card = ({ comic, handleComic, openModal, selectedComics }) => {
  const statusCard = selectedComics.find((c) => c.id === comic.id);

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

export default Card;
