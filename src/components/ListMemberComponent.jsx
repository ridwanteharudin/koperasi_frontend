import React, { Component } from 'react'
import KoperasiService from '../services/KoperasiService'

class ListMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                members: []
        }
        this.addMember = this.addMember.bind(this);
        this.addSimpanan = this.addSimpanan.bind(this);
        this.viewTransaction = this.viewTransaction.bind(this);
        this.viewTransactionPeriod = this.viewTransactionPeriod.bind(this);
    }

    componentDidMount(){
        KoperasiService.getMemberList().then((res) => {
            this.setState({ members: res.data.data});
        });
    }

    addMember(){
        this.props.history.push('/add-member');
    }

    addSimpanan(){
        this.props.history.push('/add-simpanan');
    }

    viewTransactionPeriod(){
        this.props.history.push('/filter-date');
    }

    viewTransaction(memberId){
        this.props.history.push(`/detail-transaction/${memberId}`);
    }

    render() {
        return (
            <div>
                <br></br>
                 <h2 className="text-center">Daftar Anggota</h2>
                 <br></br>
                 <div className = "row">
                    <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.addMember}> Tambah Anggota </button>
                    <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.addSimpanan}> Tambah Transaksi </button>
                    <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.viewTransactionPeriod}> Lihat Transaksi (Period) </button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nama </th>
                                    <th> Tanggal Lahir</th>
                                    <th> No Hp</th>
                                    <th> Alamat </th>
                                    <th> Total Simpanan </th>
                                    <th> Total Pinjaman </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.members.map(
                                        member => 
                                        <tr key = {member.memberId}>
                                             <td> {member.memberName} </td>   
                                             <td> {member.memberBirthDate}</td>
                                             <td> {member.memberMobilePhone}</td>
                                             <td> {member.memberAddress}</td>
                                             <td> {member.totalSimpanan}</td>
                                             <td> {member.totalPinjaman}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTransaction(member.memberId)} className="btn btn-info">Lihat Transaksi </button>
                                             </td>
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

export default ListMemberComponent
