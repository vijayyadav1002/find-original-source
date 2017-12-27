const appRoot = require('app-root-path');
const app = require('express')();
const expressStatic = require('express').static;
const buildPath = appRoot.resolve('/build');

app.use(expressStatic(buildPath));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.error('Whoops!! something went wrong', err);
        return;
    }
    console.info(`Listening on port: ${PORT}`);
});
