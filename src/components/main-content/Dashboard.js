import React, {Component} from 'react';
import '../../scss/dashboard.scss';
import {bringBall} from '../Helpers';
import data from '../data';
import DataTable from './DataTable';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
    };
    this.getChartData = this.getChartData.bind(this);

  }

  componentDidMount() {
    this.setState({//bringBall
      isLoading: true,
    });

    this.getChartData();

    setTimeout(() => {//optional
      this.setState((prevState) => ({
        isLoading: !prevState.isLoading,
      }));
    },2000);
  }

  getChartData() {
    let cd = data;
    return this.setState({
      data: cd,
    });

  }

  render() {
    const {isLoading, data} = this.state;
    console.log(this);
    return (
      <div className=
        {`mid-section-wrapper ${(isLoading) ? '' : 'loading'}`}>
        {(isLoading) ? bringBall :

          <div className='container inner-dashboard'>
            <section className='row'>
              <div className='col-12'>
                <div className='midtop'>
                  <h1>Dashboard Data</h1>


                </div>
              </div>
            </section>
            <section className='row'>
              <div className='col-12'>
                <div className='midbottom'>
                  <h3>Tables Data</h3>
                  {
                    (data.length) ?

                      data.map((itm,idx) =>
                        <DataTable
                          key={idx}
                          iskey={idx}
                          {...itm}
                        />
                      )

                      : 'no data avail'
                  }

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
