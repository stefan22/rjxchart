import React, {Component} from 'react';
import '../../scss/dashboard.scss';
import {bringBall} from '../Helpers';
import data from '../data';

import DoughnutChart from '../charts/DoughnutChart';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
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
    let cd = data;
    return this.setState({
      data: cd,
    });
  }

  setDoughnutChart(dmx=750,dh='auto') {
    let dmaxWidth = dmx;
    let dheight = dh;

    return this.setState({
      dmax:dmaxWidth,
      dheight:dheight,

    });

  }



  render() {
    const {
      isLoading, data, dheight, dOptions,dmax} = this.state;

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
                    (data.length) &&

                        <DoughnutChart
                          width= {dmax}
                          height= {dheight}
                          options={dOptions}
                          data={data}
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
