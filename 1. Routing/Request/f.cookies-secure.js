const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.cookie('SetCookies', 'Secure', {
    secure: true
  });
  res.end();
});

app.listen(9999, () => console.log('Web Server running on port 9999'));
