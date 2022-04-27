import React from 'react';
  import { Image, ImageProps, ImageSourcePropType, TextInputProps } from 'react-native';
  //import { useField } from '@unform/core';
  import {PRIMARYCOLOR} from '../../../Constants';
  import jabakule from '../../assets/img/jabakule.png';
  import avatar_2x from '../../assets/img/avatar_2x.png';
  import Icon from 'react-native-vector-icons/Ionicons'
  
  

  
  import { Container, TextInput,InputText1} from './styles';


  export  default ({name,typeInputTeclado,placeholder , value,onChangeText,...rest}) => {
    return (
      <Container >
        {name==='numero'&& (<Icon  size={24} name="call-outline" color={PRIMARYCOLOR}/>)}
        {name==='senha'&& (<Icon  size={24} name="key-outline" color={PRIMARYCOLOR}/> )}
        {name==='user'&& (<Icon  size={24} name="person-circle-outline" color={PRIMARYCOLOR}/> )}
        
        <InputText1
        placeholder={placeholder}
        placeholderTextColor={PRIMARYCOLOR}
        keyboardType={typeInputTeclado}
        value={value}
        onChangeText={t=>onChangeText(t)}
        secureTextEntry={name=='senha'}
        
        />
      </Container>
    );
  }

  