import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import jabakule from '../../../../assets/img/jabakule_branco.png';
import { CustomCard } from '../../../../components/CustomCard';
import { theme } from '../../../../core/theme'
import { useAuth } from '../../../../contexts/auth';
import Icon from 'react-native-vector-icons/Ionicons'
import { LocationArea, LocationFander, LocationInput } from './styles';
import { Button } from 'react-native-paper';
import { useJaba } from '../../../../contexts/JabaContexts';



export default () => {

  const nav = useNavigation();
  const { user ,signOut} = useAuth();
  const { loanding} = useJaba();
  
  const sair=()=>{
    signOut()
  }

  console.log(user)

  const DATA = [
    {
      id: 1,
      name: "JABA",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("JabakulePay", { title: `${'JABA'}`, imagesrc: jabakule, backgroundColor: "#525f7f" });
      }
    },
    {
      id: 2,
      name: "SMS",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("Sms", { title: "SMS", imagesrc: jabakule, backgroundColor: "#525f7f" });
      }
    },
    {
      id: 3,
      name: "AFILIADOS",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("schedule", { title: "AFILIADOS", imagesrc: '', backgroundColor: "#525f7f" });
      }
    },
    {
      id: 4,
      name: "AFILIADOS",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("schedule", { title: "AFILIADOS", imagesrc: '', backgroundColor: "#3A9EC2" });
      }
    }
  ];



  const transportItem = ({ item }) => {

    return (
     
        <CustomCard >
          <View style={{ flexDirection: "row", overflow: "hidden", justifyContent: "space-between", padding: 15, backgroundColor: item.backgroundColor, marginHorizontal: 26, marginBottom: 10, borderRadius: 10 }}>
            <View style={{ justifyContent: "space-between" }}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
              <TouchableOpacity style={{ backgroundColor: "#fff", width: 70, padding: 5, borderRadius: 6, marginTop: 50 }} onPress={item.onPressHandler}>
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>entrar</Text>
              </TouchableOpacity>
            </View>
            <View >
              <Image
                style={{ width: 70, height: 70, position: "absolute", right: -15, bottom: 2, padding: 4 }}
                source={item.imagesrc} />
            </View>
          </View>
        </CustomCard>
     
    );
  };

  return (      
  <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.primary} />
    <View style={styles.container}>

      <View style={styles.topview}>
         <LocationArea>
          <LocationInput  
          placeholder='Pagamentos realizados ' placeholderTextColor={"#FFFFFF"}/>
          <LocationFander>
          <Icon size={29} style={{ opacity: 1  }} name="wallet-outline" color="#fff"/>
          </LocationFander>
        </LocationArea>
        <View style={styles.welcomecontainer}>
          
          <Text style={styles.welcomemessage}>{user.name}</Text>

          <View style={styles.circle}>
            
            <Button onPress={() => sair()}>
            <Icon size={30} style={{  opacity:1,alignItems:'center',justifyContent:'center'}} name="close-outline" color="#fff"/>
            </Button>
          </View>

        </View>
       
        <Text style={{ color: "#000" }}> </Text>
      </View>
      
      <View style={styles.bottomview}>
        <CustomCard elevated={true} style={{ backgroundColor: "#fff", marginHorizontal: 24, marginTop: -40, padding: 30, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>SMS</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{user.qtd_sms_cliente}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>SMS GASTO</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{user.sms_consumido}</Text>
          </View>
          <View style={{ alignItems: "center", color: theme.colors.primary }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>JABA</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{user.jaba}</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>AFILHDOS</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{user.saldo_ganhos}</Text>
          </View>
        </CustomCard>
        <Text style={{ marginHorizontal: 26, marginVertical: 20, fontWeight: "bold", fontSize: 20 }}>INICIO</Text>
        <View>
          <FlatList
            data={DATA}
            renderItem={transportItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
    </>);

}

const styles = StyleSheet.create({
  topview: {
    marginTop: 20,
    marginHorizontal: 24,
    backgroundColor: theme.colors.primary,
    flex: 1,
    justifyContent: "space-between"
  },
  welcomemessage: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  searchbar: {
    flex: 1,
    position: 'relative',
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    marginBottom: 80
  },
  circle: {
    borderRadius: 25,
    height: 50,
    width: 50,
    
  },
  welcomecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bottomview: {
    marginTop:20,
    flex: 2.3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});