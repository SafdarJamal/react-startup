import React from 'react';
import Navbar from '../Navbar';
import IndexPage from '../../pages/index';
import AboutPage from '../../pages/about';
import FaqPage from '../../pages/faq';
import PricingPage from '../../pages/pricing';
import ContactPage from '../../pages/contact';
import DashboardPage from '../../pages/dashboard';
import SigninPage from '../../pages/signin';
import SignupPage from '../../pages/signup';
import ForgotpassPage from '../../pages/forgotpass';
import ChangepassPage from '../../pages/changepass';
import Footer from '../Footer';
import { ProvideAuth } from '../../util/auth.js';
import { Router, Switch, Route } from '../../util/router.js';

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <Navbar
          color="white"
          spaced={true}
          logo="https://uploads.divjoy.com/logo.svg"
        />
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/faq" component={FaqPage} />
          <Route exact path="/pricing" component={PricingPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/forgotpass" component={ForgotpassPage} />
          <Route exact path="/changepass" component={ChangepassPage} />
          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: '50px',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
        <Footer
          color="light"
          size="normal"
          backgroundImage=""
          backgroundImageOpacity={1}
          copyright="© 2019 Company"
          logo="https://uploads.divjoy.com/logo.svg"
        />
      </Router>
    </ProvideAuth>
  );
}

export default App;
