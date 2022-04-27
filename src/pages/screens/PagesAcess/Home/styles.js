import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../../../../core/theme';
export const Container1 = styled.SafeAreaView`
background-color:#5E72E4;
flex: 1;
justify-content:center;
align-items:center;

`

export const Scroller=styled.ScrollView`
width:100%;

height:100%;

`

     export const HeaderArea=styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

     `
     export const HeaderTitle=styled.Text`
     width:250px;
     font-size:24px;
     font-weight:hold;
     color:#FFF;
     `
     export const SearchButton=styled.TouchableOpacity`
     width:24px;
     height:24px;
     `
     
     export const LocationArea=styled.View`
     background-color:${theme.colors.secondary};
     height:60px;
     border-radius:38px;
     flex-direction:row;
     align-items:center;
     padding-left:20px;
     padding-right:20px;
     margin-botton:30px

     `
     export const LocationInput=styled.TextInput`
     flex:1;
     font-size:16px;
     color:#FFFFFFFF
     `
     export const LocationFander=styled.TouchableOpacity`
     
     `
