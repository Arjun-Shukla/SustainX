const app = require('./src/App');

const url = `127.0.0.1:80`;

app.listen(80 , () => {

    console.log( `App Running on ${url} Successfully`);
});