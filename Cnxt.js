// import React,{useState,useEffect} from 'react'

// const Cnxt = () => {

//     const [widthCount, setWidthCount] = useState(window.screen.width);

//     const actualWidth = () => {
//         console.log(window.innerWidth);
//         setWidthCount(window.innerWidth);
//     }
//     useEffect(()=>{
//       console.log("add event")
//         window.addEventListener("resize",actualWidth);

//         return()=>{
//           console.log("remove Event");
//           window.removeEventListener("resize",actualWidth)
//         }
//     });
//   return (
//     <div style ={{"color":"aqua"}}>
//       <center>
//         <h1>jaise hee hum inspect me resize karenge uski value change hogi</h1>
//         <p>the actual size of the window is:</p>
//         <h1>{widthCount}</h1>
//       </center>
//     </div>
//   )
// }

// export default Cnxt



