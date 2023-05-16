import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../../screens/Dashboard';
import Help from '../../screens/Help';

const Tab = createBottomTabNavigator();


const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Help" component={Help} />
    </Tab.Navigator>
  );
}

export default HomeTab;