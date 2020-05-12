// import request from 'request'
// import Xray from 'x-ray'
// import cheerio from "cheerio"
// var xray_ready = Xray();
// import prepareFakeWindow from './workerFakeDOM'
const htmlparser2 = require("htmlparser2");


//Handle Main Request
export default async function handleRequest(mainRequest) {
    const body = await mainRequest.json();

    return new Response(
        JSON.stringify(
            body
        ), {
        status: 200,
        headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
}