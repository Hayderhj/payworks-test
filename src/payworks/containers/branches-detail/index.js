import React, { useEffect, useState } from 'react';
import axios from 'axios'
import queryString from 'query-string'

import BranchesGrid from '../../components/branches-grid';

import { getRepoBranches } from '../../utils';


const BranchesDetail = ({location}) => {
  const { repoName, organizationName } = queryString.parse(location.search)
  const [rawData, setRawData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(getRepoBranches({ repoName, organizationName }));

      setRawData(result.data);
    };

    fetchData();
  }, [repoName, organizationName]);

  return (
    <div className='container'>
      <h1>Branches of {repoName}</h1>
      <BranchesGrid branches={rawData}/>
    </div>
);
}
    

export default BranchesDetail;
