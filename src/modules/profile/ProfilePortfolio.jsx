import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import "./Profile.less";

const { Title } = Typography;

const ProfileIntro = ({isTabletOrMobile}) => {

    return(
        <div 
            id='portfolio'
            className='profile-portfolio-container'
        >
            <div className="section-title">Portfolio</div>
            
        </div>

    )
}

export default ProfileIntro;