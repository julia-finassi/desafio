import axios from 'axios';
// const api = axios.create({ baseURL: 'https://api-football-v1.p.rapidapi.com/v2/players/team/443/' });
//const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://www.api-football.com/demo/v2/leagueTable/524",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
    "x-rapidapi-key":"e30e447ad0msh7fd2a69abd60209p1a7a9djsn6cc213a18db8",
    "useQueryString":true
    }
    })
    .then((response)=>{
      console.log(response.data.api.standings)
    })
    .catch((error)=>{
      console.log(error)
    })

export default axios;