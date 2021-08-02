import React, { Component } from 'react'
import KoperasiService from '../services/KoperasiService';

class FilterDateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            startdate: '',
            enddate: ''
        }
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
    }

    // step 3
    componentDidMount(){
    }

    setFilter = (e) => {
        e.preventDefault();
        let startdate = this.state.startdate;
        let enddate = this.state.enddate;
        this.props.history.push(`/detail-transaction-date/${startdate}/${enddate}`);
    }
    
    changeStartDateHandler= (event) => {
        this.setState({startdate: event.target.value});
    }

    changeEndDateHandler= (event) => {
        this.setState({enddate: event.target.value});
    }


    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        return <h3 className="text-center">Filter Tanggal</h3>
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
                                        <div className = "form-group">
                                            <label> Tanggal Mulai: </label>
                                            <input type="date" placeholder="Start Date" name="startdate" className="form-control" 
                                                value={this.state.startdate} onChange={this.changeStartDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tanggal Akhir: </label>
                                            <input type="date" placeholder="End Date" name="enddate" className="form-control" 
                                                value={this.state.enddate} onChange={this.changeEndDateHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.setFilter}>Filter Transaksi</button>
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

export default FilterDateComponent
