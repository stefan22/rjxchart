import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/not-found.scss';

const NotFound = () => (

  <div className='not-found-wrapper'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='not-found-title text-center'>Page Not Found</h2>
          <div className='back-button'>
            <Link className='not-found-link text-center' to='/'>Back to Homepage</Link>
          </div>

        </div>
      </div>
    </div>
  </div>

);


export default NotFound;
