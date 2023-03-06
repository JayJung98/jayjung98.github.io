import React from 'react';
import '../css/Profile.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Portfolio from '@mui/icons-material/Newspaper';
import EmailIcon from '@mui/icons-material/Email';

function profile() {
    return (
        <div className='profile'>
            <div className='pro_menu'>
                <GitHubIcon className="icon"/>
                <a className='text' href="https://github.com/jfloww">
                    GitHub
                </a>
                <LinkedInIcon className='icon'/>
                <a className='text' href="https://www.linkedin.com/in/jfloww/">
                    LinkedIn
                </a>
                <Portfolio className='icon'/>
                <a className='text' href="https://www.jfloww.com">
                    Portfolio
                </a>
                <EmailIcon className='icon'/>
                <a className='text' href="/contact">
                    Contact
                </a>
            </div>
        </div>
    );
}
export default profile;