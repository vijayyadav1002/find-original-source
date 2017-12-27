const appRoot = require('app-root-path');
const app = require('express')();
const expressStatic = require('express').static;
const buildPath = appRoot.resolve('/build');

app.use(expressStatic(buildPath));

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.error('Whoops!! something went wrong', err);
        return;
    }
    console.info('Listening on port: 3000');
});
