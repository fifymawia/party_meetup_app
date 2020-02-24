// export const fetchMeetups = () =>
//   fetch('https://e9a800ff.ngrok.io/api/meetups')
//     .then(res => res.json())
//     .catch(e => {
//       // eslint-disable-next-line no-console
//       console.log(e);
//       return e;
//     });
import axios from 'axios';

axios.defaults.baseURL = 'https://1f2aff4f.ngrok.io/api';
const fakeGroupId = '5e4a8fda2562ab3ef8e75413';

export class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `groups/${this.groupId}/meetups`;
  }
  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);
    return data.meetups;
  }
}

