const Event = require('../models/Event');
//const eventData = require('../_data/event.json');

var eventData = [
  {
    _id: '9c2a514b5d2c12c7400xz123',
    title: 'Wedding',
    description: 'Friend Wedding ',
    address: 'Canal View Lahore',
    time: 'January 20,2022 - Wednesday 04:00 pm',
    createdAt: '',
  },
  {
    _id: '9c2a514b5d2c12c7400xz125',
    title: 'Nikah',
    description: 'Brother ',
    address: 'Islamabad',
    time: 'January 20,2022 - Wednesday 04:00 pm',
    createdAt: '',
  },
];
// @desc Get all events
// @route GET /events
// @access Public
exports.getEvents = (req, res, next) => {
  if (eventData) {
    res.status(200).json({ success: true, msg: eventData });
  } else {
    res.status(400).json({ success: false });
  }
};

// @desc Get one event
// @route GET /event/:id
// @access private
exports.getEvent = (req, res, next) => {
  const event = eventData.find((event) => event._id === req.params.id);
  if (event) {
    res.status(200).json({ success: true, msg: eventData });
  } else {
    res.status(400).json({ success: false });
  }
};

// @desc Create a new event
// @route POST /event/
// @access private
exports.createEvent = (req, res, next) => {
  if (eventData) {
    eventData.push(req.body);
    res.status(200).json({ success: true, msg: eventData });
  } else {
    res.status(400).json({ success: false });
  }
};

// @desc Update an event
// @route PUT /event/:id
// @access private
exports.updateEvent = (req, res, next) => {
  let foundIndex = eventData.findIndex((event) => event._id === req.params.id);
  eventData[foundIndex] = {
    ...eventData[foundIndex],
    ...req.body,
  };

  if (foundIndex !== -1) {
    res.status(200).json({ success: true, msg: eventData });
  } else {
    res.status(400).json({ success: false });
  }
};

// @desc Delete an event
// @route Delete /event/:id
// @access private
exports.deleteEvent = (req, res, next) => {
  const event = eventData.find((event) => event._id === req.params.id);
  if (event) {
    const index = eventData.indexOf(event);
    eventData.splice(index);
    res.status(200).json({ success: true, msg: eventData });
  } else {
    res.status(400).json({ success: false });
  }
};
