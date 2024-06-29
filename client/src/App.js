import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Booking from './pages/Booking';
import AppointmentHistory from './pages/AppointmentHistory';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <PrivateRoute path="/booking" component={Booking} />
                    <PrivateRoute path="/appointments" component={AppointmentHistory} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
