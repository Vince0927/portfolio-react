//import React,  { Component } from 'react';
// import ReactDom from 'react-dom';
// import styles from './mystyle.module.css';

// class Cssstyle extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1 className={styles.addstyle}>Add style</h1>
//                 <p>Inline style</p>
//             </div>
//         );
//     }
// }


// export default Cssstyle;



// import Pogi from './Pogi.js';

// const myfirstElement = <h1>React is {5 + 5} times better with JSX</h1>;

// const manyElements = (
//     <ul>
//         <label>Name:</label>
//         <input type="text" />
//         <h1 className="react-first-sentence">React is {5 + 5} times better with JSX</h1>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// );

// // conditional statement on jsx
// const x = 5;
// let text = "Gwapo";
// if (x < 10){
//     text = "Gwapa";
// }

// const if_conElement = <h1 className="beauty">{text}</h1>;

// // class Pogi extends React.Component{
// //     constructor(){
// //         super();
// //         this.state = {color: "red"};
//         this.state = {hair: "long"};
//     }
//     render(){
//         return <h1 className="enteng" id="enteng">Enteng Pogi with {this.state.hair} hair and {this.state.color} car</h1>;
//     }
// // }

// // props
// class Car extends React.Component{
//     render(){
//         return <h2>I am {this.props.name} gwapo!</h2>;
//     }
// }

// // Question component with component Pogi

// class Question extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>Who is that?</h1>
//                 <h2>It's me <Pogi /> </h2>
//             </div>
//         );
//     }
// }




// class Name extends React.Component{
//     render(){
//         return <h2 className="answer">My name is {this.props.name.prson}</h2>;
//     }
// }

// // with variable const and send the value to Name component
// class Question extends React.Component{
//     render(){
//         const person = {prson: "Enteng", age: "32"};
//         return(
//             <div>
//             <h1 className="question" >What is your name?</h1>
//             <Name name={person} />
//             </div>
//         );
//     }
// }

// state in react
// class Person extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             prson : "Teng",
//             age : "32",
//             work : "software engineer",
//             status : "single"
//         };
//     }

//     shouldComponentUpdate(){
//         return true;
//     }

//     changePerson = () => {
//         this.setState({prson: "Fernando"});
//     }

//     render(){
//         return(
//             <div>
//                 <h1 className="name-gwapo">My name is {this.state.prson}</h1>
//                 <p id="ageandwork">I am {this.state.age} and I work as {this.state.work}</p>
//                 <p id="status">I am still {this.state.status}</p>
//                 <button type="button" onClick={this.changePerson}>Change Person</button>
//             </div>
//         );
//     }
// }

// // single element with root id
// ReactDom.render(myfirstElement, document.getElementById('root'));
// ReactDom.render(if_conElement, document.getElementById('root'));

// // multiple elements with rood id
// ReactDom.render(manyElements, document.getElementById('root'));

// // component in react 
// ReactDom.render(< Pogi />, document.getElementById('root'));

// ReactDom.render(<Car name="Enteng"/>, document.getElementById('root'));

// // Question
// ReactDom.render(<Question/>, document.getElementById('root'));

// // imported Pogi component from another app
// // ReactDom.render(<Pogi />, document.getElementById('root'));

// // referring to other class and use props object
// ReactDom.render(<Question />, document.getElementById('root'));

// ReactDom.render(<Person />, document.getElementById('root'));

// class Shot extends React.Component{
//     shoot = (a) => {
//         alert(a);
//     }
//     render(){
//         return (<button onClick={() => this.shoot("Gwapo")}>Press to shoot</button>);
//     }
// }

// ReactDom.render(<Shot />, document.getElementById('root'));

// class MyForm extends React.Component{
//     constructor(props){
//     super(props);
//     this.state = {username: ""};
//     }


//     // this will receive username values / handler
//     myChangeHandler=(event)=>{
//         this.setState({username: event.target.value});
//     }

//     // another handler when you submit the form
//     mySubmitHandler=(event)=>{
//         event.preventDefault();
//         alert('You are submitting ' + this.state.username);
//     }

//     render(){
//         // conditional statement
//         let header = '';
//         if (this.state.username){
//             header = <h1>Name {this.state.username}</h1>;
//         }else{
//             header = '';
//         }


//         return (
//         <form onSubmit={this.mySubmitHandler}>
//             {header}
//             <label>Enter your name: </label>
//             <input type="text" id="name-input" onChange={this.myChangeHandler}/>
//             <input type="submit" value="submit"/>
//         </form>
//       );
//     }
// }


// ReactDom.render(<MyForm />, document.getElementById('root'));


// class MyForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             username : '',
//             age : null,
//         };
//     }

//     // submit handler
//     mySubmitHandler=(event)=>{
//         event.preventDefault();
//         let age = this.state.age;
//         if (!Number(age)){
//             alert("Your age must be a number");
//         }
//     }

//     // change handler
//     myChangeHandler=(event)=>{
//         let created_name = event.target.name;
//         let created_value = event.target.value;
//         this.setState({[created_name] : created_value});
//     }

//     render(){

//         return(
//             <form onSubmit={this.mySubmitHandler}>
//                 <h1>Hello {this.state.username}, your age is {this.state.age}</h1>
//                 <label>Name: </label>
//                 <input type="text" name="username" onChange={this.myChangeHandler}/>
//                 <br/>
//                 <label>Age: </label>
//                 <input type="text" name="age" onChange={this.myChangeHandler}/>
//                 <input type="submit" value="submit" />
//             </form>

//         );
//     }
// }


// ReactDom.render(<MyForm />, document.getElementById('root'));

// class MyForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             // description: "This is the content of the textarea",
//             mycar: "porsche"
//         }
//     }
//     render(){
//         return(
//             <form>

//             <select value={this.state.mycar}>
//                 <option value="Porsche">Porsche</option>
//                 <option value="BMW">BMW</option>
//                 <option value="Mazda">Mazda</option>
  
//             </select>
//             </form>
//         );
//     }
// }

// ReactDom.render(<MyForm/>, document.getElementById('root'));



// ReactDom.render(<Cssstyle/>, document.getElementById('root'));


// class Practicejs extends React.Component{
//     // constructor will initialize the properties
//     constructor(props){
//         super(props);
//         this.state = {
//             message: 'Practice Javascript'
//         }
//     }

//     // Javascript function here/ methods here


//     render(){

//         return(
//             <div>
//                 <h1 className="Practice">Practice Javascript in ReactJs</h1>
//                 <p>{this.state.message}</p>
//             </div>
//         );
//     }
// }

// ReactDom.render(<Practicejs/>, document.getElementById('root'));

    