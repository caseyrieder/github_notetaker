const api = {
  getBio(username) {
    // format username entered, set user's github home page, fetch that page & return it as json
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },
  getRepos(username) {
    // format username entered, set user's github repos page, fetch that page & return it as json
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
};

export default api;
