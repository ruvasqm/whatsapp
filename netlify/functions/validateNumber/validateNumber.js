// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const https = require('https')
const handler = async (event) => {
  try {
    const number = (await JSON.parse(event.body)).number;
    // url = 'https://api.apilayer.com/number_verification/validate?number=14158586273'
    // headers = { apikey: process.env.API_KEY }
    const headers = { 'Content-Type': 'application/json', apikey: process.env.API_KEY }
    https.get({
        hostname: 'api.apilayer.com',
        path: `/number_verification/validate?number=${number}`,
        headers: headers,
        method: 'GET',
    }, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            data = JSON.parse(data);
            if(data.valid) {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ valid: true })
                }
            }
            else {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ valid: false })
                }
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
    } catch (err) {
        return { statusCode: 500, body: err.toString() }
    }

}

module.exports = { handler }
