export const CLIENT_ID = 'fa1180fdac993c2d6edd'
export const CLIENT_SECRET = '619b6877c1816cf343e56177a4a2f404dc12f859'
export const GITHUB_API = 'https://api.github.com'
export const params = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export const sortReposByStars = repos => repos.sort(({stargazers_count: starsFirst }, { stargazers_count: starsSecond }) =>  starsSecond - starsFirst);

export const filterByLanguage = (repos, lang) => {
  if (lang === 'All') return repos;
  return repos.filter(repo => repo.language === lang);
}

export const getReposLanguages = repos => repos.reduce((languages, currentRepo) => {
  const currentLanguage = currentRepo.language;
  const found = languages.find(lang => lang === currentLanguage);
  if (!found) {
    languages.push(currentLanguage);
    return languages;
  }
  return languages;
}, ['All']);

export const getOrgRepos = ({ organizationInput }) => `${GITHUB_API}/orgs/${organizationInput}/repos${params}&per_page=100`;

export const getRepoBranches = ({ organizationName, repoName }) => `${GITHUB_API}/repos/${organizationName}/${repoName}/branches`;