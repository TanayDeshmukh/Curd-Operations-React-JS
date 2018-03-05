import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPerson } from '../actions/get-person';

class Person extends Component {

    componentWillMount(){
        this.props.getPerson(this.props.id);
    }

    render() {

        const {
            isFetching,
            errorData,
            singleObject
        } = this.props;     

        console.log('single Object ===========================================',singleObject);

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
                    <input type='text' id='firstname' className='name-input' defaultValue={singleObject.first_name}/>
                </div>
                <div>
                    <input type='text' id='lastname' className='name-input' defaultValue={singleObject.last_name}/>
                </div>
                <div>
                    <button>Save</button>
                    <button>Cancle</button>
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

export default connect(mapStateToProps, {getPerson})(Person);
