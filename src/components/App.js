import React, { Component } from 'react';
import ListingPersons from './listing_persons';
import Person from './person';

class App extends Component {

    render() {
        if(this.props.match.params.id){
            return(
                <Person 
                id={this.props.match.params.id}
                />
            );
        }else{
            return(
                <div>
                    <ListingPersons />
                </div>
    
            );

        }
    }
}

export default App;