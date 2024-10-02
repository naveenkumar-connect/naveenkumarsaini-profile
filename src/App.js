import Profile from './modules/profile/Profile';
import './App.css';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
        theme={{
            token: {
                // Seed Token
                colorPrimary: '#c7aa36',
                borderRadius: 2,
        
                // Alias Token
                colorBgContainer: '#F5F5F5FF'
            },
            components:{
                Menu: {
                  itemColor: '#000000E0'
                }
            }
        }}
    >
      <Profile />
    </ConfigProvider>
  );
}

export default App;
