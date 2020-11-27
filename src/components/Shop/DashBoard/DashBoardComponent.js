import React from 'react';
import BarGraphForProfit from './BarGraphForProfit';
import BarGraphForStock from './BarGraphForStock'
import SafetyStockTable from './SafetyStockTable'
import ProgressBar from './ProgressBar';
import PieChart from './PieChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import './DashBoardComponent.css'

class DashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{}
        }
      }

      

   

      render(){
        return (
          // <div className = "dashBoardDesign">
          
              
          // </div>
          <div>
              <div>
                <h1 className = "block">DashBoard</h1>
              </div>
              <div className = "dashBoardDesign">
            
            <Container className = "containerOfDashBoard" >
                <Row className = "rowOfDashBoard">
                  <div className = "BarGraph">
                    <Col>
                      <div>
                        <BarGraphForProfit />
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <BarGraphForStock />
                      </div>
                    </Col>
                </div>
                  
                  
                </Row>
                <Row className="rowOfDashBoard">
                  <div className = "row2">
                    <Col className="stock">
                      <div>
                          <SafetyStockTable />
                      </div>  
                    </Col>
                    <Col>
<<<<<<< HEAD
                      <div>
                          <PieChart />
=======
                      <div className = "designProgressBar">
                          <ProgressBar />
>>>>>>> dee69a8567ea3b1747c5d4f9ee965f985639e81b
                      </div>
                    </Col>
                  </div>
                </Row>
            </Container>
          </div>
          </div>

          

        )
      }
}


export default DashBoard; 