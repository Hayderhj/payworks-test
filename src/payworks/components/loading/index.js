import React, { useEffect, useState }from 'react'
import PropTypes from 'prop-types'

import './styles.css';

const Loading = ({ defaultText, speed }) => {

  const [text, setText] = useState(defaultText);

  useEffect(() => {
    const stopper = `${defaultText}...`;

    const interval = window.setInterval(()=>{
      if (text === stopper){
        setText(defaultText);
      } else {
        setText(`${text}.`);
      }
    }, speed);

    return () => {
      window.clearInterval(interval)
    };
  });

  return (
    <p className="loading">
      {text}
    </p>
  );
}

Loading.propTypes = {
  defaultText: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  defaultText: 'Loading',
  speed: 200
}

export default Loading