const express = require('express');
const cors = require('cors');
const sequelize = require('./backend/config/db');
const userRoutes = require('./backend/config/routes/user');
const appointmentRoutes = require('./backend/config/routes/appointment');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
