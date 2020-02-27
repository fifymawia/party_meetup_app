// export const fetchMeetups = () =>
//   fetch('https://e9a800ff.ngrok.io/api/meetups')
//     .then(res => res.json())
//     .catch(e => {
//       // eslint-disable-next-line no-console
//       console.log(e);
//       return e;
//     });
import axios from 'axios';

axios.defaults.baseURL = 'https://f485e0ac.ngrok.io/api';
const fakeGroupId = '5e53e62cba0b532c2c524f5d';


export class ContributionApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.contibutionpath = `groups/${this.groupId}/contributions`;
  }
  
  async fetchGroupContributions() {
    const { data } = await axios.get(this.contributionpath);
    return data.contributions;
  }
//   async createGroup(args) {
//       try{
//       const res = await axios.post(`${this.gropupath}/new`, { ...args });
//       console.log(res);
//       return res;
//   } catch (e) {
//       console.log(e);
//   }
  
}

