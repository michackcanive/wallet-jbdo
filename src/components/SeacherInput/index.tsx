import { Image } from "react-native";
import { LocationArea, LocationFander, LocationInput } from "./styles";
import jabakule from '../../assets/Logo/jabakule_branco.png'

export const AppRoutes:React.FC = () => { 
    return(
<LocationArea>
    <LocationInput/>
    <LocationFander>
        <Image source={jabakule}/>
    </LocationFander>
</LocationArea>

    )
}