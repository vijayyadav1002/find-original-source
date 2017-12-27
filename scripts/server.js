const appRoot = require('app-root-path');
const app = require('express')();
// const {static} = require('express');
const buildPath = appRoot.resolve('/build');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
// app.use(static(buildPath));

app.get('/', (req, res) => {
    res.json({status: 'ok'});
});
app.listen(DEFAULT_PORT, HOST, (err) => {
    if (err) {
        console.error('Whoops!! something went wrong', err);
        return;
    }
    console.info('Listening on port: 3000');
});
