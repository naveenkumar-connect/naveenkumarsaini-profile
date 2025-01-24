import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout, Anchor, Row, Col, Space, Image, Drawer, Tooltip } from 'antd';
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
import ProfileExperience from './ProfileExperience';
import "./Profile.less";
import home from '../../assets/images/icons/home.png';
import user from '../../assets/images/icons/user.png';
import suitcase2 from '../../assets/images/icons/suitcase2.png';

const { Header, Content, Footer } = Layout;

export const prepareTitle = (icon) => {
    return(
        <Image
            src={icon}
            preview={false}
            width='16px'
            height='16px'
        />
    )
}

export const getItems = () =>{
    return(
        [
            {
                key: 'home',
                href: '#home',
                title: prepareTitle(home)
            },
            {
                key: 'about',
                href: '#about',
                title: prepareTitle(user)
            },
            {
                key: 'experience',
                href: '#experience',
                title: prepareTitle(suitcase2)
            },
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
                <ProfileExperience isTabletOrMobile={isTabletOrMobile} />
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