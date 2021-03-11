/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './style.scss';

const Footer = ({ selectedComics }) => {
  const [emailInfos, setEmailInfos] = useState({
    email: 'nos7manjibr@gmail.com',
    name: 'Marvel Prov',
    templateId: 'template_5nt8bs8',
    message: null,
  });

  const buildMessage = (comics) => {
    if (comics) {
      const m = comics.map((c) => c.title);

      return m;
    }
    return true;
  };

  useEffect(() => {
    setEmailInfos({ ...emailInfos, message: buildMessage(selectedComics) });
  }, []);

  // console.log('selectedComics', selectedComics);

  // const sendFeedback = (templateId, variables) => {
  //   // window.emailjs
  //   //   .send('gmail', templateId, variables)
  //   //   .then((res) => {
  //   //     console.log('Email successfully sent!');
  //   //   })
  //   //   // Handle errors here however you like, or use a React error boundary
  //   //   .catch((err) =>
  //   //     console.error(
  //   //       'Oh well, you failed. Here some thoughts on the error that occured:',
  //   //       err
  //   //     )
  //   //   );
  // };

  const handleSubmit = () => {
    // sendFeedback(templateId, {
    //   message_html: message,
    //   from_name: name,
    //   reply_to: email,
    // });
  };

  return (
    <footer>
      <button type="button" onClick={(e) => handleSubmit(e)}>
        Enviar Selecionados por e-mail
      </button>
    </footer>
  );
};

export default Footer;
