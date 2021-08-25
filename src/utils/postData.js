import "@babel/polyfill";
const postData = async(url, data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data,
        mode: 'no-cors'
    });
    return await res.json();
}
export default postData;