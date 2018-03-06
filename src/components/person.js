import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPerson } from '../actions/get-person';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Person extends Component {

    componentWillMount(){
        this.props.getPerson(this.props.id);
    }

    redirectToHome(){

        this.props.history.push('/');
    }

    handleSave(id, avatar){

        let fname = document.getElementById('firstname').value;
        let lname = document.getElementById('lastname').value;

        axios.put(`https://reqres.in/api/users/${id}`, {id:{id}, first_name:{fname}, last_name:{lname}, avatar:{avatar}})
            .then(response => {
                console.log('Edit user response',response);
                this.redirectToHome();
            })
            .catch(error => {
                console.log('Edit user error',error);
            });         
    }

    handleAdd(){

        let fname = document.getElementById('firstname').value;
        let lname = document.getElementById('lastname').value;

        axios.post(`https://reqres.in/api/users/`, {first_name:fname, last_name:lname})
            .then(response => {
                console.log('Add user response',response);
                this.redirectToHome();
            })
            .catch(error => {
                console.log('Add user error',error);
            });    

        this.redirectToHome();
    }

    render() {

        const {
            isFetching,
            errorData,
            singleObject
        } = this.props;     

        if(isFetching){
            return <div>......Loading</div>
        } 
        
        if(errorData){
            return <div>{errorData}</div>
        }
        
        return(
            <div>
                <div>
                    <img src={singleObject.avatar} alt=''/>
                </div>
                <div>
                    <label>
                        First Name:
                        <input type="text" id='firstname' className='name-input' defaultValue={singleObject.first_name}/>
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type='text' id='lastname' className='name-input' defaultValue={singleObject.last_name}/>
                    </label>
                </div>
                <div>
                    {this.props.match.id===0? 
                        <button onClick={()=>this.handleAdd()}>Add</button>:
                        <button onClick={()=>this.handleSave(singleObject.id, singleObject.avatar)}>Save</button>
                    }
                          
                    <button onClick={() => this.redirectToHome()}>Cancle</button>
                    
                </div>         
            </div>
        )

    }
}

function mapStateToProps(state){
    const{
        listingStore: {
            isFetching,
            errorData,
            singleObject
        }
    }=state;
    return{
        isFetching,
        errorData,
        singleObject
    };
}

export default connect(mapStateToProps, {getPerson})(withRouter(Person));
