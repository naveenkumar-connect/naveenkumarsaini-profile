import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import "./Profile.less";
import bg3 from '../../assets/images/bg3.jpg';

const { Title } = Typography;

const ProfileIntro = ({isTabletOrMobile}) => {

    return(
        <div 
            id='home'
            className='profile-intro-container'
            style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: 'cover',  // Set background image width and height
                backgroundPosition: 'center',  // Center the image within the container
                backgroundRepeat: 'no-repeat',  // Prevent image repetition
                height: isTabletOrMobile?'60vh':'140vh',  // Container height
            }}
        >
            <div className='descriptions'>
                <Row>
                    <Col span={12} offset={3}>
                        <Title 
                            className={isTabletOrMobile?'description-text-salutation-mobile' : 'description-text-salutation'}
                            level={5}
                        >
                            Hello! This is Naveen
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
                <Row className='descriptions-buttons'>
                    <Col span={12} offset={3}>
                        <Button type="primary" className='download-cv-button'>Downlaod CV</Button>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default ProfileIntro;