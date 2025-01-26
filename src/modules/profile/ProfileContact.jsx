import React from 'react';
import { Row, Col, Image, Card, Button } from 'antd';
import "./Profile.less";
import address from '../../assets/images/icons/address.png';
import email from '../../assets/images/icons/email.png';
import call from '../../assets/images/icons/call.png';
import linkedin from '../../assets/images/icons/linkedin.png';

const handleRedirect = () => {
    window.open("https://www.linkedin.com/in/naveen-kumar-saini/", "_blank"); 
};

const ContactCard = ({icon, label, value}) => {
    return(
        <Card className='contact-card' bordered={false}>
            <div className='contact-card-row'>
                <div lassName='contact-card-icon'>
                    <Image
                        src={icon}
                        preview={false}
                        width='36px'
                        height='36px'
                    />
                </div>
                <div className='contact-card-text'>
                    <p className='contact-card-label'>{label}</p>
                    <p className='contact-card-value'>{value}</p>
                </div>
            </div>
        </Card>
    )
}

const ProfileContact = ({isTabletOrMobile, isPortrait}) => {

    return(
        <div 
            id='contact'
            className='profile-contact-container'
        >
            <div className="section-title">Contact <span>Me</span></div>
            <Row className='contact-sections'>
                <Col span={18} offset={3} className='contact-deatils'>
                    <div className='contact-description'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</div>
                    <div className='contact-cards'>
                        <ContactCard 
                            icon={address}
                            label={'City'}
                            value={'Pune, Maharashtra'}
                        />

                        <ContactCard 
                            icon={linkedin}
                            label={'Linked In'}
                            value={
                                <Button 
                                    type="link" 
                                    onClick={handleRedirect}
                                    className='linked-in-button'
                                >
                                    {"linkedin.com/in/naveen-kumar-saini/"}
                                </Button>
                            }
                        />
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default ProfileContact;