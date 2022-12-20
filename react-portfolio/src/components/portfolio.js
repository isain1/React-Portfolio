import React from 'react';

import helloWord from '../HelloWord-screenshot.PNG';
import gamers from '../gamers-screenshot.PNG';
import weatherApp from '../Weather-app-screenshot.PNG';
import scheduler from '../scheduler-screenshot.png';
import generatedReadme from '../generated-Readme-screenshot.PNG';
//import helloWord from '../HelloWord-screenshot.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Portfolio() {
    return (
        <div className='portfoliopage'>
            <h3>Portfolio</h3>
            <div className='projects'>
                <div className='project-container'>
                    <img src={helloWord} className="projectimages" alt='hello word project'/>
                    <p><a href='https://blueangler.github.io/HelloWord/' target="_blank" rel="noreferrer">HelloWord</a> <a href='https://github.com/BlueAngler/HelloWord' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                <div className='project-container'>
                    <img src={gamers} className="projectimages" alt='gamers social media'/>
                    <p><a href='sadf'>Gamers</a> <a href='https://github.com/Jack41400/Room-5' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                <div className='project-container'>
                    <img src={weatherApp} className="projectimages" alt='project 3'/>
                    <p><a href='https://isain1.github.io/weather-app/' target="_blank" rel="noreferrer">Weather app</a> <a href='https://github.com/isain1/weather-app' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                <div className='project-container'>
                    <img src={scheduler} className="projectimages" alt='scheduler application'/>
                    <p><a href='https://isain1.github.io/scheduler/' target="_blank" rel="noreferrer">Work day scheduler</a> <a href='https://github.com/isain1/scheduler' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                <div className='project-container'>
                    <img src={generatedReadme} className="projectimages" alt='generated readme'/>
                    <p><a href='https://drive.google.com/file/d/1arvhwKSB-9rhoh8lC9l3xj-lD9OwWWaP/view?usp=share_link' target="_blank" rel="noreferrer">Readme.md generator</a> <a href='https://github.com/isain1/Readme-generator' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                {/*<div className='project-6'>
                    <img src='' alt='project 6'/>
                    <p><a href='sadf'>Project 6</a> <a href='sdf'><FontAwesomeIcon icon={faGithub} /></a></p>
                </div> */}
            </div>
        </div>
    );
};