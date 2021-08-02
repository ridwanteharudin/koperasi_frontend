import React, { Component } from 'react'
import KoperasiService from '../services/KoperasiService'

class ListTransactionByDateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startdate: this.props.match.params.startdate,
            enddate: this.props.match.params.enddate,
            transactions: []
        }
    }

    componentDidMount(){
    	let data = {startDate: this.state.startdate, endDate: this.state.enddate};
        KoperasiService.getTransactionByDate(data).then((res) => {
            this.setState({ transactions: res.data.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Daftar Transaksi</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                	<th> Member Name </th>
                                    <th> Tanggal Transaksi</th>
                                    <th> Jenis Transaksi</th>
                                    <th> Total Transaksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.transactions.map(
                                        transaction => 
                                        <tr key = {transaction.transactionMemberKoperasiId}>
                                             <td> {transaction.memberName} </td>
                                             <td> {transaction.tanggal} </td>   
                                             <td> {transaction.jenisTransaksi}</td>
                                             <td> {transaction.total}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTransactionByDateComponent
