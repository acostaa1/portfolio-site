const express = require('express');
const app = express();
const path = require('path');

const startUp = () => {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startUp();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

app.use(express.static(path.join(__dirname, 'build')));