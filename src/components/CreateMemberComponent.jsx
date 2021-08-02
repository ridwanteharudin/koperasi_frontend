import React, { Component } from 'react'
import KoperasiService from '../services/KoperasiService';

class CreateMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            memberName: '',
            memberMobilePhone: '',
            memberAddress: '',
            memberBirthDate: ''
        }
        this.changeMemberNameHandler = this.changeMemberNameHandler.bind(this);
        this.changeMobilePhoneHandler = this.changeMobilePhoneHandler.bind(this);
        this.changeMemberAddressHandler = this.changeMemberAddressHandler.bind(this);
        this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
    }

    // step 3
    componentDidMount(){
    }

    saveMember = (e) => {
        e.preventDefault();
        let member = {memberName: this.state.memberName, memberMobilePhone: this.state.memberMobilePhone, memberAddress: this.state.memberAddress, memberBirthDate: this.state.memberBirthDate};

        
        KoperasiService.createMember(member).then(res =>{
            this.props.history.push('/');
        });
    }
    
    changeMemberNameHandler= (event) => {
        this.setState({memberName: event.target.value});
    }

    changeMobilePhoneHandler= (event) => {
        this.setState({memberMobilePhone: event.target.value});
    }

    changeMemberAddressHandler= (event) => {
        this.setState({memberAddress: event.target.value});
    }

    changeBirthDateHandler= (event) => {
        this.setState({memberBirthDate: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        return <h3 className="text-center">Add Member</h3>
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
                                            <label> Member Name: </label>
                                            <input placeholder="Member Name" name="memberName" className="form-control" 
                                                value={this.state.memberName} onChange={this.changeMemberNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile Phone: </label>
                                            <input placeholder="Mobile Phone" name="memberMobilePhone" className="form-control" 
                                                value={this.state.memberMobilePhone} onChange={this.changeMobilePhoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address : </label>
                                            <input placeholder="Address" name="memberAddress" className="form-control" 
                                                value={this.state.memberAddress} onChange={this.changeMemberAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Birth Date : </label>
                                            <input type="date" placeholder="Birth Date" name="memberAddress" className="form-control" 
                                                value={this.state.memberBirthDate} onChange={this.changeBirthDateHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveMember}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateMemberComponent
