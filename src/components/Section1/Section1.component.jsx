import React from 'react'
import "./Section1.styles.css"
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import CustomButton from "./../Button/Button.component";
import play from '../../assets/images/play.svg'


const Section1 = () => {
    return (
      <div className='section1-container'>
        <div className='header-container'>
          <div className='header-logo'>BOTSPOT AI</div>
          <ul className='header-navigation'>
            <li>
              <FaPhoneAlt color='white' />
            </li>
            <li>
              <FaSearch color='white' />
            </li>
            <li>
              <GiHamburgerMenu color='white' />
            </li>
          </ul>
        </div>
        <div className='main-container'>
          <div className='main1-container'>
            <div className='content-container'>
              <h1 className='content-header'>THE SOUL OF THE WORLD</h1>
              <h3 className='content-subHeader'>A SIMPLE SOLUTION</h3>
              <div className='content-image' >
                <img src={play}/>
              </div>
              <p className='content-paragraph'>
                For businesses and organizations - you can build communities and
                engage audiences with one easy-to-use mobile app platform.
              </p>
              <div className='button-container'>
                <CustomButton  color='white'>Know More</CustomButton>
                <CustomButton color='white'>Contact Us</CustomButton>
              </div>
            </div>
          </div>
          <div className='main2-container'>
            <div className='content2-holder'>
              <h3 className='content2-header'>Why Choose BOTSPOT AI?</h3>
              <h3 className='content2-subHeader'>We're so glad you asked!</h3>
            </div>
            <div className='button-container2'>
              <CustomButton color='black'>GET STARTED TODAY</CustomButton>
              <CustomButton color='black'>OUR SERVICES</CustomButton>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section1
