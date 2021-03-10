import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import SearchBar from '../../components/SearchBar';
import ComicList from '../../components/ComicList';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

const Home = () => {
  const apikey = 'f38708c6ffe5dbdf2efe0c2c9aeda48b';
  const hash = '0fe0e7f2f3382375948fed5c2d448f87';

  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false);
  const [selectedComics, setSelectedComics] = useState([]);
  const [statusModal, setStatusModal] = useState({
    status: false,
    infos: null,
  });

  const getComics = () => {
    api
      .get('comics', {
        params: {
          ts: '1',
          apikey,
          hash,
        },
      })
      .then((response) => {
        if (response.status === 204 || response.status === 404) {
          return false;
        }
        return response.data;
      })
      .then((response) => {
        const data = response.data.results.map((comic) => ({
          ...comic,
        }));
        setComics(data);
      });
  };

  const selectComic = (id, type) => {
    api
      .get(`comics/${id}`, {
        params: {
          ts: '1',
          apikey,
          hash,
        },
      })
      .then((response) => {
        if (response.status === 204 || response.status === 404) {
          return false;
        }
        return response.data;
      })
      .then((response) => {
        const data = response.data.results;

        if (type === 'select') {
          setSelectedComics([...selectedComics, data[0]]);
        } else {
          setStatusModal({
            status: true,
            infos: data[0],
          });
        }

        return data;
      });
  };

  useEffect(() => {
    getComics();
  }, [selectedComics]);

  useEffect(() => {
    const results = comics.filter(
      (commic) =>
        commic.id === searchTerm ||
        commic.title.toLowerCase().includes(searchTerm)
    );

    if (results.length > 0) {
      setSearchStatus(false);
    } else {
      setSearchStatus(true);
    }
    setSearchResults(results);
  }, [comics, searchTerm]);

  const handleComic = (id) => {
    let newSelected = null;
    const selected = selectedComics.find((c) => c.id === id);
    if (selected) {
      newSelected = selectedComics.filter((c) => c.id === id);
      setSelectedComics([newSelected]);
    } else selectComic(id, 'select');
  };

  const openModal = (id) => {
    selectComic(id, 'modal');
  };

  const closeModal = () => {
    setStatusModal({
      status: false,
      infos: null,
    });
  };

  const searchComic = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      {statusModal.status && (
        <Modal statusModal={statusModal} closeModal={closeModal} />
      )}
      <SearchBar
        searchStatus={searchStatus}
        searchTerm={searchTerm}
        searchComic={searchComic}
      />

      <ComicList
        searchResults={searchResults}
        selectedComics={selectedComics}
        handleComic={handleComic}
        openModal={openModal}
      />

      <Footer />
    </div>
  );
};

export default Home;
