import React from "react";
import { Image } from "react-native";
import {
     Container,
     Scroller,
     HeaderArea,
     HeaderTitle,
     SearchButton,

     LocationArea,
     LocationInput,
     LocationFander,


     } from "./styles";
import seache from '../../../../assets/img/8.png';
import LocationIcon from '../../../../assets/img/location.png';
import Icon from 'react-native-vector-icons/Ionicons'

export default () => {
 
    return (
    
            <Container>
              <Scroller>
                  <HeaderArea>
                      <HeaderTitle numberOfLine={2}>
                          Michack Canive
                      </HeaderTitle>

                      <SearchButton>
                      <Icon  size={30} name="search-outline" color="#fff"/>
                      </SearchButton>
                  </HeaderArea>

                  <LocationArea>
                      <LocationInput />
                      <LocationFander>
                        <Icon  name="alarm-outline" style={{ width: 26, height: 26}} size={30} />
                      </LocationFander>
                  </LocationArea>
              </Scroller>
            </Container>
    )
}
