import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/footer.scss';

const Footer = (props) => (

  <footer className="footer-wrapper">
    <div className="container">
      <div className='row'>
        <div className='col-12 footer'>
          <div className="copyright">
            <p>&copy; {props.footheading}</p>
          </div>
          <div className="footer-links">
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
