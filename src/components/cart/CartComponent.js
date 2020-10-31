import React, { Component } from "react";
import {connect} from 'react-redux';
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";

class CartComponent extends Component {

  constructor(props){
    super(props);
    this.state={
        
        columns: [
          {
            label: '',
            field: 'img',
          },
          {
            label: <strong>Medicine/Shop Name</strong>,
            field: 'name'
          },
          {
            label: <strong>Price</strong>,
            field: 'price'
          },
          {
            label: <strong>QTY</strong>,
            field: 'qty'
          },
          {
            label: <strong>Amount</strong>,
            field: 'amount'
          },
          {
            label: '',
            field: 'button'
          }
      ],
      sum: 0
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log(props)
        return {
          data: props.data,
          ...state
        }
  }


totalSum = (val) => {
    this.state.sum += Number(val);
}

render() {

    const rows = [];
    const { columns, data } = this.state;

    data.map(row => {
        this.totalSum(row.qty * row.price);
      return rows.push(
        {
        'img': <img src={row.imgsrc} alt="" className="img-fluid z-depth-0" />,
        'name': [<h5 className="mt-3"><strong>{row.medName}</strong></h5>, <p className="text-muted">{row.shopName}</p>],
        'price': `₹ ${row.price.toFixed(2)}`,
        'qty':
        <>
            <select value={`${row.qty}`} className="mdb-select md-form" style={{ width: "100px" }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </>,
        'amount': <strong>₹ {(row.qty * row.price).toFixed(2)}</strong>,
        'button':
        <a href="#">Remove</a>
        }
      )
      
    });

    return (
    <MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>
          <div className="row">
              <div className="col-9">
                <strong>Total Amount: {this.state.sum}</strong>
              </div>
              <div className="col-sm">
                  <a className="btn btn-outline-primary" role="button" href="#">Book Now</a>
              </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
    );
  }
}

const mapStateToProps = state => {
  return {
      data:state.medicinesInCart
  };
};

export default connect(mapStateToProps, null)(CartComponent);