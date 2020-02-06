 export const fetchMeetups = () =>
fetch('https://warm-horse-46.localtunnel.me/api/meetups')
.then(res => {
    return res.json();
})
.catch(e => {
    console.log(e);
    return e;
});
