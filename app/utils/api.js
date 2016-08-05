// format username, set user's full github info, fetch & return as json
export function getBio(username) {
  username = username.toLowerCase().trim();
  let url = `https://api.github.com/users/${username}`;
  return fetch(url).then((res) => res.json());
};
// format username, set user's github repos page, fetch & return as json
export function getRepos(username) {
  username = username.toLowerCase().trim();
  let url = `https://api.github.com/users/${username}/repos`;
  return fetch(url).then((res) => res.json());
};
// format username, fetch firebase account, return as json
export function getNotes(username) {
  username = username.toLowerCase().trim();
  let url = `https://egghead-reactnative-git.firebaseio.com/${username}.json`;
  return fetch(url).then((res) => res.json());
};

export function addNote(username, note) {
  username = username.toLowerCase().trim();
  let url = `https://egghead-reactnative-git.firebaseio.com/${username}.json`;
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(note),
  }).then((res) => {
    res.json()
  });
};
