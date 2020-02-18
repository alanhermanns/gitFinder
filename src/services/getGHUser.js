const request = path => {
  return fetch(`${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json; 
    });
};

export const getAllUserRepos = (username) => {
  console.log(username);
  return request(`https://api.github.com/users/${username}`);
};
