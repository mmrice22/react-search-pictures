import axios from 'axios';

//customized instance of axios object
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID pUK3paSBhE03jx8azL1hUb-sHBnOi0VMubNNE5lk1BU",
      }, 
});
