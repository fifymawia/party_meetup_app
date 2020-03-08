import axios from 'axios';

const fakeGroupId = '5e53e62cba0b532c2c524f5d';

axios.defaults.baseURL = 'https://6f65b5cb.ngrok.io/api';
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

//api for adding members to a group
export const addMembers = async newMember => {
    return axios.post('/members', newMember, {
        headers: {
            authorization: `Bearer ${await AsyncStorage.getItem('token')}`
        }
    })
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
