import axios from 'axios';

axios.defaults.baseURL = 'https://e7f5c515.ngrok.io/api';
// const fakeGroupId = '5e53e62cba0b532c2c524f5d';


export class GroupApi {
  constructor() {
    // this.groupId = fakeGroupId;
    this.grouppath = `/groups/new`;
  }

//   async fetchGroupContributions() {
//     const { data } = await axios.get(this.contributionpath);
//     return data.contributions;
//   }
  async createGroup(args) {
      try{
      const res = await axios.post(`${this.grouppath}`, { ...args });
      console.log(res);
      return res;
  } catch (e) {
      console.log(e);
  }

}
}
