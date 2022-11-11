// import React from 'react'
// //import ComA from './ComA'

// import {FirstName,LastName}from './App'

// function ComC() {

//     return (
//         <div>
//             <FirstName.Consumer>
//                 {(fname) => {
//                      return(
            
//                 <LastName.Consumer>
//                     {(lname)=>{
//                         return(
//                     <h1>My Name Is {fname} {lname}</h1>
//             );
//             }}</LastName.Consumer>
            
//     ); 
//                  }}</FirstName.Consumer>
            
//         </div>
//     );
// }
// export default ComC;




import React from 'react';
//import ComA from'./ComA';
import {FirstName,LastName} from './App'
function ComC(){
    return(
        <div>
<FirstName.Consumer>
    {(fname)=>{
        return(
            <LastName.Consumer>
                {(lname)=>{
                    return(
<h1>ardagta {fname} {lname}</h1>
                    )
                }}
            </LastName.Consumer>
        )
    }}
</FirstName.Consumer>
        </div>
    )
}
export default ComC ;  


