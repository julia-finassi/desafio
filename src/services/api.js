import axios from 'axios';
 const api = axios.create({ baseURL: 'https://swapi.dev/api/' });
//const axios = require("axios");

// axios({
//     "method":"GET",
//     "url":"https://swapi.dev/api/people"
    
//     }
// )
//     .then((response)=>{
//       console.log(response.data.results)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })

export default api;