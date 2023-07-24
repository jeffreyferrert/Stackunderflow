import './Landing.css';
import React, { useState } from 'react';
import logo from "../assets/logo-stackoverflow.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Landing() {

    const [wordChanging, setwordChanging] = useState("developer");

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const arrWords = ["developer", "data scientist", "system admin", "mobile developer", "game developer"]

    setTimeout(() => {
        setwordChanging(arrWords[randomIntFromInterval(0, 4)])
    }, 3000);

    return (
        <div className='main-container'>

            <div className='container'>

                <div className="container-p1">

                    <div className='container-p1-a'>
                        <i class="fa-solid fa-magnifying-glass fa-2xl" style={{ color: "#f2740d", }} />
                        Find the best answer to your technical question, help others answer theirs
                        <br />
                        <button className='btn-p1-a'>
                            Join the community
                        </button><br />
                        <div className='pre-search-content'> 
                            or
                            <Link to="/" className='search-content' > search content</Link>
                        </div>
                    </div>

                    <div className='container-p1-b'>
                        <i class="fa-solid fa-lock fa-2xl" style={{ color: "#0a95ff", }} />                        Want a secure, private space for your technical knowledge?
                        <br />
                        <button className='btn-p1-b'>
                            Discover Teams
                        </button>
                    </div>

                </div>

                <div className="container-p2">
                    Every
                    <span className='changing-text'>
                        {wordChanging}
                    </span>
                    has a
                    <br />
                    tab open to Stack Overflow
                </div>

                <div className="container-p3">
                    <div className='big-container'>
                        100+ million
                        <div className='small-container'>
                            monthly visitors to Stack Overflow & Stack Exchange
                        </div>
                    </div>

                    <div className='big-container'>
                        45.1+ billion
                        <div className='small-container'>
                            Times a developer got help since 2008
                        </div>
                    </div>

                    <div className='big-container'>
                        191% ROI
                        <div className='small-container'>
                            from companies using Stack Overflow for Teams
                        </div>
                    </div>

                    <div className='big-container'>
                        5,000+
                        <div className='small-container'>
                            Stack Overflow for Teams instances active every day
                        </div>
                    </div>

                </div>

                <div className="container-p4">

                    <div className="container-p4-a">
                        <img className="logo-img" src={logo} alt="so_icon" />
                        <img className="other-img" src={logo} alt="so_icon" />
                        <div className='big-text'>
                            A public platform building the definitive collection of coding questions & answers
                        </div>
                        <div className='small-text'>
                            A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
                        </div>
                        <button className=''>
                            Join the community
                        </button>
                    </div>

                    <div className="container-p4-b">
                        <img className="logo-img" src={logo} alt="so_icon" />
                        <img className="other-img" src={logo} alt="so_icon" />
                        <div className='big-text'>
                            A private collaboration & knowledge sharing SaaS platform for companies
                        </div>
                        <div className='small-text'>
                            A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.
                        </div>
                        <button className=''>
                            For Large organizations
                        </button>
                        <button className=''>
                            For small items
                        </button>
                    </div>

                </div>


                <div className="container-p5">
                    {/* HOW TO DO THE CARROUSEL??? */}
                </div>

            </div>

        </div>
    );
};

export default Landing