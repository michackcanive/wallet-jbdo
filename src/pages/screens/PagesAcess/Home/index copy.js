import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../../../../../Constants';
import Icon from 'react-native-vector-icons/Ionicons'

import { ScrollView } from 'react-native-gesture-handler';


export const Home = () => {
  const nav = useNavigation();
  const DATA = [
    {
      id: 1,
      name: "SALDO",
      backgroundColor:"#6BC5E8",
      imagesrc:jabakule,
      onPressHandler:()=>{
        nav.navigate("schedule",{title:"SALDO",imagesrc:jabakule,backgroundColor:"#6BC5E8"});
      }
    },
    {
      id: 2,
      name: "SMS",
      backgroundColor:"#3A9EC2",
      imagesrc:jabakule,
      onPressHandler:()=>{
        nav.navigate("schedule",{title:"SMS",imagesrc:jabakule_2,backgroundColor:"#3A9EC2"});
      }
    },
    {
      id: 3,
      name: "AFILIADOS",
      backgroundColor:"#3A9EC2",
      imagesrc:jabakule,
      onPressHandler:()=>{
        nav.navigate("schedule",{title:"AFILIADOS",imagesrc:jabakule_2,backgroundColor:"#3A9EC2"});
      }
    },
    {
      id: 4,
      name: "AFILIADOS",
      backgroundColor:"#3A9EC2",
      imagesrc:jabakule,
      onPressHandler:()=>{
        nav.navigate("schedule",{title:"AFILIADOS",imagesrc:jabakule_2,backgroundColor:"#3A9EC2"});
      }
    }
  ];
  const transportItem = ({item}) => {

    return (
    <ScrollView>
               <CustomCard >
              <View style={{flexDirection:"row",overflow:"hidden",justifyContent:"space-between",padding:15,backgroundColor:item.backgroundColor,marginHorizontal:26,marginBottom:10,borderRadius:10}}>
                <View style={{justifyContent:"space-between"}}>
                  <Text style={{color:"#fff",fontWeight:"bold",fontSize:20}}>{item.name}</Text>
                  <TouchableOpacity style={{backgroundColor:"#fff",width:70,padding:5,borderRadius:6,marginTop:50}} onPress={item.onPressHandler}>
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>Vistar</Text>
                  </TouchableOpacity>
                </View>
                <View >
                  <Image
                      style={{position:"absolute",right:-15,bottom:2, padding:4}}
                      source={item.imagesrc}>
                        
                  </Image>
                </View>
              </View>
           </CustomCard>
    </ScrollView>
    );
  };
  return (
          <View style={styles.container}>
              <View style={styles.topview}>
                  <View style={styles.welcomecontainer}>
                      <Text style={styles.welcomemessage}>{"Olá,<br/>Michak".split("<br/>").join("\n")}</Text>
                      <View style={styles.circle}></View>
                  </View>
                  <Text style={{color:"#fff"}}> Pagamentos Realizados</Text>
                  <View style={styles.searchbar}>
                    <Icon name="search-outline" size={25} color="#BEBEBE" style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Pesquisar" style={{color:"#BEBEBE",marginLeft:15,opacity:0.5,fontSize:20}}></TextInput>
                  </View>
              </View>
              <View style={styles.bottomview}>
              <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-40,padding:30,borderRadius:10,flexDirection:"row",justifyContent:"space-between"}}>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Total</Text>
                    <Text style={{fontWeight:"bold",fontSize:18}}> 18 jb</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Enviados</Text>
                    <Text style={{fontWeight:"bold",fontSize:18}}>9 jb</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Recebidos</Text>
                    <Text style={{fontWeight:"bold",fontSize:18}}>189 jb</Text>
                  </View>
                </CustomCard>
                <Text style={{marginHorizontal:26,marginVertical:20,fontWeight:"bold",fontSize:20}}>Inicio</Text>
                <View>
                    <FlatList
                    data={DATA}
                    renderItem={transportItem}
                    keyExtractor={(item) => item.id}
                  />
                </View>
                </View>
          </View>);
}

const styles = StyleSheet.create({
  topview:{
    marginTop:60,
    marginHorizontal:24,
    backgroundColor:PRIMARYCOLOR,
    flex:1,
    justifyContent:"space-between"
  },
  welcomemessage:{
    color:"#fff",
    fontSize:35,
    fontWeight:"bold"
  },
  searchbar:{
    flexDirection:"row",
    backgroundColor:"#fff",
    alignItems:"center",
    width:"100%",
    height:40,
    borderRadius:10,
    marginBottom:65
  },
  circle:{
    borderRadius:25,
    height:50,
    width:50,
    backgroundColor:"#fff"
  },
  welcomecontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  bottomview:{
    flex:2,
    backgroundColor:"#fff",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  container: {
    flex:1,
    backgroundColor:PRIMARYCOLOR,
  },
});