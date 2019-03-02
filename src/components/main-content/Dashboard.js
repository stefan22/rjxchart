import React, {Component} from 'react';
import '../../scss/dashboard.scss';
import {bringBall} from '../Helpers';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

  }

  componentDidMount() {
    this.setState({//bringBall
      isLoading: true,
    });
    setTimeout(() => {//optional
      this.setState((prevState) => ({
        isLoading: !prevState.isLoading,
      }));
    },2000);
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div className=
        {`mid-section-wrapper ${(isLoading) ? '' : 'loading'}`}>
        {(isLoading) ? bringBall :

          <div className='container inner-dashboard'>
            <section className='row'>
              <div className='col-12'>
                <div className='midtop'>
                  Dashboard midtop component
                </div>
              </div>
            </section>
            <section className='row'>
              <div className='col-12'>
                <div className='midbottom'>
                  Dashboard midbottom
                </div>
              </div>
            </section>
          </div>
        }

      </div>
    );
  }
}


export default Dashboard;
