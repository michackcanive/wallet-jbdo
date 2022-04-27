import React, { useContext } from "react";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons'
import { theme } from '../core/theme'
import { useAuth } from "../contexts/auth";
import { useJaba } from "../contexts/JabaContexts";

const TabArea = styled.View`
height:60px;
background-color: ${theme.colors.primary};
flex-direction:row;
border-top-right-radius: 20px;
border-top-left-radius: 20px;

`
const TabItem = styled.TouchableOpacity`
flex:1;
justify-content:center;
align-items:center;
`
const ToItemCenter = styled.TouchableOpacity`
width:70px;
height:70px;
justify-content:center;
align-items:center;
background-color:#fff;
border-radius:35px;
border:1px solid ${theme.colors.primary};
margin-top:-20px;
`
export default ({ state, navigation }) => {
  const { loanding, no_loandig, yes_loandig } = useJaba();
  
  const goTo = (sreenName) => {
    yes_loandig()
    navigation.navigate(sreenName)
  
  }
  const { user,signed,signIn ,signOut} = useAuth();
  const sair=()=>{
    signOut()
  }
  return (
    <TabArea>
     
          <TabItem onPress={() => goTo('JabakulePay')}>
            <Icon size={29} style={{ opacity: state.index === 2 ? 1 : 0.5 }} name="wallet-outline" color="#fff"/>
          </TabItem>

          <TabItem onPress={() => goTo('Sms')}>
            <Icon size={24} style={{  opacity: state.index === 1 ? 1 : 0.5 }} name="chatbubble-outline" color="#fff"/>
          </TabItem>

        <ToItemCenter onPress={() => goTo('Home')}>
          <Icon  size={30}  style={{ opacity: state.index === 0 ? 1 : 0.5 }} name="home-outline" color="#0A65A5"/>
        </ToItemCenter>

     
          <TabItem onPress={() => goTo('Intermediacao')}>
           <Icon size={24} style={{  opacity: state.index === 3 ? 1 : 0.5 }} name="git-compare-outline" color="#fff"/>
          </TabItem>
 
          <TabItem onPress={() => goTo('Profile')}>
            <Icon size={24} style={{  opacity: state.index === 6? 1 : 0.5 }} name="person-circle-outline" color="#fff"/>
          </TabItem>
    </TabArea>
  )
}