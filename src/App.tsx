
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './contexts/auth';
import { Provider } from 'react-native-paper'
import { theme } from './core/theme'
import Routes from "./pages/routes";
import { LogBox } from 'react-native';
import { JabaProvider } from "./contexts/JabaContexts";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App: React.FC = () => {
    const { signed, loading } = useAuth()

    /*if (loading) {
         return (
             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                 <Logo/>
                 <ActivityIndicator size="large" color="#000" />
             </View>
         );
     }*/

    return (
        <Provider theme={theme}>

            <NavigationContainer>
            
                <AuthProvider>
                    <JabaProvider>
                    <Routes />
                    </JabaProvider>
                </AuthProvider>
            </NavigationContainer>

        </Provider>
    )
}

export default App;