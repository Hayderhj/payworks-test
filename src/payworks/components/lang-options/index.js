import React from 'react'
import PropTypes from 'prop-types'

import './styles.css';

const LangOptions = ({
    languages,
    selectedLanguage,
    onSelect
  }) => {
  
  return (
    <ul className="lang-options">
      { languages.map((lang, i) => {
        return (
        <li
          className={`lang-options__items ${lang === selectedLanguage ? 'lang-options__items--selected' : null }`}
          onClick={() => onSelect(lang)}
          key={i}
        >
          {lang}
        </li>
        )
      })}
    </ul>
  )
}

LangOptions.propTypes = {
  languages: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}


export default LangOptions