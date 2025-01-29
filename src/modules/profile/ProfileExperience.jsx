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
import box from '../../assets/images/icons/box.png';
import analytics from '../../assets/images/icons/analytics.png';
import scalable from '../../assets/images/icons/scalable.png';
import categories from '../../assets/images/icons/categories.png';
import dashboard from '../../assets/images/icons/dashboard.png';
import calculate from '../../assets/images/icons/calculate.png';


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
                                <div className='higlights-bullet' key={highlight.text}>
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
                            highlights={[
                                {
                                    icon: lead,
                                    text: 'Successfully led cross-functional team of 8 members including developers, DevOps engineers, and QA professionals, delivering seamless end-to-end implementation for two complex projects within tight deadlines and exceeding client expectations.'
                                },
                                {
                                    icon: coding,
                                    text: 'Built an intuitive React-based data interaction interface supported by a Django/Python backend, enhancing user experience by 40%.'
                                },
                                {
                                    icon: azureblack,
                                    text: 'Implemented secure integrations with Azure App Service, LDAP, Azure Key Vault, Azure storage, Azure function app and Azure SQL Server, ensuring compliance and scalability.'
                                },
                                {
                                    icon: performance,
                                    text: 'Performance Improvement: Reducing data processing times by 35%, improved operational efficiency by 25% and reduced defects by 30%.'
                                },
                                {
                                    icon: box,
                                    text: 'Other Libraries and Packages used: Ant Design, Axios, Redux, React Router, Zest, Enzyme and Pytest.'
                                }
                            ]}
                        />
                        <ExperienceCard 
                            designation={'Engineer | Full Stack Developer'}
                            companylogo={fractal}
                            startDate={'April 2021'}
                            endDate={'March 2023'}
                            highlights={[
                                {
                                    icon: analytics,
                                    text: 'Designed and delivered a robust web platform for seamless data collection and analysis, enhancing decision-making efficiency by a significant margin.'
                                },
                                {
                                    icon: coding,
                                    text: 'Tech-stack used: React, Django and SQL Server.'
                                },
                                {
                                    icon: azureblack,
                                    text: 'Cloud and services used: Azure, App Service, SQL Server, Key Vault. Implemented LDAP integration for enhanced security and user autorization.'
                                },
                                {
                                    icon: performance,
                                    text: 'Enabled concurrent usage by multiple users, boosting team productivity and collaboration across departments.'
                                },
                                {
                                    icon: scalable,
                                    text: 'Built with scalability as a core principle, allowing for seamless integration of future modules and features to adapt to evolving.'
                                }
                            ]}
                        />
                        <ExperienceCard 
                            designation={'Associate Consultant'}
                            companylogo={capgemini}
                            startDate={'January 2020'}
                            endDate={'April 2021'}
                            highlights={[
                                {
                                    icon: categories,
                                    text: 'Developed interactive application for anonymous employee feedback to handle up to 1000 plus user base.'
                                },
                                {
                                    icon: coding,
                                    text: 'Tech-stack used: React, Django and SQL Server.'
                                }
                            ]}
                        />
                        <ExperienceCard 
                            designation={'Senior Analyst and Software Engineer'}
                            companylogo={capgemini}
                            startDate={'January 2019'}
                            endDate={'December 2019'}
                            highlights={[
                                {
                                    icon: dashboard,
                                    text: 'Developed Network Performance Report Manager Dashboard.'
                                },
                                {
                                    icon: coding,
                                    text: 'Tech-stack used: React and Django.'
                                }
                            ]}
                        />
                        <ExperienceCard 
                            designation={'Analyst and Software Engineer'}
                            companylogo={capgemini}
                            startDate={'December 2017'}
                            endDate={'December 2018'}
                            highlights={[
                                {
                                    icon: calculate,
                                    text: 'Created reusable functions and components for field validations.'
                                },
                                {
                                    icon: coding,
                                    text: 'Tech-stack used: React and Django'
                                }
                            ]}
                        />
                    </div>
                </Col>                
            </Row>
        </div>

    )
}

export default ProfileExperience;