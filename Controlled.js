// import React, { useSyncExternalStore } from "react";

// export class Controlled extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { res: " ", res1: " ", res2: "" }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleSubmit1 = this.handleSubmit1.bind(this);
//         this.fun = this.fun.bind(this)  // Event binding


//     }
//     handleSubmit(event) {
//         this.setState({ res: event.target.value });
//     }
//     handleSubmit1(event) {
//         this.setState({ res1: event.target.value });
//     }
//     fun(e) {
//         var a = parseInt(this.state.res)
//         var b = parseInt(this.state.res1)
//         a = a + b
//         b = a - b
//         a = a - b
//         //  alert("Name is "+n)
//         this.setState({ res: a })
//         this.setState({ res1: b })
//         this.setState({ res2: "a =" + a + "b= " + b })
//         e.preventDefault()
//     }
//     render() {
//         return (<div>
//             <form onSubmit={this.fun}>
//                 <p>Enter name</p>
//                 <input type="text" onChange={this.handleSubmit} value={this.state.res} placeholder="Enter first number" />
//                 <br />
//                 <input type="text" onChange={this.handleSubmit1} value={this.state.res1} placeholder="Enter second number" />
//                 <br />
//                 <input type="submit" value="Click" />
//             </form>
//             {this.state.res2}
//         </div>)
//     }
// }





//PRIME NUMBER PROGRAM WITH CONTROL CLASS COMPONENT ===========================================================



// import React,{useSyncExternalStore}from 'react'

// export class Controlled extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {res:"" ,res1:""}
//         this.handleSubmit =this.handleSubmit.bind(this)
//         this.fun = this.fun.bind(this)
//     }
//     handleSubmit(event){
//         this.setState({res:event.target.value});
//     }
//     fun(e) {
//         var num = parseInt(this.state.res)
//         var c = true;
//         //var a1 =this.num.target.value;
//         for (var i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 c = false;
//                 break
//             }
//         }
//         if (c) {
//             this.setState({res1: "prime"})
//         }
//         else {
//             this.setState({res1: "notprime"})
//         }
//         e.preventDefault()
//     }

//     render(){
//         return(
//             <div>
//                 <form onSubmit = {this.fun}>
//                     <p>Enter name</p>
//                     <input type ='text' onChange ={this.handleSubmit} value = {this.state.res} placeholder = 'enter value'/><br/>
//                     <input type = 'submit' value = 'click'/>
//                 </form>
//                 {this.state.res1}
//             </div>
//         )
//     }
// }


//SIMPLE INTEREST PROGRAM WITH CONTROLLED CLASS COMPONENT=============================================================


// import React  from 'react';
// export class Controlled extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {res:"",res1:"",res2:"",res3:""}
//         this.handleSubmit =this.handleSubmit.bind(this)
//         this.handleSubmit1 = this.handleSubmit1.bind(this)
//         this.handleSubmit2 = this.handleSubmit2.bind(this)
//         this.fun =this.fun.bind(this)
//   }
// handleSubmit(event){
//     this.setState({res:event.target.value})
// }
//     handleSubmit1(event) {
//         this.setState({ res1: event.target.value })
//     }

//     handleSubmit2(event) {
//         this.setState({ res2: event.target.value })
//     }

//     fun(e){
//         var a = parseInt(this.state.res)
//          var b = parseInt(this.state.res1)
//          var c = parseInt(this.state.res2)
//          this.setState({res:a})
//         this.setState({ res1: b})
//         this.setState({ res2: c})
//         this.setState({res3:a*b*c/100})
//         e.preventDefault()
//     }

// render(){
//     return(
//         <div>
//             <form onSubmit ={this.fun}>
//                 <input type = 'text' onChange ={this.handleSubmit} value={this.state.res} placeholder = 'enter value'/><br/>
//                 <input type='text' onChange={this.handleSubmit1} value={this.state.res1} placeholder='enter value' /><br />
//                 <input type='text' onChange={this.handleSubmit2} value={this.state.res2} placeholder='enter value' /><br />
//                 <input type ='submit' value ='click'/> 


//             </form>
//             {this.state.res3}
//         </div>
//     )
// }
// }


//FEBONACCI SERIES PROGRAM WITH CONTROLLED CLASS COMPONENT 

// import React from 'react'
// export class Controlled extends React.Component{
//     constructor(props){
//         super(props)
//         this.state ={res:"",res1:""}
//         this.handleSubmit=this.handleSubmit.bind(this)
//         this.fun = this.fun.bind(this)

//     }
//     handleSubmit(event){
//         this.setState({res:event.target.value})
//     }
//     fun(e){
//         var  n = parseInt(this.state.res)
//         var b=1,a=-1
//         var c=0
//         var str =''
//       for(var i =0;i<n;i++){
//         c=a+b;
//         str = str+c+''
//           this.setState({ res1: str })
//         a=b 
//         b=c

//       }
      
//         e.preventDefault()
//     }

//     render(){
//         return(
//             <div>
//                 <form onSubmit = {this.fun}>
//                     <input type ='text' onChange ={this.handleSubmit} value = {this.state.res} placeholder='enter value'/><br/>
//                     <input type = 'submit' value = 'click'/>
//                 </form>
//                 {this.state.res1}
//             </div>
//         )
//     }
// }







