import React from 'react';

export default function Resume() {
    return (
        <div className='resumepage'>
            <h3 className='resumeheader'>Resume</h3>
            <p>Download my <a href="../isain-ibarra-resume.pdf" download>resume</a></p>
            <div className='technologies'>
                <h4>Front end technologies used:</h4>
                <ul className='lists'>
                    <li>HTML</li>
                    <li>css</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>JQuery</li>
                </ul>
                <h4>Back end technologies used:</h4>
                <ul className='lists'>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>APIs</li>
                </ul>
            </div>    
        </div>
    );
};

