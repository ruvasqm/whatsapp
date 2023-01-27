// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const https = require('https');
const handler = async (event) => {
  try {
    const number = (await JSON.parse(event.body)).number;
    // url = 'https://api.apilayer.com/number_verification/validate?number=14158586273'
    const headers = { "apikey": process.env.API_KEY }
    let result = await new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'api.apilayer.com',
            path: `/number_verification/validate?number=${number}`,
            method: 'GET',
            headers: headers
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(data);
            });
        });
        req.on('error', (error) => {
            reject(error);
        });
        req.end();
    });
    return {
        statusCode: 200,
        body: result
    }

    } catch (err) {
        const body = { error: err.toString() , valid: false}
        return { statusCode: 500, body: JSON.stringify(body) }
    }

}

module.exports = { handler }

