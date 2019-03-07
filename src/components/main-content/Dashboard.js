import React, {Component} from 'react';
import '../../scss/dashboard.scss';
import {bringBall} from '../Helpers';
import {tableData} from '../charts/chartHelper';

import DoughnutChart from '../charts/DoughnutChart';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tableData: [],
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
    let cd = tableData;
    return this.setState({
      tableData: cd,
    });
  }

  render() {
    const {isLoading, tableData} = this.state;
    return (
      <div className=
        {`mid-section-wrapper ${(isLoading) ? '' : 'loading'}`}>
        {(isLoading) ? bringBall :

          <div className='container inner-dashboard'>
            <section className='row'>
              <div className='col-12'>
                <div className='midtop'>
                  <h1>Dashboard Data</h1>
                  {
                    (tableData.length) &&

                        <DoughnutChart
                          width= {650}
                          height={'auto'}
                          tableData={tableData}

                        />
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
