import axios from 'axios';

const fakeGroupId = '5e53e62cba0b532c2c524f5d';

axios.defaults.baseURL = 'https://ff543a0a.ngrok.io/api';
// sign up api
export const signup = user => {
    return axios.post('/signup', user)
    .then((res) => res.data)
    .catch((error) => {
        console.log(error.response.data);
    });
}
// login api
export const login = loguser => {
    return axios.post('/login', loguser)
    .then((res) => res.data)
    .catch((error) => {
        console.log(error.response.data);
    });

}

// get contributions api
export class ContributionApi {
    constructor() {
      this.groupId = fakeGroupId;
      this.contributionpath = `groups/${this.groupId}/contributions`;
    }

    async fetchGroupContributions() {
      const { data } = await axios.get(this.contributionpath);
      return data.contributions;
    }
}
