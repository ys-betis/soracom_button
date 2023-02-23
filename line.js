'use strcit';

const axios = require('axios');
const qs = require('querystring');
const BASE_URL = 'https://notify-api.line.me';
const PATH = '/api/notify';
const LINE_TOKEN = `5sqDCNIkkrPl50Sgge6DUyyQrv5QnDuD86V9v0MUDd8`;

//const URL = require('url').URL;
//const params = new URLSearchParams({
//    message: 'Hello! Node.js to LINE.',
//});

const config = {
    baseURL: BASE_URL,
    url: PATH,
    method: 'POST',
    headers: {
	'Content-Type': 'application/x-www-form-urlencoded',
	'Authorization': `Bearer ${LINE_TOKEN}`
    },
    data: qs.stringify({
	message: `LINE notify test`,
    })
};

(async function(){
    const response = await axios.request(config);
    console.log(response);
})();

//const main = async () => {
//    const res = await fetch(BASE_URL + PATH, config);
//    console.log(res.status);
//}

//main();

    
