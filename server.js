const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const auth = require('./middleware/authenticator');
//Load env vars
dotenv.config({ path: './config/config.env' });

// Connecting database
// connectDB();

// routes
const users = require('./routes/users');
const events = require('./routes/events');

const app = express();

//authenticator middleware
app.use(auth);
//body parser
app.use(express.json());

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//registering routes
app.use('/users', users);
app.use('/events', events);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandeled promise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // close server & exit process
  server.close(() => process.exit(1));
});
