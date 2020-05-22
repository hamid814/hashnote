import axios from 'axios';

function setAuthHeader(token) {
  if (token) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + token;
  } else {
    delete axios.defaults.headers.common['authorization'];
  }
}

export default setAuthHeader;
