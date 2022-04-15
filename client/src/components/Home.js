import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import TypeAnimation from 'react-type-animation';
import FadeIn from 'react-fade-in';

function Home(){
    return(
        <div className="home-page-div">
            <TypeAnimation
                className="header-text"
                cursor={true}
                sequence={['Code Bytes']}
                wrapper="h1"
            />
            <FadeIn>
                <div className="description-text">
                    <p>Code Bytes is a simple online code editor that supports 10+ languages. Oh, and the best part is you can have others edit your code, in real-time!</p>
                </div>
                <div className="home-page-button">
                    <Link to='/language-selection'>
                        <Button variant="outline-primary start-button">Get Started</Button>{' '}
                    </Link>     
                </div>
            </FadeIn>
        </div>
    )
}

export default Home;