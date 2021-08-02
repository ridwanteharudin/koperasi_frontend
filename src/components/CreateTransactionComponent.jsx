import React, { Component , useState} from 'react'
import KoperasiService from '../services/KoperasiService';
import { Button, Modal } from 'react-bootstrap';

class CreateTransactionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            memberId: '',
            tanggal: '',
            total: 0,
            jenisTransaksi: '',
            options: []
        }
        this.changeTanggalHandler = this.changeTanggalHandler.bind(this);
        this.changeTotalHandler = this.changeTotalHandler.bind(this);
        this.changeMemberIdHandler = this.changeMemberIdHandler.bind(this);
    }

    // step 3
    componentDidMount(){
    	this.fetchMemberList()
    }

    fetchMemberList(){
        KoperasiService.getMemberList().then((res) => {
            this.setState({ options: res.data.data});
            console.log(this.state.options);
        });
    }

    saveTransaction = (e) => {
        e.preventDefault();
        let transaction = {};
        if(this.state.jenisTransaksi == 'simpan') {
        	transaction = {memberId: this.state.memberId, tanggalSimpananMember: this.state.tanggal, totalSimpananMember: this.state.total};
	        KoperasiService.createSimpanan(transaction).then(res =>{
                if(res.data.status != "success"){
                    alert(res.data.info.message);
                }else{
                    this.props.history.push('/');
                }
	        });
        }else if(this.state.jenisTransaksi == 'pinjam'){
			transaction = {memberId: this.state.memberId, tanggalPinjamanMember: this.state.tanggal, totalPinjamanMember: this.state.total};
	        KoperasiService.createPinjaman(transaction).then(res =>{
                if(res.data.status != "success"){
                    alert(res.data.info.message);
                }else{
                    this.props.history.push('/');
                }
	        });
        }else if(this.state.jenisTransaksi == 'bayar'){
        	transaction = {memberId: this.state.memberId, tanggalBayarPinjamanMember: this.state.tanggal, totalBayarPinjamanMember: this.state.total};
	        KoperasiService.createBayar(transaction).then(res =>{
	            if(res.data.status != "success"){
                    alert(res.data.info.message);
                }else{
                    this.props.history.push('/');
                }
	        });
        }else if(this.state.jenisTransaksi == 'tarik'){
        	transaction = {memberId: this.state.memberId, tanggalTarikSimpananMember: this.state.tanggal, totalTarikSimpananMember: this.state.total};
	        KoperasiService.createTarik(transaction).then(res =>{
	            if(res.data.status != "success"){
                    alert(res.data.info.message);
                }else{
                    this.props.history.push('/');
                }
	        });
        }else{
        	this.props.history.push('/');
        }
        
    }
    
    changeTanggalHandler= (event) => {
        this.setState({tanggal: event.target.value});
    }

    changeTotalHandler= (event) => {
        this.setState({total: event.target.value});
    }

    changeMemberIdHandler= (event) => {
        this.setState({memberId: event.target.value});
    }

    changeJenisTransaksiHandler= (event) => {
        this.setState({jenisTransaksi: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        return <h3 className="text-center">Tambah Transaksi</h3>
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    	<div className="drop-down">
	                                    	<label> Nama : </label>
	                                    	<select value={this.state.selectValue} onChange={this.changeMemberIdHandler}>
								                <option value="" key="">Pilih Anggota</option>
								                { this.state.options.map(option => <option value={option.memberId} key={option.memberId} >{option.memberName}</option>) }
								            </select>
							            </div>
							            <div className="drop-down">
	                                    	<label> Jenis Transaksi : </label>
	                                    	<select value={this.state.selectValue} onChange={this.changeJenisTransaksiHandler}>
								                <option value="" key="">Pilih Jenis Transaksi</option>
								                <option value="simpan" key="simpan">Simpan</option>
								                <option value="pinjam" key="pinjam">Pinjam</option>
								                <option value="bayar" key="bayar">Bayar</option>
								                <option value="tarik" key="tarik">Tarik</option>
								            </select>
							            </div>
                                        <div className = "form-group">
                                            <label> Tanggal : </label>
                                            <input type="date" placeholder="Tanggal" name="tanggal" className="form-control" 
                                                value={this.state.tanggal} onChange={this.changeTanggalHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Total : </label>
                                            <input placeholder="Total" name="total" className="form-control" 
                                                value={this.state.total} onChange={this.changeTotalHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveTransaction}>Simpan</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Batal</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTransactionComponent
