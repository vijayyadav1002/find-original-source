const appRoot = require('app-root-path');
const serve = require('serve');

const buildPath = appRoot.resolve('/build');

serve(buildPath, {port: 3000});