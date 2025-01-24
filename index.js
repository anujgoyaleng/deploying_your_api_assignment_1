const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

// Load the dotenv package
require('dotenv').config();

// Access environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

// Export the config object
module.exports = config;

// Log the variables (Optional for testing)
console.log(config);


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




// // Ensure environment variables are loaded
// require('dotenv').config();

// // Validate the required variables
// if (!process.env.API_KEY || !process.env.SERVER_SECRET) {
//     throw new Error("Missing required environment variables. Please check your .env file.");
// }

// // Access environment variables
// const config = {
//     apiKey: process.env.API_KEY,
//     serverSecret: process.env.SERVER_SECRET,
//     isKalvian: process.env.IS_KALVIAN === 'true',
// };

// module.exports = config;

// // Log for testing (optional)
// console.log(config);