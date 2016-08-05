const api = {
  // format username, set user's full github info, fetch & return as json
  getBio(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },
  // format username, set user's github repos page, fetch & return as json
  getRepos(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  // format username, fetch firebase account, return as json
  getNotes(username) {
    username = username.toLowerCase().trim();
    const url = `https://egghead-rn-github-app.firebaseio.com/${username}.json`;
    return fetch(url).then(res => res.json());
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    const url = `https://egghead-rn-github-app.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note),
    }).then(res => res.json());
  }
};

export default api;
