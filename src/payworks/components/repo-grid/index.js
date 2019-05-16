import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

const RepoGrid = ({ repos = [] }) => {
  if (!repos || repos.length === 0) { return null; }
  return (
  <ul className='repo-grid'>
    {repos.map((repo, i) => (
        <li key={i} className='grid-item'> 
          <div className='grid-item__stars'><span role="img" aria-label="Star">⭐</span>{repo.stargazers_count}</div>
          <ul className='grid-item__repo-card'>
            <li>
              <img 
                className='grid-item__avatar'
                src={repo.owner.avatar_url}
                alt={`Avatar for ${repo.owner.login}`}
                title={`Avatar for ${repo.owner.login}`}>
              </img>
            </li>
            <li>
              <Link
                to={{
                  pathname:`/branches`,
                  search:`?organizationName=${repo.owner.login}&repoName=${repo.name}`
                }}>
                {repo.name}
              </Link>
            </li>
            <li>Language: {repo.language}</li>
          </ul>
        </li>
      )
    )}
  </ul>
)}

export default RepoGrid