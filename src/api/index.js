const axios = require('axios');

const api = axios.create({
  baseURL: "api.redefocus.com"
});

module.exports = api;