import React from 'react';
import placeholder from '../placeholder-avatar.png';

export default function About() {
    return (
        <div className='aboutpage'>
            <h3 className='abouttitle'>About me</h3>
            <div  className='aboutme'>
                <img src={placeholder} className="avatarimage" alt='Placeholder profile avatar'/>
                <p className='aboutbio'>
                    Hello, my name is Isain Ibarra. I am an aspiring front end web developer currently enrolled in a full stack web development cooding bootcamo at Michigan State University. Over the Last few months I have worked on multiple projects that heavily incorporate technologies and topics relevant in full stack web development such as HTML, CSS, Javascript (ES5 and ES6), NodeJs, ExpressJs, MySQL, MongoDB, and ReactJs. My goal after completing this bootcamp is to continue refining my skills in front end ttopics in hopes of finding a job as a front end web developer. 
                </p>
            </div>
            
        </div>
    );
};
