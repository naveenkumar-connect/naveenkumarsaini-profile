import React from 'react';
import { Row, Col, Typography, Image, Space } from 'antd';
import "./Profile.less";
import bg5 from '../../assets/images/bg5.JPG';
import musicalNote from '../../assets/images/musical-note.png';
import travelLuggage from '../../assets/images/travel-luggage.png';
import drive from '../../assets/images/drive.png';
import movie from '../../assets/images/movie.png';

const { Title, Text } = Typography;

const ProfileAbout = () => {

    return(
        <div 
            className='profile-about-container'
            id='about'
        >
            <Row>
                <Col span={8} offset={3} className='about-image'>
                    <Image
                        src={bg5}
                        preview={false}
                        className='content-image'
                    />
                </Col>
                <Col span={10} className='about-description'>
                    <Title level={2} className="about-me">About Me</Title>
                    <Text type="secondary" className="about-text">I am a Full Stack Developer with expertise in React, Django, SQL Server, and Azure. With a strong background in both front-end and back-end development, I enjoy building scalable web applications and solving complex technical challenges. As a Tech Team Lead, I thrive in mentoring teams and driving projects from concept to completion with a focus on clean architecture and innovative solutions.</Text>

                    <Row className='label-value-row-1 label-value-rows'>
                        <Col span={6} className='about-label'>
                            Name:
                        </Col>
                        <Col span={18} className='about-value'>
                            Naveen Kumar Saini
                        </Col>
                    </Row>
                    <Row className='label-value-rows'>
                        <Col span={6} className='about-label'>
                            Date of birth:
                        </Col>
                        <Col span={18} className='about-value'>
                            Oct 01, 1993
                        </Col>
                    </Row>
                    <Row className='label-value-rows'>
                        <Col span={6} className='about-label'>
                            Address:
                        </Col>
                        <Col span={18} className='about-value'>
                            Pune, Maharashtra
                        </Col>
                    </Row>
                    <Row className='label-value-rows'>
                        <Col span={6} className='about-label'>
                            Email:
                        </Col>
                        <Col span={18} className='about-value'>
                            ------------@gmail.com
                        </Col>
                    </Row>
                    <Row className='label-value-rows'>
                        <Col span={6} className='about-label'>
                            Phone:
                        </Col>
                        <Col span={18} className='about-value'>
                            +91 ----- -----
                        </Col>
                    </Row>

                    <Space className='hobbies' direction='vertical'>
                        <Space>
                            <Image
                                src={musicalNote}
                                preview={false}
                                width='32px'
                                height='32px'
                                className='footer-image'
                            /> Music
                        </Space>
                        
                        <Space>
                            <Image
                                src={travelLuggage}
                                preview={false}
                                width='32px'
                                height='32px'
                                className='footer-image'
                            /> Travelling
                        </Space>
                        
                        <Space>
                            <Image
                                src={drive}
                                preview={false}
                                width='32px'
                                height='32px'
                                className='footer-image'
                            /> Driving
                        </Space>

                        <Space>
                            <Image
                                src={movie}
                                preview={false}
                                width='32px'
                                height='32px'
                                className='footer-image'
                            /> Movies
                        </Space>
                    </Space>
                </Col>
            </Row>
        </div>

    )
}

export default ProfileAbout;