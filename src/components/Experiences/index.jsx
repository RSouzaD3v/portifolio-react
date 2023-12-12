import './styles.css';
import htmlIcon from './svg/html.svg';
import css from './svg/css.svg';
import js from './svg/js.svg';
import php from './svg/php.svg';
import python from './svg/python.svg';
import java from './svg/java.svg';
import banco from './svg/database.svg';
import hacker from './svg/hacker.svg';
import rea from './svg/react.svg';
import React from 'react';

export const Experiences = () => {

    return(
        <section className='experiences' translate='no'>
            <div className='col-1'>
                <div>
                    <img src={htmlIcon} alt="" />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={php} alt="" />
                    <p>PHP</p>
                </div>
                <div>
                    <img src={banco} alt="" />
                    <p>Database</p>
                </div>
            </div>

            <div className='col-1'>
                <div>
                    <img src={css} alt="" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src={python} alt="" />
                    <p>Python</p>
                </div>
                <div>
                    <img src={hacker} alt="" />
                    <p>Ethical Hacker</p>
                </div>
            </div>

            <div className='col-1'>
                <div>
                    <img src={js} alt="" />
                    <p>Javascript</p>
                </div>
                <div>
                    <img src={java} alt="" />
                    <p>Java</p>
                </div>
                <div>
                    <img src={rea} alt="" />
                    <p>React Js</p>
                </div>
            </div>
        </section>
    );
}
