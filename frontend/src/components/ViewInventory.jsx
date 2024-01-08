import React, { Component } from "react";
import IventoryService from "../services/InventoryService";

class ViewTransactionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      item: {},
    };
  }

  componentDidMount() {
    IventoryService.getInventoryById(this.state.id).then((res) => {
      this.setState({ item: res.data });
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="card mx-auto" style={{ width: '50%' }}>
          <h3 className="card-header text-center">View Inventory Details</h3>
          <div className="card-body">
            <div className="row mb-2">
              <div className="col-sm-6">
              </div>
            </div>
            <div className="row">
              <label>ID : </label>
              <div>{this.state.item.id}</div>
            </div>
            <div className="row">
              <label>Nama Barang : </label>
              <div>{this.state.item.nama_barang}</div>
            </div>
            <div className="row">
              <label>Jumlah : </label>
              <div>{this.state.item.jumlah}</div>
            </div>
            <div className="row">
              <label>Harga Satuan : </label>
              <div>Rp.{this.state.item.harga_satuan}</div>
            </div>
            <div className="row">
              <label>Lokasi : </label>
              <div>{this.state.item.lokasi}</div>
            </div>
            <div className="row">
              <label>Deskripsi : </label>
              <div>{this.state.item.deskripsi}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewTransactionComponent;