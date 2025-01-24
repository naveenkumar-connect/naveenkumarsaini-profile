import React from 'react';
import { 
    Row, 
    Col,  
    Divider,
    Card,
    Image
} from 'antd';
import "./Profile.less";
import js from '../../assets/images/icons/js.png';
import react from '../../assets/images/icons/react.png';
import python from '../../assets/images/icons/python.png';
import django from '../../assets/images/icons/django.png';
import azure from '../../assets/images/icons/azure.png';
import restful from '../../assets/images/icons/restful.png';
import sql from '../../assets/images/icons/sql-server.png';
import git from '../../assets/images/icons/git.png';
import dsa from '../../assets/images/icons/dsa.png';
import figma from '../../assets/images/icons/figma.png';


const CustomCard = ({title, subtitle, image}) => {
    return(
        <Card
            className='about-card'
            bordered={image?false:true}
        >
            <div className='about-card-title'>
                {
                    title || 
                    <Image
                        src={image}
                        preview={false}
                        width='80px'
                        height='80px'
                    />
                }
            </div>
            <div className='about-card-subtitle'>{subtitle}</div>
        </Card>
    )
}

const ProfileAbout = ({isTabletOrMobile}) => {

    return(
        <div 
            className={isTabletOrMobile?'profile-about-container-mobile':'profile-about-container-computer'}
            id='about'
        >
            <div className="section-title">ABOUT <span>ME</span></div>
            <Row className='about-sections'>
                <Col span={8} offset={3} className='personal-info'>
                    <div className='about-section-title'>personal infos</div>
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
                            Age:
                        </Col>
                        <Col span={18} className='about-value'>
                            31
                        </Col>
                    </Row>
                    <Row className='label-value-rows'>
                        <Col span={6} className='about-label'>
                            Nationality:
                        </Col>
                        <Col span={18} className='about-value'>
                            India
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
                </Col>
                <Col span={8} offset={2} className='experience'>
                    <CustomCard 
                        title = '7+'
                        subtitle = 'Years of Experience'
                    />
                    <CustomCard 
                        title = 'Hindi, English'
                        subtitle = 'Languages'
                    />
                </Col>
            </Row>

            <Row>
                <Col 
                    span={18} 
                    offset={3}
                >
                    <Divider />
                </Col>
            </Row>

            <Row>
                <Col 
                    span={18} 
                    offset={3}
                >
                    <div className='about-section-title'>my skills</div>
                    <div className='skill-cards'>
                        <CustomCard 
                            image = {js}
                            subtitle = 'JavaScript'
                        />
                        <CustomCard 
                            image = {react}
                            subtitle = 'React'
                        />
                        <CustomCard 
                            image = {python}
                            subtitle = 'Python'
                        />
                        <CustomCard 
                            image = {django}
                            subtitle = 'Django'
                        />
                        <CustomCard 
                            image = {azure}
                            subtitle = 'Azure'
                        />
                        <CustomCard 
                            image = {restful}
                            subtitle = 'Rest API'
                        />
                        <CustomCard 
                            image = {sql}
                            subtitle = 'MS SQL'
                        />
                        <CustomCard 
                            image = {git}
                            subtitle = 'Git'
                        />
                        <CustomCard 
                            image = {dsa}
                            subtitle = 'Data Structures and Algorithms'
                        />
                        <CustomCard 
                            image = {figma}
                            subtitle = 'Figma'
                        />
                    </div>
                </Col>                
            </Row>

            <Row>
                <Col 
                    span={18} 
                    offset={3}
                >
                    <Divider />
                </Col>
            </Row>

        </div>

    )
}

export default ProfileAbout;