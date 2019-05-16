import React, { useEffect, useState } from 'react';
import axios from 'axios'

import FiltersPanel from '../filters-panel';
import Filter from '../../components/filter';
import RepoGrid from '../../components/repo-grid';
import Loading from '../../components/loading';
import LanguageOptions from '../../components/lang-options';

import {
  filterByLanguage,
  getOrgRepos,
  getReposLanguages,
  sortReposByStars
} from '../../utils'

import './styles.css';

const OrganizationRepos = () => {
  const [organizationInput, setOrganization] = useState('Google');
  const [languageInput, setLanguage] = useState('All');
  const [rawData, setRawData] = useState();
  const [searchParams, setSearchParams] = useState({ organizationInput });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(getOrgRepos(searchParams));

      setRawData(result.data);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className='container'>
      <h1>Payworks Homework Assignment – Frontend</h1>
      <FiltersPanel>
        <Filter
          label="Organization"
          onChange={setOrganization}
          value={organizationInput}
        />
        <Filter
          label="Programming Language"
          onChange={setLanguage}
          value={languageInput}
        />
      </FiltersPanel>
      <button
        className='submit-button'
        onClick={() => {
          setRawData();
          setSearchParams({languageInput, organizationInput});
        }}
        type='submit'
      >
          Submit
      </button>
      {rawData ?
        <LanguageOptions
          languages={getReposLanguages(rawData)}
          onSelect={setLanguage}
          selectedLanguage={languageInput}
        /> 
      : null }
      {!rawData ? <Loading/> : <RepoGrid repos={sortReposByStars(filterByLanguage(rawData, languageInput))} /> }
    </div>
);
}
    

export default OrganizationRepos;
