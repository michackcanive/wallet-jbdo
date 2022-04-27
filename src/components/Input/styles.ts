import { ImageProps } from 'react-native';
import styled from 'styled-components/native';
import {PRIMARYCOLOR} from '../../../Constants';
//import FeatherIcon from 'react-native-vector-icons/Feather';


interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}
interface imag extends ImageProps{
      
}
export const Container = styled.View`
  width: 100%;
  margin-left:0px;
 
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 0.5px;
  flex-direction: row;
  align-items: center;
  color:rgb(54, 53, 53);
    background-color: #ffff;
    border-color: #344767;
    outline: 0;
  
   
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color:rgb(54, 53, 53);
  font-size: 19px;
  font-family: 'RobotoSlab-Regular';
`;
export const TemaSign = styled.View`
float:left;
font-family: 'RobotoSlab-Regular';
`
export const TextLogin = styled.Text`
margin-left:0px;
font-size: 24px;
font-weight:bold;
color:#344767;
`

export const Icon = styled.Image<ImageProps>`
  margin-right: 16px;
`;
export const InputText1=styled.TextInput`
flex:1;
font-size: 16px;
color:${PRIMARYCOLOR};
margin-left:10px
`


