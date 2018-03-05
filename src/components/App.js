import React, { Component } from 'react';
import ListingPersons from './listing_persons';
import Person from './person';

class App extends Component {

    // componentWillMount(){
    //     this.props.getListingData();
    // }



    render() {

        console.log('----------------------------------->>>>>>>>>>',this.props.match.params.id);
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

        

    //     const {
    //         listingData,
    //         isFetching,
    //         errorData
    //     } = this.props;     

    //     if(isFetching){
    //         return <div>......Loading</div>
    //     } 
        
    //     if(errorData){
    //         return <div>{errorData}</div>
    //     }
        
    //     let dataBlocks = listingData.map((data) => {
    //         return(
    //             <Router key={data.id}>
    //             <div>
    //                 <Link to={`/${data.id}`}>
    //                     <div key={data.id} className='person' >
    //                         <img src={data.avatar} alt='person_image' className='avatar'/>
    //                         {data.first_name+' '+data.last_name}
    //                     </div>
    //                 </Link>
    //                 <Route path={`/${data.id}`} component={Person} />
    //             </div>
    //             </Router>
    //         )
    //     })

    //     return(
    //         <div>
    //             <ul>
    //                 {dataBlocks}
    //             </ul>
    //         </div>
    //     );

    // }
}

}

// const Person = ({match}) => {
//    let p =  getPerson(match)
//     console.log('=======>>',match)
//    return(
//         <div>
            
//         </div>   

//    );
   
// }

// function getPerson(id){
//     axios.get(`{https://reqres.in/users/${id}}`)
//             .then(response => {
//                 console.log('===================>', response );
//             })
//             .catch(error => {
//                console.log(error);
//             });
// }

// function mapStateToProps(state){
//     const{
//         listingStore: {
//             listingData,
//             isFetching,
//             errorData
//         }
//     }=state;
//     return{
//         listingData,
//         isFetching,
//         errorData
//     };
// }

// export default connect(mapStateToProps, {getListingData})(App);

export default App;