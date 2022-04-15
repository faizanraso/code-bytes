import React from "react";
import {useNavigate} from "react-router-dom";
import { Button } from 'react-bootstrap';
import FadeIn from "react-fade-in/lib/FadeIn";
import {v4 as uuidv4} from 'uuid';


function LanguageSelection(){

    const navigate = useNavigate();
    const languages = ["Python", "JavaScript", "Java", "C", "C++", "Ruby", "R", "PHP", "HTML", "Go", "SQL", "Rust" ]

    function openEditor(event){
        navigate(`/editor/${event.target.innerHTML}/${uuidv4()}`);
    }

    return(
        <div className="language-selection-page">
            <FadeIn>
                <div className="language-selection-header">
                    <h4>Select a Language to Get Started</h4>
                </div>
                <div className="language-buttons-div">
                    {languages.map(language => <Button onClick={openEditor} key={language} variant="outline-primary language-button">{language}</Button>)}
                </div>
            </FadeIn>
        </div>
    )
}

export default LanguageSelection;