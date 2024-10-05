import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout, Anchor, theme, Row, Col, Space, Image, Drawer } from 'antd';
import { XOutlined, InstagramOutlined, LinkedinOutlined, MenuOutlined } from '@ant-design/icons';
import ProfileIntro from './ProfileIntro';
import ProfileAbout from './ProfileAbout';
import "./Profile.less";
import musicalNote from '../../assets/images/musical-note.png';
import travelLuggage from '../../assets/images/travel-luggage.png';
import drive from '../../assets/images/drive.png';
import movie from '../../assets/images/movie.png';

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: 'home',
        href: '#home',
        title: 'Home',
    },
    {
        key: 'about',
        href: '#about',
        title: 'About',
    },
    {
        key: 'contact',
        href: '#contact',
        title: 'Contact',
    }
];

const contentStyle = {
    padding: '0 0'
};

const Profile = () => {

    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerColorRequired, setHeaderColorRequired] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        const viewportHeight = window.innerHeight;
        setHeaderColorRequired(scrollPosition>viewportHeight/2);
    }, [scrollPosition]);

    const showDrawer = () => {
        setOpenDrawer(true);
    };
    const onDrawerClose = () => {
        setOpenDrawer(false);
    };

    return(
        <Layout>
            <Drawer 
                onClose={onDrawerClose} 
                open={openDrawer}
                width={'150px'}
                className='custom-drawer'
            >
                <Anchor
                    defaultSelectedKeys={['home']}
                    items={items}
                    className='header-anchor'
                    onClick={onDrawerClose}
                />
            </Drawer>
            <Header
                className='profile-header'
                style={{
                    background: headerColorRequired?'rgba(255, 255, 255, 0.9)':'rgba(255, 255, 255, 0.3)'
                }}
            >
                <Row>
                    <Col span={8} offset={3} className='header-col1'>
                        <span 
                            className={isTabletOrMobile?'header-profile-name-mobile':'header-profile-name-computer'}
                        >
                            Naveen Kumar Saini.
                        </span>
                    </Col>
                    <Col span={8} offset={2} className='header-col2'>
                        {
                            isTabletOrMobile && !openDrawer &&
                                <MenuOutlined onClick={showDrawer}/>
                        }
                        {
                            !isTabletOrMobile &&
                            <Anchor
                                direction="horizontal"
                                defaultSelectedKeys={['home']}
                                items={items}
                                className='header-anchor'
                            />
                        }  
                    </Col>
                </Row>
            </Header>
            <Content
                style={contentStyle}
            >
                <ProfileIntro 
                    isTabletOrMobile={isTabletOrMobile} 
                    isPortrait={isPortrait}
                />
                <ProfileAbout isTabletOrMobile={isTabletOrMobile} />
            </Content>
            <Footer
                className='profile-footer'
                id='contact'
            >
                {"2024 Naveen Kumar Saini"}
                <Space>
                    <XOutlined className='social-icons'/>
                    <InstagramOutlined className='social-icons'/>
                    <LinkedinOutlined className='social-icons'/>
                </Space>
                <Space direction='vertical' className='footer-external-resources'>
                    External Resources Used
                    <Space>
                        <div className='footer-image-shell'>
                            <Image
                                src={musicalNote}
                                preview={false}
                                width='16px'
                                height='16px'
                                className='footer-image'
                            />
                        </div>
                        <a href="https://www.flaticon.com/free-icons/musical-note" title="musical note icons">Musical note icons created by Freepik - Flaticon</a>
                    </Space>
                    <Space>
                        <div className='footer-image-shell'>
                            <Image
                                src={travelLuggage}
                                preview={false}
                                width='16px'
                                height='16px'
                                className='footer-image'
                            />
                        </div>
                        <a href="https://www.flaticon.com/free-icons/travel" title="travel icons">Travel icons created by Freepik - Flaticon</a>
                    </Space>
                    <Space>
                        <div className='footer-image-shell'>
                            <Image
                                src={drive}
                                preview={false}
                                width='16px'
                                height='16px'
                                className='footer-image'
                            />
                        </div>
                        <a href="https://www.flaticon.com/free-icons/test-drive" title="test drive icons">Test drive icons created by Mayor Icons - Flaticon</a>
                    </Space>
                    <Space>
                        <div className='footer-image-shell'>
                            <Image
                                src={movie}
                                preview={false}
                                width='16px'
                                height='16px'
                                className='footer-image'
                            />
                        </div>
                        <a href="https://www.flaticon.com/free-icons/video" title="video icons">Video icons created by Freepik - Flaticon</a>
                    </Space>
                </Space>
                
                <Space direction='vertical' className='device-details' size={0}>
                    {isDesktopOrLaptop && <p>Device Type: desktop or laptop</p>}
                    {isBigScreen && <p>Device Size: Large</p>}
                    {isTabletOrMobile && <p>Device Type: tablet or mobile phone</p>}
                    <p>Orientation: {isPortrait ? 'portrait' : 'landscape'}</p>
                    {isRetina && <p>Retina</p>}
                </Space>
                
            </Footer>
        </Layout>

    )
}

export default Profile;