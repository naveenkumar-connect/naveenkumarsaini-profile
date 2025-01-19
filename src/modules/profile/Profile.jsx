import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout, Anchor, theme, Row, Col, Space, Image, Drawer, Tooltip } from 'antd';
import { 
    XOutlined, 
    InstagramOutlined, 
    LinkedinOutlined, 
    MenuOutlined, 
    HomeOutlined,
    UserOutlined,
    MailOutlined,
    BookOutlined
} from '@ant-design/icons';
import ProfileIntro from './ProfileIntro';
import ProfileAbout from './ProfileAbout';
import ProfilePortfolio from './ProfilePortfolio';
import "./Profile.less";
import musicalNote from '../../assets/images/musical-note.png';
import travelLuggage from '../../assets/images/travel-luggage.png';
import drive from '../../assets/images/drive.png';
import movie from '../../assets/images/movie.png';

const { Header, Content, Footer } = Layout;

export const prepareTitle = (icon, titleText) => {
    return <Tooltip placement="bottom" title={titleText} color='#c7aa36'> {icon} </Tooltip>
}

export const getItems = () =>{
    return(
        [
            {
                key: 'home',
                href: '#home',
                title: prepareTitle(
                    <HomeOutlined />,
                    "Home"
                )
            },
            {
                key: 'about',
                href: '#about',
                title: prepareTitle(
                    <UserOutlined />,
                    "About"
                )
            },
            // {
            //     key: 'portfolio',
            //     href: '#portfolio',
            //     title: prepareTitle(
            //         <BookOutlined />,
            //         "Portfolio"
            //     )
            // },
            // {
            //     key: 'contact',
            //     href: '#contact',
            //     title: prepareTitle(
            //         <MailOutlined />,
            //         "Contact"
            //     )
            // }
        ]
    );
};

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
                    items={getItems()}
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
                            Naveen Kumar Saini
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
                                items={getItems()}
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
                {/* <ProfilePortfolio isTabletOrMobile={isTabletOrMobile} /> */}
            </Content>
            <Footer
                className='profile-footer'
            >
                {"Designed and Developed by Naveen Kumar Saini"}
                <Space>
                    {isDesktopOrLaptop && <p>{"Device Type: desktop or laptop"}</p>}
                    {isBigScreen && <p>{"Device Size: Large"}</p>}
                    {isTabletOrMobile && <p>{"Device Type: tablet or mobile phone"}</p>}
                    <p>{"- Orientation: "}{isPortrait ? 'portrait' : 'landscape'}</p>
                    {isRetina && <p>{"Retina"}</p>}
                </Space>
                
            </Footer>
        </Layout>

    )
}

export default Profile;