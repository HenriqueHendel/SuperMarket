import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Register from '../pages/Register';
import List from '../pages/List';

const Drawer = createDrawerNavigator();

const Routes: React.FC = ()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="list" component={List} />
                <Drawer.Screen name="register" component={Register} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Routes;