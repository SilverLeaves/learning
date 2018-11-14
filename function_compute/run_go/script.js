async (url) => {
    let response = await axios.get(`${url}`);
    return response.data;
}