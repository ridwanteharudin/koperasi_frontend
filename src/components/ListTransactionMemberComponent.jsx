import React, { Component } from 'react'
import KoperasiService from '../services/KoperasiService'

class ListTransactionMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                transactions: []
        }
    }

    componentDidMount(){
        KoperasiService.getTransactionMember("e48fc0707f7e49b8b1559eb7c9717814").then((res) => {
        	console.log("ini data");
        	console.log(res.data);
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
                                             <td> {transaction.transactionDateMemberKoperasi} </td>   
                                             <td> {transaction.transactionTypeMemberKoperasi}</td>
                                             <td> {transaction.totalTransactionMemberKoperasi}</td>
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

export default ListTransactionMemberComponent
