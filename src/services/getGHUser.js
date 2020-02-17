const request = path => {
  return fetch(`${path}`)
    .then(res => Promise.all[res.ok, res.json()])
    .then(([ok, json]) => {
      if(ok) return json;
      else throw json; 
    });
};

export const getAllUserRepos = (username) => request(`https://api.github.com//users/:${username}/repos`);
