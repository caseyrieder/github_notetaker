USING REACT-NATIVE FETCH API
JS call to an api:
fetch(url)
  .then(function(res){
    return res.json();
  })
  .then(function(jsonRes){
    console.log('The Response', jsonRes);
  })
  .catch(function(err){
    console.log('error');
  })

Response:
Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
  __proto__: Promise
  [[PromiseStatus]]: "resolved"
  [[PromiseValue]]: undefined
The Response
  Object {login: "caseyrieder", id: 6131107, avatar_url: "https://avatars.githubusercontent.com/u/6131107?v=3", gravatar_id: "", url: "https://api.github.com/users/caseyrieder"…}
    avatar_url: "https://avatars.githubusercontent.com/u/6131107?v=3"
    bio: null
    blog: null
    company: null
    created_at: "2013-12-07T17:43:48Z"
    email: null
    events_url: "https://api.github.com/users/caseyrieder/events{/privacy}"
    followers: 0
    followers_url: "https://api.github.com/users/caseyrieder/followers"
    following: 26
    following_url: "https://api.github.com/users/caseyrieder/following{/other_user}"
    gists_url: "https://api.github.com/users/caseyrieder/gists{/gist_id}"
    gravatar_id: ""
    hireable: null
    html_url: "https://github.com/caseyrieder"
    id: 6131107
    location: "New York, NY"
    login: "caseyrieder"
    name: "Casey Rieder"
    organizations_url: "https://api.github.com/users/caseyrieder/orgs"
    public_gists: 0
    public_repos: 10
    received_events_url: "https://api.github.com/users/caseyrieder/received_events"
    repos_url: "https://api.github.com/users/caseyrieder/repos"
    site_admin: false
    starred_url: "https://api.github.com/users/caseyrieder/starred{/owner}{/repo}"
    subscriptions_url: "https://api.github.com/users/caseyrieder/subscriptions"
    type: "User"
    updated_at: "2016-08-03T14:54:55Z"
    url: "https://api.github.com/users/caseyrieder"
    __proto__: Object
