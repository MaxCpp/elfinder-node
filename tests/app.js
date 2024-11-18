const { resolve } = require('path');
const fs = require('fs-extra');
const express = require('express');
const app = express();
const elFinder = require('../');

const uploadsDir = resolve(__dirname, '../media/uploads');
console.log('uploadsDir', uploadsDir)
const roots = [
  {
    // id: 'v0_Lw',
    driver: elFinder.LocalFileStorage,
    URL: '/uploads/',
    path: uploadsDir,
    permissions: { read: 1, write: 1, lock: 0 },
    // tmbPath: uploadsDir + '/.tmb', // Путь для миниатюр
    // tmbURL: '/media/uploads/.tmb',                      // URL для миниатюр
    // uploadAllow: ['image', 'text']
  },
];

app.use('/uploads', express.static(uploadsDir));

app.use('/connector', elFinder(roots));
app.get('/', function (req, res) {
  res.sendFile(resolve(__dirname, './elfinder.html'));
});

fs.mkdirpSync(uploadsDir);

module.exports = app;
