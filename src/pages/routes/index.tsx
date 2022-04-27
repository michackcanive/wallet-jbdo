import React from 'react';
import { AuthRoutes } from '../routes/auth.routes';
import { AppRoutes } from '../routes/app.routes';
import { useAuth } from '../../contexts/auth';
import { StatusBar, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { theme } from '../../core/theme';
import Logo from '../../components/Logo';
import { Footer, FromType } from '../screens/Preload/styles';

const Routes: React.FC = () => {

  const { signed, loading } = useAuth();

  console.log(signed)
  if (loading) {
    return (
      <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.primary} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Logo />
        <ActivityIndicator style={{ marginTop: 30 }} size="large" color={theme.colors.primary} />
      </View>
      <Footer >
      <FromType style={{ marginBottom: 23 }}>
        <Text>FROM:<Text style={{color:theme.colors.primary}} > AJEC</Text></Text>
      </FromType>
    </Footer>
    </>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}
export default Routes;