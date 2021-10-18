import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';
import profile from './images/profile1.png';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaGripLines } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import { ParallaxProvider } from 'react-scroll-parallax';

//import function App from app.js
import { App } from './app.js';   

import ImgApp from './app.js';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// import axios
import axios from 'axios';

// image slides
// slide show image

import img1 from './images/jp-morgan-cert.jpg';
import img2 from './images/cisco-cert.jpg';
import img3 from './images/google-cert.jpg';


// import browser router
import { BrowserRouter } from "react-router-dom";





export default class Portfolio extends React.Component{
    // constructor here
    constructor(props){
        super(props);
        this.state ={
            name: "Vicente",
            lastname: "Gumop-as",
            blog: "blog",
            about: "about",
            projects: "projects",
            certs: "certifications",
            contact: "contact",
            seven: "7",
            open: "{",
            close: "}",
            space: "' '",
            image: "profile1.png",
            email: " ",
            subject: " ",
            message: " ",

        };


        this.onValueChange = this.onValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // functions/methods here

    // handles change in state
    // handleChange(event) {    
    //     this.setState({email: event.target.value});  
    // }

    // general use of function to change value
    onValueChange(event){
        // console.log(event.target.dataset.name)
        this.setState({
            [event.target.dataset.name]: event.target.value
        })
    }
    
    // handles submit event from the frontend to backend
    handleSubmit(event) {
        // console.log(this.state);

        const contact = {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        }

        // call axios to connect the frontend to backend

        axios.post('http://localhost:5000/posts/add', contact)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        
        // change state
        this.setState({
            email: '',
            subject: '',
            message: ''

        })
        event.preventDefault();
      }





    // show mobile navigation menu
    appear_menuFunction(){
        var x = document.getElementById("mobile-nav-menu");
        x.style.display = 'block'; //once clicked the mobile navigation block will appear
    }


    // close mobile navigation menu
    hide_menuFunction(){
        var x = document.getElementById("mobile-nav-menu");
        x.style.display = 'none';   //once clicked the mobile navigation block will be removed
    }


    // parallax function
    parallaxEffect(){
        // parallax scrolling slow effect
        const parallax= document.getElementById('about-container-id');
        window.addEventListener("scroll", function(){
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.4 + "px";
    })

    }


    

    render(){

        // create var/const/let/js here

    // image slideshow
    const slideImages = [
        {
            url: img1,
            caption: 'red'
        },
        {
            url: img2,
            caption: 'black'
        },
        {
            url: img3,
            caption: 'white'
        },


        ];   
        const Slideshow = () => {
            return (
            <div className="slide-container">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                    <div className="slide-img" style={{'backgroundImage': `url(${slideImage.url})`}}>
                        <span>{slideImage.caption}</span>
                    </div>
                    </div>
                ))} 
                </Slide>
            </div>
            )
        }
        

        // return html body
        return(
            <div>
            
                {/* open html body */}
                {/* <!--header start--> */}
                <header className="header">
                    <div className="container" id="container-1">
                        <div className="row justify-content-between" id="row-fixed">
                            <div className="logo">
                                <a href="index_portfolio.html" style={{color: "black"}}>{this.state.seven}</a>
                            </div>
                            <div className="h-text"><p className="logo-name" >{this.state.name} {this.state.lastname}</p>
                            </div>
                            <div className="nav-sample">
                                <nav className="inline-nav">
                                    <ul className="ul-nav">
                                        <li className="li-nav" id="li-navhome" ><a href="#" id="a-home-nav"><div id="a-div-home"  >{this.state.blog}</div></a></li>
                                        <li className="li-nav" id="li-navabout"><a href="#about" className="about-nav"><div id="a-div-about"  >{this.state.about}</div></a></li>
                                        <li className="li-nav" id="li-navprojects"><a href="#cert-title" className="certs-nav"> <div id="a-div-certs" >{this.state.certs}</div></a></li>
                                        <li className="li-nav" id="li-navprojects"><a href="#projects-heading-section" className="projects-nav"> <div id="a-div-projects" >{this.state.projects}</div></a></li>
                                        <li className="li-nav" id="li-navcontact"><a href="#submit-contact" className="contact-nav"><div id="a-div-contact"  >{this.state.contact}</div></a></li>
                                    </ul>
                                </nav>
                            </div>

                            {/* <!-- mobile navigation menu start--> */}
                            <div className="hamburger-btn outer-shadow hover-in-shadow" id="menu-button" onClick={this.appear_menuFunction}>
                                <FaGripLines />
                            </div>
                           
                            <br/>

                                <nav className='nav-menu' id="mobile-nav-menu">
                                    
                                    <div className="hamburger-btn2 outer-shadow hover-in-shadow " id="menu-button2" onClick={this.hide_menuFunction}><p id="mobile-close-button" style={{textAlign: 'center'}}><FaTimes/></p></div>  
                                            <div className='nav-menu-inner-container'>
                                                    <div className="grid-item">
                                                        <a href="#" className="btn-1 outer-shadow inner-shadow active" id="inner-shadow-active" style={{color: 'purple'}}>home</a>
                                                    </div>
                                                    <div className="grid-item" onclick="showhide_menufunction()">
                                                        <a href="#about" className="btn-1 outer-shadow hover-in-shadow" id="about-me">about</a>
                                                    </div >
                                                    <div className="grid-item" onclick="showhide_menufunction()">
                                                        <a href="#cert-title" className="btn-1 outer-shadow hover-in-shadow" id="about-me">certifications</a>
                                                    </div >
                                                    <div className="grid-item" onclick="showhide_menufunction()">
                                                        <a href="#" className="btn-1 outer-shadow hover-in-shadow" id="projects">blog</a>
                                                    </div>
                                                    <div className="grid-item" onclick="showhide_menufunction()">
                                                        <a href="#projects-heading-section" className="btn-1 outer-shadow hover-in-shadow" id="projects">projects</a>
                                                    </div>
                                                    <div className="grid-item" onclick="showhide_menufunction()">
                                                        <a href="#submit-contact" className="btn-1 outer-shadow hover-in-shadow" id="contact">contact</a>
                                                    </div>
                                            </div>

                                </nav>
                            {/* <!-- mobile navigation menu end --> */}
                        </div>
                    </div>
                </header>

                    {/* <!-- header end --> */}
                    {/* <!-- home section start --> */}
                    <section className="home-section section">
                    {/* <!-- effect wrap start --> */}
                    <div className="effect-wrap">
                        <div className="effect effect-1">
                        </div>
                        <div className="effect effect-2">
                        </div>
                        <div className="effect effect-6">
                            <div></div><div></div><div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                    {/* <!-- effect wrap end --> */}
                    <div className="container">
                        <div className="row full-screen align-items-center">
                            <div className="home-text">
                                <h2 id="text-webdev3">
                                <div id="text-webdev"><span style={{color:"black"}}>{this.state.open}</span>Software <span style={{color:"yellow", fontWeight: '800'}}>E</span><span style={{color:"blue", fontWeight: '800'}}>n</span><span style={{color:"green", fontWeight: '800'}}>g</span>ineer<span style={{color:"black"}}>{this.state.close}</span></div>
                                </h2>
                                <p id="text-webdev2">Designer, Data Scientist &</p><br/>
                                <a href="#about" class="btn-1 outer-shadow hover-in-shadow" id="more-about-me">More About Me</a>
                            </div>
                            <div className="home-img">
                                <div className="img-box inner-shadow">
                                    <img src={profile} className="outer-shadow" alt="profile-pic"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--home section end--> */}
                <ImgApp />

                {/* <!--about section start--> */}
                <section className="about-section section" >
                    <div className="about-container" id="about-container-id" >
                        <div className="row">
                            <div className="section-title">
                                <h2 id="about" >About Me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="about-img">
                                <div className="img-box inner-shadow" style={{borderRadius: '50%'}}>
                                    <img src={profile} className="outer-shadow" alt="profile-pic" />
                                </div>
                            
                            </div>
                            <div className="about-info" >
                                <p id='pmain-text-delay'><span> <br/><br/><span id="space">{this.state.space}</span> My name is Vicente a.k.a Vince. I'm a designer,
                                    data scientist and web developer from the Philippines.
                                    </span>
                                        <p id='p1-text-delay'>
                                            My passion is to build anything
                                            related to web development which led me to become a full stack developer.
                                        </p>
                                        <p id='p2-text-delay'>I studied mathematics in college in which I relate the principles I learned
                                            to the world of internet application and computer science.
                                            </p>
                                        <p id='p3-text-delay'>I love learning and experimenting new things on a daily basis
                                            just like learning computer programming and design from online
                                            resources.</p>
                                        <p id='p4-text-delay'>I have been doing web development for a while now.</p>
                                        <p id='p5-text-delay'>And I get to understand the flexibility of this job as I continue developing my skills.</p>
                                        <p id='p6-text-delay'>Because of this, it keeps me motivated whenever I start a new project
                                            that has a lot of curiosity on it. You may take a look at my recent projects on github repositories.</p>
                                </p>
                                
                            </div>		
                        </div>
                    </div>

                </section>
                {/* <!--about section end--> */}
                <h1 className="cert-title" id="cert-title" style={{ textAlign: 'center'}}>Certifications/Virtual Experience</h1>
                
                {/* slideshow certificates */}
                <div>{Slideshow()}</div>

                {/* <!-- projects section start --> */}

                <section className="projects-heading-section" id="projects-heading-section" style={{height: '150px'}}>
                    <span className="projects-sliding">
                        <span className="">PROJECTS</span>
                        <span>-</span>
                        <span className="">PROJECTS</span>
                    </span>

                    <div className="projects-wrapper">
                        <span className="projects-sliding">
                            <span className="">PROJECTS</span>
                            <span>-</span>
                            <span className="">PROJECTS</span>
                        </span>
                    </div>
                </section>

                <section className="projects-section"/>
                    <div className="projects-container">
                        <div className="first-project-container outer-shadow">
                            <p id="say-about-project1" style={{fontSize:"15px"}}>Expense Tracker App tracks every transaction and daily expenses made by a user in a timely manner. <br/>  It has 
                            features like geolocation transaction, expense forecast and data analytics graph API. Network and data security is ensured 
                            to make sure data is stored properly in the database. 
                            The technologies included are: Javascript, Reactjs, HTML/CSS, Expressjs, Nodejs, JSON, API, and MongoDB. </p>
                            
                            <a href="https://github.com/Vince0927" target="_blank"><div className="grid-projects-item" id="grid-projects-item1">Geo Expense Tracker<br/><input type="submit" value="Link to Github" id="submit-project1"  className="btn-1 outer-shadow hover-in-shadow" style={{border: '1px'}}/></div></a>
                        </div>	
                        
                        <div className="second-project-container outer-shadow">
                            <p id="say-about-project2" style={{fontSize:"15px"}}>Business Manager's App is a business management app designed to organize manager's tasks.
                            It has features like general department monitoring, business analytics and employee updates. Network security is ensured
                            to make sure confidential information will not be compromised. 
                            The technologies included are: JS, React, HTML/CSS, Express, Nodejs, JSON, API, and MongoDB. </p>
                            <a href="https://github.com/Vince0927" target="_blank"><div className="grid-projects-item" id="grid-projects-item1">Business Manager's App<br/><input type="submit" value="Link to Github" id="submit-project1"  className="btn-1 outer-shadow hover-in-shadow" style={{border: '1px'}}/></div></a>
                        </div>

                        <div className="third-project-container outer-shadow">
                        <p id="say-about-project3" style={{fontSize:"15px"}}>Scientific Calculator is designed with GUI in mind. You can run this app
                            on your desktop machine without having to connect with the internet browser. It has all the standard functions that you can usually see in the standard commercial scientific calculator.  
                            The main technologies included to create this GUI are: Python programming language and Tkinter which is a python GUI library.</p>
                            <a href="https://github.com/Vince0927" target="_blank"><div className="grid-projects-item" id="grid-projects-item1">Scientific Calculator<br/><input type="submit" value="Link to Github" id="submit-project1"  className="btn-1 outer-shadow hover-in-shadow" style={{border: '1px'}}/></div></a>
                        </div>
                    </div>
                <section/> 

                {/* <!-- projects section end --> */}


                {/* envelope image */}
                <div className="container-zoom-image" id="container-zoom-image">
                    <div className="zoom-image-sample"></div>
                </div>
                


                {/* <!-- contact section start --> */}
                <div className="contact-section-div">
                <section className="contact-section" id="contact-section" />
                    <div className="section-get-in-touch" id='section-get-in-touch'></div>
                    <div className="get-in-touch-text" id="get-in-touch-text"><h1 className="get-in-touch"><span className="G">G</span>et in touch:</h1></div>
                    <div className="contact-section-grid-container">
                        <div className="contact-container">
                            <div className="grid-contact" id="contact-phone">Phone:<br/>(+63)<span> </span>9063065559</div>
                            <div className="grid-contact" id="contact-email">Email:<br/>bachristian143@gmail.com</div>

                            <div className="social-div">Social: <br/>
                                <a href="https://ph.linkedin.com/in/vicente-gumop-as-44489a194" target="_blank" className="social-icons"><FaLinkedin/></a>
                                <a href="https://github.com/Vince0927" target="_blank" className="social-icons"><FaGithub/></a>
                                <a href="https://stackoverflow.com/users/16596431/vincecoder" target="_blank" className="social-icons"><FaStackOverflow/></a>
                            </div>
                        </div>

                        <div className="contact-container2">
                            <form onSubmit={this.handleSubmit} />
   
                            <form/>
                        </div>
                    </div>
                <section/>
                </div>
                {/* <!-- contact section end --> */} 


            <div className="second-email-form">
                <form onSubmit={this.handleSubmit}>        
                    <label>Email<br/>
                    <input type="text" className="email-input" value={this.state.email} data-name="email" onChange={this.onValueChange} /></label>
                    <br/>
                    <label>
                    Subject<br/>
                    <input type="text" className="email-input" value={this.state.subject} data-name="subject" onChange={this.onValueChange} /></label>

                    
                    <h2>Message</h2>
                    <textarea type="text" className="email-input" value={this.state.message} data-name="message" onChange={this.onValueChange} />
                    <br/><br/>
                    <input type="submit" value="Submit"  id="submit-email" className="btn-1 outer-shadow hover-in-shadow" style={{border: '1px'}} />
                </form>

            </div>




                {/* Use browser router to keep UI in sync with url*/}
                <React.StrictMode>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </React.StrictMode>,

                {/* <button onClick={this.buttonFunction}>click</button> */}

                {/* form sample here */}

                {/* <!--GSAP--> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js"></script>

                <script src="main_portfolio.js"></script>
                <script src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"></script>


                {/* <!-- footer section --> */}
                <footer id="my-footer">
                <div id="copyright-id"><p className="copyright-text">&copy; 2021 Vicente's Portfolio</p></div>
                </footer>


            </div>
        );
    }
}


ReactDom.render(<Portfolio />, document.getElementById('root'));





