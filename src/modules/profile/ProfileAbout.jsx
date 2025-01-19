import React from 'react';
import { 
    Row, 
    Col,  
    Divider,
    Card,
    Image,
    Space
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
import suitcase from '../../assets/images/icons/suitcase.png';
import fractal from '../../assets/images/icons/fractal.png';
import capgemini from '../../assets/images/icons/capgemini.png';


const ExperienceCard = ({designation, companylogo, startDate, endDate}) => {
    return(
        <Card
            className='experience-card'
            bordered={true}
        >
            <Space size={'large'}>
                <Image
                    src={suitcase}
                    preview={false}
                    width='48px'
                    height='48px'
                />
                <Space direction='vertical'>
                    <div className='experience-designation'>{designation}</div>
                    <Image
                        src={companylogo}
                        preview={false}
                        height='24px'
                    />
                    <div className='experience-card-tenure'>{`${startDate} - ${endDate}`}</div>
                </Space>
            </Space>
        </Card>
    )
}

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

            <Row>
                <Col 
                    span={18} 
                    offset={3}
                >
                    <div className='about-section-title'>experience</div>
                    <div className='experience-cards'>
                        <ExperienceCard 
                            designation={'Architect | Team Lead | Full Stack Developer'}
                            companylogo={fractal}
                            startDate={'October 2024'}
                            endDate={'Present'}
                        />
                        <ExperienceCard 
                            designation={'Senior Engineer | Team Lead | Senior Full Stack Developer'}
                            companylogo={fractal}
                            startDate={'April 2023'}
                            endDate={'September 2024'}
                        />
                        <ExperienceCard 
                            designation={'Engineer | Full Stack Developer'}
                            companylogo={fractal}
                            startDate={'April 2021'}
                            endDate={'March 2023'}
                        />
                        <ExperienceCard 
                            designation={'Associate Consultant'}
                            companylogo={capgemini}
                            startDate={'January 2020'}
                            endDate={'April 2021'}
                        />
                        <ExperienceCard 
                            designation={'Senior Analyst and Software Engineer'}
                            companylogo={capgemini}
                            startDate={'January 2019'}
                            endDate={'December 2019'}
                        />
                        <ExperienceCard 
                            designation={'Analyst and Software Engineer'}
                            companylogo={capgemini}
                            startDate={'December 2017'}
                            endDate={'December 2018'}
                        />
                    </div>
                </Col>                
            </Row>

        </div>

    )
}

export default ProfileAbout;