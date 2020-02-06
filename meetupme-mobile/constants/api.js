 export const fetchMeetups = () =>
fetch('https://stupid-bobcat-37.localtunnel.me/api/meetups')
.then(res => {
    return res.json();
})
.catch(e => {
    console.log(e);
    return e;
});
