import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {SignIn} from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import StartScreen from "../screens/StartScreen";
import { theme } from '../../core/theme';
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

export const AuthRoutes: React.FC = () => {

    return (
        <> 
        <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.primary} />
         <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
            headerShown: false,}}
            >
                
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}
            />

        </Stack.Navigator>
        </>
       
    )

}




