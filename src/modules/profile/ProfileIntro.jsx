import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import "./Profile.less";
import bg3 from '../../assets/images/bg3.jpg';

const { Title } = Typography;

const ProfileIntro = ({isTabletOrMobile, isPortrait}) => {

    return(
        <div 
            id='home'
            className='profile-intro-container'
            style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: 'cover',  // Set background image width and height
                backgroundPosition: 'center',  // Center the image within the container
                backgroundRepeat: 'no-repeat',  // Prevent image repetition
                height: isTabletOrMobile&&isPortrait?'60vh':'140vh',  // Container height
            }}
        >
            <div className={isTabletOrMobile?'descriptions-mobile':'descriptions'}>
                <Row>
                    <Col span={12} offset={3}>
                        <Title 
                            className={isTabletOrMobile?'description-text-salutation-mobile' : 'description-text-salutation'}
                            level={5}
                        >
                            Hello! I'm Naveen.
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={3}>
                        <Title 
                            className={isTabletOrMobile?'description-text-description-mobile' : 'description-text-description'} 
                            level={1}
                        >
                            Full Stack Developer
                        </Title>
                    </Col>
                </Row>
                <Row className='short-description'>
                    <Col span={12} offset={3} className='short-description-text'>
                        Dynamic and results-driven Team Lead with over 7 years of
                        experience in architecting and delivering scalable web solutions
                        using React, Django, and Azure.
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default ProfileIntro;