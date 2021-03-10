import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({ statusModal, closeModal }) => {
  const { infos, status } = statusModal;

  return (
    <div className={`modal ${status && 'ativo'}`} id="modal">
      <div className="conteudo">
        <button
          type="button"
          onClick={() => closeModal()}
          title="Fechar"
          className="fechar"
        >
          x
        </button>
        <h2>{infos.title}</h2>
        <div className="descricao">
          <img
            src={`${infos.thumbnail.path}.${infos.thumbnail.extension}`}
            alt={infos.title}
          />
          <div className="texto">
            <p>{infos.description && parse(infos.description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  statusModal: PropTypes.shape.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
