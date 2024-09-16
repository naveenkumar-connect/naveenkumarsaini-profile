import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout, Menu, theme } from 'antd';
import "./Profile.less";

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: 'home',
        label: 'Home',
    },
    {
        key: 'about',
        label: 'About',
    },
    {
        key: 'contact',
        label: 'Contact',
    }
];

const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    border: '1px solid red'
};

const headerMenuStyle = {
    minWidth: 0
};

const contentStyle = {
    padding: '0 48px',
    height: 'calc( 100vh - 128px )'
};

const footerStyle = {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 48px',
    height: '64px'
}

const Profile = () => {

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return(
        <Layout>
            <Header
                style={headerStyle}
            >
                <span className='header-profile-name'>Naveen Kumar Saini</span>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    items={items}
                    style={headerMenuStyle}
                />
            </Header>
            <Content
                style={contentStyle}
            >
                <div className='profile-content-container'>

                </div>
            </Content>
            <Footer
                style={footerStyle}
            >
                {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
                {isBigScreen && <p>You have a huge screen</p>}
                {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
                <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
                {isRetina && <p>You are retina</p>}
            </Footer>
        </Layout>

    )
}

export default Profile;