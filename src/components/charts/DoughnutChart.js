import React, {Component} from 'react';
import {labels,colors} from './chartHelper';
import {Doughnut} from 'react-chartjs-2';
import DataTable from '../main-content/DataTable';
import '../../scss/doughnut.scss';


class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: [],
      tableData: this.props.tableData,
      additionalData:true,
    };
    this.getDataSets = this.getDataSets.bind(this);
    this.handleAdditionalData = this.handleAdditionalData.bind(this);
  }

  componentDidMount() {
    this.getDataSets('one');
  }

  getDataSets(sel) {
    const {red,blue,yellow,green,redh,blueh,yellowh,greenh} = colors;
    let {tableData} = this.state;
    let tableOne = {}, tableTwo ={},table = [];
    tableOne = tableData[0];
    tableTwo = tableData[1];

    const getData = (sel) => {
      if(sel === 'one') {
        return Object.values(tableOne);
      }
      else if(sel === 'all') {
        for(let key in tableOne) {
          key = key.toLowerCase();
          for(let prop in tableTwo) {
            prop = prop.toLowerCase();
            if(key === prop) {
              table.push(tableOne[key]+tableTwo[key]);
            }
          }
        }
        return table;
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
      datasets,
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

  render() {
    const {datasets,tableData,additionalData} = this.state;
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
        <h2>Doughnut {(additionalData) ? '' : 'with additional data.'}</h2>

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
