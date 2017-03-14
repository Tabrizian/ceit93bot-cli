const {axios} = require('../plugins');
const config = require('config');
const path = require('path');
const fs = require('fs');
const concat = require("concat-stream");
const FormData = require("form-data");

async function sendMessage(message) {
    let request = {
        chat_id: '@fakefakefakee',
        text: message
    };

    let response = await axios.post('/sendMessage', request);
    console.log(response);
}

async function sendDocument(file) {
    const formdata = new FormData();
    formdata.append('chat_id', '@fakefakefakee');
    formdata.append('document', fs.createReadStream(path.resolve(file)));
    console.log(formdata.getHeaders());


    formdata.pipe(concat({encoding: 'buffer'}, data => {
          axios.post("/sendDocument", data, {
                  headers: formdata.getHeaders()
                })
    }));


}

module.exports = {
    sendDocument,
    sendMessage
}
