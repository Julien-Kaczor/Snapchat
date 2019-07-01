import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../../Home.js';
import Register  from '../../Register.js';
import Login  from '../../Login.js';
import Index  from '../../Index.js';
import SendPicture  from '../../SendPicture.js';

const RootStack = createStackNavigator({
    Home: {
      screen: Home
    },
    Register: {
        screen: Register
    },
    Login: {
        screen: Login,
    },
    Index: {
      screen: Index
    },
    SendPicture: {
      screen: SendPicture
    },
});

const App = createAppContainer(RootStack);

export default App;