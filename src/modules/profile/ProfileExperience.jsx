import React from 'react';
import { Row, Col, Card, Space, Image } from 'antd';
import "./Profile.less";
import suitcase from '../../assets/images/icons/suitcase.png';
import fractal from '../../assets/images/icons/fractal.png';
import capgemini from '../../assets/images/icons/capgemini.png';
import lead from '../../assets/images/icons/lead.png';
import coding from '../../assets/images/icons/coding.png';
import azureblack from '../../assets/images/icons/azureblack.png';
import performance from '../../assets/images/icons/performance.png';


const ExperienceCard = ({
    designation, 
    companylogo, 
    startDate, 
    endDate,
    highlights
}) => {
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
                <Space direction='vertical' className='experience-content'>
                    <div className='experience-designation'>{designation}</div>
                    <Image
                        src={companylogo}
                        preview={false}
                        height='24px'
                    />
                    <div className='experience-card-tenure'>{`${startDate} - ${endDate}`}</div>
                    <Space direction='vertical' className='highlights-wrapper'>
                        <div className='highlights-text'>Highlights</div>
                        {
                            highlights.map(highlight=>(
                                <div className='higlights-bullet'>
                                    <div className='higlights-bullet-image'>
                                        <Image
                                            src={highlight.icon}
                                            preview={false}
                                            width='24px'
                                            height='24px'
                                        />
                                    </div>
                                    {
                                        highlight.text
                                    }
                                </div>
                            ))
                        }
                    </Space>
                </Space>
            </Space>
        </Card>
    )
}

const ProfileExperience = ({isTabletOrMobile}) => {

    return(
        <div 
            id='experience'
            className='profile-experience-container'
        >
            <div className="section-title"><span>My</span> Experience</div>
            <Row>
                <Col 
                    span={18} 
                    offset={3}
                >
                    <div className='experience-cards'>
                        <ExperienceCard 
                            designation={'Architect | Team Lead | Full Stack Developer'}
                            companylogo={fractal}
                            startDate={'October 2024'}
                            endDate={'Present'}
                            highlights={[
                                {
                                    icon: lead,
                                    text: 'Led a team of 10 members to perform the end-to-end implementation of a highly scalable and maintainable system.'
                                },
                                {
                                    icon: coding,
                                    text: 'Tech-stack used: React, Django and SQL Server.'
                                },
                                {
                                    icon: azureblack,
                                    text: 'Cloud and services used: Azure, App Service, SQL Server, Storage, Key Vault and Entra ID. Implemented LDAP integration for enhanced security, and optimized the system for scalability, supporting a 30% increase in user adoption within the first three months post-launch.'
                                },
                                {
                                    icon: performance,
                                    text: 'Ensured operational efficiency by reducing deployment times by 33% and enhancing system reliability, achieving 99.9% uptime.'
                                }
                            ]}
                        />
                        <ExperienceCard 
                            designation={'Senior Engineer | Team Lead | Senior Full Stack Developer'}
                            companylogo={fractal}
                            startDate={'April 2023'}
                            endDate={'September 2024'}
                            highlights={[]}
                        />
                        <ExperienceCard 
                            designation={'Engineer | Full Stack Developer'}
                            companylogo={fractal}
                            startDate={'April 2021'}
                            endDate={'March 2023'}
                            highlights={[]}
                        />
                        <ExperienceCard 
                            designation={'Associate Consultant'}
                            companylogo={capgemini}
                            startDate={'January 2020'}
                            endDate={'April 2021'}
                            highlights={[]}
                        />
                        <ExperienceCard 
                            designation={'Senior Analyst and Software Engineer'}
                            companylogo={capgemini}
                            startDate={'January 2019'}
                            endDate={'December 2019'}
                            highlights={[]}
                        />
                        <ExperienceCard 
                            designation={'Analyst and Software Engineer'}
                            companylogo={capgemini}
                            startDate={'December 2017'}
                            endDate={'December 2018'}
                            highlights={[]}
                        />
                    </div>
                </Col>                
            </Row>
        </div>

    )
}

export default ProfileExperience;