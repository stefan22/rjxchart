import React, {Component} from 'react';
import {labels,colors} from './chartHelper';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: [],
    };
    this.getDataSets = this.getDataSets.bind(this);
  }

  componentDidMount() {
    this.getDataSets();
  }

  getDataSets() {
    const {
      red,blue,yellow,green,
      redh,blueh,yellowh,greenh} = colors;

    const getData = (sel) => {
      let pdata = this.props.data;
      if(sel === 'one') {
        let pOne = Object.values(pdata[0]);
        return pOne;
      } else {
        let pAll = Object.values(pdata);
        return pAll;
      }
    };

    const datasets = [
      {
        data: getData('one'),
        backgroundColor: [
          red,blue,yellow,green
        ],
        hoverBackgroundColor: [
          redh,blueh,yellowh,greenh
        ],
      }
    ];

    return this.setState({
      datasets,
    });
  }


  render() {
    const {datasets} = this.state;
    const {width,height} = this.props;

    const canvasStyling = {
      maxWidth: width,
      margin: '0 auto',
      height,
    };

    const data = {
      labels,
      datasets
    };

    return (
      <div>
        <h2>Doughnut</h2>

        <section className='doughnut-canvas' style={canvasStyling}>
          <Doughnut
            data={data}

          />


        </section>
      </div>
    );

  }





}


export default DoughnutChart;
