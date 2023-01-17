const mongoose = require('mongoose');
const uuid = require('uuid');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add event title'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  time: {
    type: String,
    required: [true, 'Please add time of event'],
    maxlength: [50, 'Time of event can not be more than 50 characters'],
  },
  date: {
    type: String,
    required: [true, 'Please add date of event'],
    maxlength: [20, 'Date of event can not be more than 20 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    default: uuid.v4(),
  },
});

module.exports = mongoose.model('Event', EventSchema);
