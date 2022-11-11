// import React from "react";
// //import ReactDom from "react-dom";

// const NumberContext = React.createContext();
// function App(){
//   return(
//     <NumberContext.Provider value={"aradhya kumar gautam ji"}>
//     <div>
//       <Display/>
//     </div>
//     </NumberContext.Provider>

  

//   );
// }

// function Display(){
//   return(
//     <NumberContext.Consumer>
//     {value => <div> the answer is {value}.</div>}
//     </NumberContext.Consumer>

     
//   );
// }

// export default App;








// import React from 'react'

// const NumberContext=React.createContext()

// function App(){
//   return(
//   <NumberContext.Provider value={'aradhya 12354 from'}>
//     <div>
//       <Display/>
//     </div>
//   </NumberContext.Provider>
//   );
// }

// function Display(){
//   return(
//   <NumberContext.Consumer>
//     {value => <div><h1>aradhya is mern stack developer {value}</h1></div>}
//   </NumberContext.Consumer>


//   );
// }
// export default App


//==============================================================================================

//CONTEXT API EXAMPLE JISKE COMPONENT COMA COMB COMC BANE HUYE HAIN AUR APP.JS SE DATA DIRECT
//KAISE CONTEXT API KE THROUGH JAAYEGA DIYA HUA HAI AUR ISI ME PROPS KA EXAMPLE BHI INCLUDE HAI
        




import React,{createContext} from 'react'
import ComA from './ComA'

const FirstName = createContext()
const LastName = createContext()

function  App(){

  return(
    <div>
      <FirstName.Provider value ={'Aradhya'}>
        <LastName.Provider value={'Kumar Gautam'}>
            <ComA/>  
        </LastName.Provider>
      </FirstName.Provider>

      
    </div>
  );
}
export default App;
export {FirstName,LastName}





