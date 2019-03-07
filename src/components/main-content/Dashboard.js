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
      dmax:null,
      dheight:null,
      dOptions: {
        maintainAspectRadio:false,
      },
    };
    this.getChartData = this.getChartData.bind(this);
    this.setDoughnutChart = this.setDoughnutChart.bind(this);
  }

  componentDidMount() {
    this.setState({//bringBall
      isLoading: true,
    });

    this.getChartData();
    this.setDoughnutChart();

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

  setDoughnutChart(dmx=650,dh='auto') {
    let dmaxWidth = dmx;
    let dheight = dh;

    return this.setState({
      dmax:dmaxWidth,
      dheight:dheight,
    });
  }

  render() {
    const {
      isLoading, tableData, dheight, dOptions,dmax,legend} = this.state;

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
                          width= {dmax}
                          height= {dheight}
                          options={dOptions}
                          tableData={tableData}
                          legend={legend}
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
