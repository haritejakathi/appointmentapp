const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    const { date, description } = req.body;

    try {
        const appointment = await Appointment.create({ date, description, UserId: req.user.id });
        res.status(201).send(appointment);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({ where: { UserId: req.user.id } });
        res.status(200).send(appointments);
    } catch (err) {
        res.status(400).send(err);
    }
};
