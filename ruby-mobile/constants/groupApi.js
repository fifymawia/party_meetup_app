import axios from 'axios';

axios.defaults.baseURL = 'https://1e9100c6.ngrok.io/api';

export const signup = user => {
    return axios.post('/signup', user)
    .then((res) => res.data)
    .catch((error) => {
        console.log(error.response.data);
    });
}
