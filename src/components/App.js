import React, {Component} from 'react';
import Dashboard from './main-content/Dashboard';
import NotFound from './NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    const App = () => (
      <BrowserRouter>
        <div className='full-container'>
          <Header title='RJX-Chart' />
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route component={NotFound} />
          </Switch>
          <Footer
            footheading='RJX-Chart'
            privacy='Privacy Policy'
            disclaimer='Disclaimer'
          />
        </div>

      </BrowserRouter>
    );
    return (
      <div className='page-wrapper'>
        <App />
      </div>
    );
  }
}

export default App;
