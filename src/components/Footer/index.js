/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import './style.scss';

const Footer = ({ selectedComics }) => {
  const [emailInfos, setEmailInfos] = useState({
    email: 'nos7manjibr@gmail.com',
    name: 'Marvel Prov',
    templateId: 'template_5nt8bs8',
    message: null,
  });

  const buildMessage = (comics) => {
    let m = '';
    if (comics) {
      comics.map((c) => {
        m += `<h3>${c.title}</h3><img src='${c.thumbnail.path}.${
          c.thumbnail.extension
        }' alt='${c.title}' /><p>${c.description && parse(c.description)}</p>`;

        return m;
      });
    }
  };

  useEffect(() => {
    setEmailInfos({ ...emailInfos, message: buildMessage(selectedComics) });
  }, []);

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res) => {
        console.log('Email successfully sent!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  };

  const handleSubmit = () => {
    sendFeedback(emailInfos.templateId, {
      message_html: emailInfos.message,
      from_name: emailInfos.name,
      reply_to: emailInfos.email,
    });
  };

  return (
    <footer>
      {selectedComics.length > 0 ? (
        <button type="button" onClick={(e) => handleSubmit(e)}>
          Enviar Selecionados por e-mail
        </button>
      ) : (
        ''
      )}
    </footer>
  );
};

export default Footer;
