import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../../scss/table.scss';


const DataTable = (props) => {
  console.log(props);
  const {p,nu,na,ne,iskey} = props;

  return (
    <Paper className='table-wrapper'>
      <div className={(iskey >0) ? 'table2' : 'table'}>

        {(iskey > 0) ?
          <ExpansionPanel className='panelx'>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className='heading' variant='h6'>Additional Table</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Table</TableCell>
                      <TableCell align="right">
                        <i class="material-icons">web_asset</i> P
                      </TableCell>
                      <TableCell align="right">
                        <i class="material-icons">web_asset</i> Nu
                      </TableCell>
                      <TableCell align="right">
                        <i class="material-icons">web_asset</i> Na
                      </TableCell>
                      <TableCell align="right">
                        <i class="material-icons">web_asset</i> Ne
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className='table-row'>
                      <TableCell component="th" scope="row">
                    Data for Table {iskey+1}
                      </TableCell>
                      <TableCell align="right">{p}</TableCell>
                      <TableCell align="right">{nu}</TableCell>
                      <TableCell align="right">{na}</TableCell>
                      <TableCell align="right">{ne}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          :

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell align="right">
                  <i class="material-icons">web_asset</i> P
                </TableCell>
                <TableCell align="right">
                  <i class="material-icons">web_asset</i> Nu
                </TableCell>
                <TableCell align="right">
                  <i class="material-icons">web_asset</i> Na
                </TableCell>
                <TableCell align="right">
                  <i class="material-icons">web_asset</i> Ne
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className='table-row'>
                <TableCell component="th" scope="row">
                    Data for Table {iskey+1}
                </TableCell>
                <TableCell align="right">{p}</TableCell>
                <TableCell align="right">{nu}</TableCell>
                <TableCell align="right">{na}</TableCell>
                <TableCell align="right">{ne}</TableCell>
              </TableRow>
            </TableBody>
          </Table>


        }




      </div>

    </Paper>
  );
};;



export default DataTable;
