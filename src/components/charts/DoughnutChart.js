import React, {Component} from 'react';
import {labels,colors} from './chartHelper';
import {Doughnut} from 'react-chartjs-2';
import DataTable from '../main-content/DataTable';
import '../../scss/doughnut.scss';
import tableData from '../data';

class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: [],
      tableData: [],
      additionalData:true,
    };
    this.getDataSets = this.getDataSets.bind(this);
    this.getTableData = this.getTableData.bind(this);
    this.handleAdditionalData = this.handleAdditionalData.bind(this);

  }

  componentDidMount() {
    this.getDataSets('one');
    this.getTableData();
  }

  getDataSets(s) {
    const {
      red,blue,yellow,green,
      redh,blueh,yellowh,greenh} = colors;
    let sel = s, sum = [];
    let pdata = this.props.data;
    let pOne = Object.values(pdata[0]);
    let pTwo = Object.values(pdata[1]);

    const getData = (sel) => {
      if(sel === 'one') {
        return pOne;
      }
      else if(sel === 'all') {
        pOne.forEach((itm,idx) => {
          sum += itm + pTwo[idx] + ',';
        });
        sum = sum.split(',');
        sum = sum.map(itm => parseInt(itm,10));
        return sum;
      }
    };

    const datasets = [
      {
        data: getData(sel),
        backgroundColor: [
          red,blue,yellow,green
        ],
        hoverBackgroundColor: [
          redh,blueh,yellowh,greenh
        ],
      }
    ];

    return this.setState({
      datasets:datasets,
    });
  }

  handleAdditionalData() {
    const {additionalData} = this.state;
    if(!!additionalData) {
      this.getDataSets('all');
      this.setState(prevState => ({
        additionalData: !prevState.additionalData,
      }));
    } else {
      this.getDataSets('one');
      this.setState(prevState => ({
        additionalData: !prevState.additionalData,
      }));
    }
  }

  getTableData() {
    let cd = tableData;
    return this.setState({
      tableData: cd,
    });
  }


  render() {

    const {datasets,tableData} = this.state;
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
      <div className='midcontainer'>
        <h2>Doughnut</h2>

        <section className='doughnut-canvas' style={canvasStyling}>
          <Doughnut
            data={data}
          />
        </section>

        <div className='table-bottom'>
          <h3>Tables Data</h3>
          {
            (tableData.length) ?

              tableData.map((itm,idx) =>
                <DataTable
                  handleAdditionalData={this.handleAdditionalData}
                  key={idx}
                  iskey={idx}
                  {...itm}
                />
              )

              : 'no data avail'
          }

        </div>

      </div>
    );

  }

}


export default DoughnutChart;
