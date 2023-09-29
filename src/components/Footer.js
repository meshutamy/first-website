import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram'; // Correct import statement
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />{/* Use the imported icon component */}
      </div>
      <p> &copy; meshutechpizz.com</p>
    </div>
  );
}

export default Footer;
