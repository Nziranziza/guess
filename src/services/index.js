import base64 from 'base-64';

const API_URL = 'https://game.flowautobody.com.au';

export const fetchAPI = (endpoint, options) =>
  new Promise((resolve, reject) => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));

    const defaultOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        Authorization: `Basic ${base64.encode(`${credentials?.username}:${credentials?.password}`)}`,
      },
    };

    const combinedOptions = {
      ...defaultOptions,
      ...options,
    };

    if (combinedOptions.body) {
      combinedOptions.body = JSON.stringify(combinedOptions.body);
    }

    fetch(`${API_URL}${endpoint}`, combinedOptions)
    .then((res) => {
      if (res.status === 200 || res.status === 201 || res.status === 304) {
        return resolve(res.json() || {});
      }
      return reject(res.json() || {});
    })
    .catch(err => reject(err));
    
  });

export const logout = () => {
  localStorage.removeItem('credentials');
  localStorage.removeItem('applicantId');
  localStorage.removeItem('gameId');
}
