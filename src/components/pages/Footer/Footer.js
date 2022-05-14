import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import Btn from '../../Button/Btn';
import MaterialIcon from "material-icons-react";


function Footer() {
  return (
<div className="footer-container-main">
    <div className="our-value">
            <div className="value-item quality">
                <div className="icon">
                <MaterialIcon icon="high_quality" size="32px" color="#222222" />

                </div>
                <div className="value">
                    <p className="value-title">High Quality</p>
                    <p className="value-description">crafted from top materials</p>
                </div>
            </div>

            <div className="value-item warranty">
                <div className="icon">
                <MaterialIcon icon="volunteer_activism" size="32px" color="#222222" />

                </div>
                <div className="value">
                    <p className="value-title">Warrany Protection</p>
                    <p className="value-description">Over 2 years</p>
                </div>
            </div>
            <div className="value-item free-shipping">
                <div className="icon">
                <MaterialIcon icon="local_shipping" size="32px" color="#222222" />

                </div>
                <div className="value">
                    <p className="value-title">Free Shipping</p>
                    <p className="value-description">Order over 150 $</p>
                </div>
            </div>
            <div className="value-item support">
<div className="icon">

                <MaterialIcon icon="event_available" size="32px" color="#222222" />
</div>
                <div className="value">
                    <p className="value-title">24 / 7 Support</p>
                    <p className="value-description">Dedicated support</p>
                </div>
            </div>
        </div>
    <div className='footer-container'>

      <section className='footer-subscription'>

        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Btn />
            {/* <Button buttonStyle='btn--outline'>Subscribe</Button> */}
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              NewBrand
            </Link>
          </div>
          <small className='website-rights'>NewBrand © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Footer;
