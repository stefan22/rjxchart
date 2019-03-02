import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/Footer.scss';

const Footer = (props) => (

  <footer class="footer-wrapper">
    <div class="container">
      <div className='row'>
        <div className='col-12 footer'>
          <div class="copyright">
            <p>&copy; {props.footheading}</p>
          </div>
          <div class="footer-links">
            <ul>
              <li>
                <Link to='#'>{props.privacy}</Link>
              </li>
              <li>
                <Link to='#'>{props.disclaimer}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

);


export default Footer;
