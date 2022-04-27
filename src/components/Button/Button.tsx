import React, { ReactNode } from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { Container,ButtonText } from "./styles";


interface ButtonProps extends RectButtonProperties{
    children:ReactNode,
    title:string
}
const Button: React.FC<ButtonProps>=({title,children, ...rest})=>
<Container {...rest}>
<ButtonText>{children}</ButtonText>
</Container>
 
export default Button;