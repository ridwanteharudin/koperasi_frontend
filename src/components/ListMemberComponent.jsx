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

    viewTransaction(){
        this.props.history.push(`/detail-transaction`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Daftar Anggota</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMember}> Tambah Anggota </button>
                    <button className="btn btn-primary" onClick={this.addSimpanan}> Tambah Transaksi </button>
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
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTransaction()} className="btn btn-info">View </button>
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
