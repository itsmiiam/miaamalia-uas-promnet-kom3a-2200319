import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';

class ListInventory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        // Konfirmasi alert sebelum menghapus
        const userConfirmed = window.confirm('Are you sure want to delete this item?');
    
        // Jika pengguna mengonfirmasi, maka panggil API untuk menghapus item
        if (userConfirmed) {
            InventoryService.deleteInventory(id)
                .then(() => {
                    this.setState(prevState => ({
                        items: prevState.items.filter(item => item.id !== id)
                    }));
                })
                .catch(error => {
                    console.error("Error deleting item:", error);
                });
        }
    }
    

    viewItem(id) {
        this.props.history.push(`/view/${id}`);
    }

    editItem(id) {
        this.props.history.push(`/${id}`);
    }

    componentDidMount() {
        InventoryService.getInventories()
            .then(res => {
                if (!res.data) {
                    this.props.history.push('/list');
                }
                this.setState({ items: res.data || [] });
            })
            .catch(error => {
                console.error("Error fetching inventories:", error);
            });
    }

    addItem() {
        this.props.history.push('/add/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Inventory List</h2>
                <div className="row">
                    <button className="btn btn-primary"
                        onClick={this.addItem}>Add Item</button>
                </div>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nama Barang</th>
                                <th>Jumlah</th>
                                <th>Harga Satuan</th>
                                <th>Lokasi</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nama_barang}</td>
                                        <td>{item.jumlah}</td>
                                        <td>Rp.{item.harga_satuan}</td>
                                        <td>{item.lokasi}</td>
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    onClick={() => this.editItem(item.id)}
                                                    className="btn btn-warning text-white mx-1" > Edit
                                                </button>
                                                <button
                                                    onClick={() => this.viewItem(item.id)}
                                                    className="btn btn-info mx-1" > Detail
                                                </button>
                                                <button
                                                    onClick={() => this.deleteItem(item.id)}
                                                    className="btn btn-danger mx-1" > Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListInventory;
