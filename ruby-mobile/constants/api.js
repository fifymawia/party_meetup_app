// export const fetchMeetups = () =>
//   fetch('https://e9a800ff.ngrok.io/api/meetups')
//     .then(res => res.json())
//     .catch(e => {
//       // eslint-disable-next-line no-console
//       console.log(e);
//       return e;
//     });
import axios from 'axios';

axios.defaults.baseURL = ' https://f997b5e9.ngrok.io/api';
const fakeGroupId = '5e53e62cba0b532c2c524f5d';

export class ContributionApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `groups/${this.groupId}/contributions`;
  }
  async fetchGroupContributions() {
    const { data } = await axios.get(this.path);
    return data.contributions;
  }
}

