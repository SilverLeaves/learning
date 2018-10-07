var axios = require("axios")

async function test() {
    try {
        let res = await axios.post("http://localhost:7001/user/token", {
            "username": "admin",
            "password": "123456",
            "clientId": "my_app",
            "clientSecret": "my_secret"
        })
        console.log(res);
    } catch (error) {
        console.log(error);

    }
}


test()