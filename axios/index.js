var axios = require("axios")

async function login() {
    try {
        var formData = {
            username: "abc@qq.com",
            password: "123456",
        }
        var formdataString = '';
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const element = formData[key];
                formdataString += key + "=" + element + "&";
            }
        }
        let response = await axios.post(
            "http://106.14.219.21:8082/userLogin",
            formdataString, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
login()