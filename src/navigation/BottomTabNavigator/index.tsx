import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import Icon from '../../common/components/Icon';
import Detail from '../../screens/Detail/detail.view';
import Favorites from '../../screens/Favorites/favorites.view';
import Home from '../../screens/Home/home.view';

const bottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const { colors } = useTheme();

  return (
    <bottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.onSecondary,
        tabBarInactiveTintColor: colors.caption,
        tabBarStyle: {
          backgroundColor: colors.secondary,
        },
        header: () => null,
      }}
    >
      <bottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon icon="home" color={color} size={size} />
          ),
        }}
      />
      <bottomTab.Screen
        name="Search"
        component={Detail}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon icon="search" color={color} size={size} />
          ),
        }}
      />
      <bottomTab.Screen
        name="Favorite"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon icon="favorite" color={color} size={size} />
          ),
        }}
      />
    </bottomTab.Navigator>
  );
};

export default BottomTabNavigator;
