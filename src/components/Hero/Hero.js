import React from 'react';
import styles from './Hero.module.css';
import heroImage from './hero-image.jpg';

function Hero() {
  return (
    <div className= {styles.herocontainer}>
      <div className={styles.herotext}>
        <h1>Mahendra Singh Dhoni</h1>
        <p>Mahendra Singh Dhoni (born 7 July 1981), commonly known as MS Dhoni, is a former Indian cricketer and captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014, who plays as a Wicket-keeper-Batsman.</p>
        <button className={styles.herobutton}>Learn More</button>
      </div>
      <div className={styles.heroimage}>
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;