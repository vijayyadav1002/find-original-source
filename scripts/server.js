const appRoot = require('app-root-path');
const app = require('express')();
const {static} = require('express');
const buildPath = appRoot.resolve('/build');

app.use(static(buildPath));
app.listen(3000, (err) => {
    if (err) {
        console.error('Whoops!! something went wrong', err);
        return;
    }
    console.info('Listening on port: 3000');
});
