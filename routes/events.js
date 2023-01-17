const express = require('express');
const {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const router = express.Router();

router.route('/').get(getEvents).post(createEvent);

router.route('/:id').get(getEvent).put(updateEvent).delete(deleteEvent);
module.exports = router;
