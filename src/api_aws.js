
import API from '/src/api-config.json'
var axios = require('axios');

export default async function(data) {
    if (data == "") {
        return;
    }


    var payload = JSON.stringify(data)
    var config = {
        method: 'post',
        url: API.api_aws,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + allData.signInUserSession.idToken.jwtToken,
        },
        data: payload
    };

    const awsData = await axios(config)
    return awsData;

}