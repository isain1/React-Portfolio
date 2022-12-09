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
        <div>
            <h3>Portfolio</h3>
            <div className='projects'>
                <div className='project-1'>
                    <img src={helloWord} alt='hello word project'/>
                    <p><a href='https://blueangler.github.io/HelloWord/' target="_blank" rel="noreferrer">HelloWord</a> <a href='https://github.com/BlueAngler/HelloWord' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                <div className='project-2'>
                    <img src={gamers} alt='gamers social media'/>
                    <p><a href='sadf'>Gamers</a> <a href='https://github.com/Jack41400/Room-5' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                <div className='project-3'>
                    <img src={weatherApp} alt='project 3'/>
                    <p><a href='https://isain1.github.io/weather-app/' target="_blank" rel="noreferrer">Weather app</a> <a href='https://github.com/isain1/weather-app' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                <div className='project-4'>
                    <img src={scheduler} alt='scheduler application'/>
                    <p><a href='https://isain1.github.io/scheduler/' target="_blank" rel="noreferrer">Work day scheduler</a> <a href='https://github.com/isain1/scheduler' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
                <div className='project-5'>
                    <img src={generatedReadme} alt='generated readme'/>
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