import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export type AppRoutesParams = {
    Home: undefined;
    Profile: undefined;
}

const Tab = createBottomTabNavigator<AppRoutesParams>();

export default function AppRoutes() {
	return (
		//@ts-ignore
		<Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
            />
			
            <Tab.Screen
                name='Profile'
                component={Profile}
            />
		</Tab.Navigator>
	);
}
