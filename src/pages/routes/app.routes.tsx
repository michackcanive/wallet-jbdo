import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sms from "../screens/PagesAcess/Sms";
import Home from "../screens/PagesAcess/Home";
import JabakulePay from "../screens/PagesAcess/JabakulePay";
import Intermediacao from "../screens/PagesAcess/Intermediacao";
import Afilhados from "../screens/PagesAcess/Afilhados";
import ScheduleScreen from "../../components/ScheduleScreen";
import Search from "../screens/PagesAcess/Search";
import Profile from "../screens/PagesAcess/Profile";
import { theme } from '../../core/theme';

//import ScheduleScreen from "../../components/ScheduleScreen";
import CustomTabBar from "../../components/CustomTabBar";
import { StatusBar } from "react-native";
import { useJaba } from "../../contexts/JabaContexts";
import { Loading } from "../../components/Loanding";
const Tab = createBottomTabNavigator();

export const AppRoutes: React.FC = () => {



  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.primary} />
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sms" component={Sms} />
        <Tab.Screen name="ScheduleScreen" component={ScheduleScreen} />
        <Tab.Screen name="JabakulePay" component={JabakulePay} />
        <Tab.Screen name="Intermediacao" component={Intermediacao} />
        <Tab.Screen name="Afilhados" component={Afilhados} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      
    </>
  )
}

