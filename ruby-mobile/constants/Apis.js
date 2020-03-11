import axios from 'axios';

const fakeGroupId = '5e653d619ec93e29680685fc';

axios.defaults.baseURL = 'https://30a3e284.ngrok.io/api';
import { AsyncStorage } from 'react-native';
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

// Creating Group api
export const createGroup = async newGroup => {
    return axios.post('/groups', newGroup, {
        headers: {
            authorization: `Bearer ${await AsyncStorage.getItem('token')}`
        }
    })
        .then((res) => res.data)
        .catch((error) => {
            console.log(error.response.data);
        });

}
// //api to fetch groups where user is the admin

export class GetUsersGroups {
    constructor() {
        this.userGroupsPath = `/me/groups`;
    }

    async fetchUsersGroup() {
        const { data } = await axios.get(this.userGroupsPath, {
            headers: {
                authorization: `Bearer ${await AsyncStorage.getItem('token')}`
            }

        });
        return data;
    }
}

//api for adding members to a group
export const addMembers = async addNewMember => {
    return axios.post('/members', addNewMember, {
        headers: {
            authorization: `Bearer ${await AsyncStorage.getItem('token')}`
        }
    })
        .then((res) => res.data)
        .catch((error) => {
            console.log(error.response.data);
        });

}
//api for Members that contributed to a group
export const addContribution = async addNewContribution => {
    return axios.post('/contributions', addNewContribution, {
        headers: {
            authorization: `Bearer ${await AsyncStorage.getItem('token')}`
        }
    })
        .then((res) => res.data)
        .catch((error) => {
            console.log(error.response.data);
        });

}

//api for getting Group Members for a contribution
export class GetMembers {
    constructor() {
       this.groupId = "5e653d619ec93e29680685fc";
        this.memberspath = `groups/${this.groupId}/members`;
    }

    async fetchGroupMembers() {
        const { data } = await axios.get(this.memberspath);
        return data.members;
    }
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
