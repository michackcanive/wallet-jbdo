import React, { useEffect } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomCard } from "../../../../components/CustomCard";
import { theme } from "../../../../core/theme";
import catao from '../../../../assets/Logo/cartao.png';
import Spin from '../../../../assets/Spin-1s-200px.gif';
import servicos_pag from '../../../../assets/service.png';
import search from '../../../../assets/search.png';
import credit_card from '../../../../assets/credit-card.png';
import tranf from '../../../../assets/transfer-money.png';
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { useJaba } from "../../../../contexts/JabaContexts";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons'
import BackButton from "../../../../components/BackButton";
import { Loading } from "../../../../components/Loanding";



const TabArea = styled.View`
height:60px;
flex-direction:row;
border-top-right-radius: 20px;
border-top-left-radius: 20px;

`
const TabItem = styled.TouchableOpacity`
flex:1;
justify-content:center;
align-items:center;

`



export default () => {

  const nav = useNavigation();
  const { signed, user, loadingjaba, loanding, jabainf ,no_loandig, yes_loandig} = useJaba();

  useEffect(() => {
    async function loadStorageData() {
      console.log(loadingjaba)
      jabainf()
      
      console.log(user?.nome_nego)

      console.log(user)
    
    }
    loadStorageData()
  }, [])
 
  return  (
      <>
        <StatusBar barStyle={'light-content'} />
        
        <View style={styles.container}>
          <BackButton goBack={nav.goBack} />

          <View style={styles.topview}>

            <View style={styles.welcomecontainer}>
              <Text style={styles.welcomemessage}>{'JABAKULÉ'}</Text>
            </View>
            <View style={styles.welcomecontainer}>
              <Text style={styles.welcomejaba}>{user?.saldo_da_conta?user?.saldo_da_conta + ' JABA':'Offline' + ' JABA'}</Text>
            </View>

          </View>

          <View style={styles.bottomview}>

            <CustomCard style={{ marginHorizontal: 24, marginTop: -40, padding: 0, borderRadius: 10, flexDirection: "row", justifyContent: "center" }}>
              <View style={{ justifyContent: 'center' }}>
                <Image source={catao} style={{ width: 340, height: 210 }} />
              </View>
            </CustomCard>

            <Text style={{ marginHorizontal: 26, marginVertical: 20, fontWeight: "bold", fontSize: 20 }}>MENU</Text>
            
            <View style={styles.containerbutton}>
              
              <View style={styles.box}>
                <TabArea >
                  <TabItem style={{
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                  }} >
                    <Image source={tranf} style={{ width: 50, height: 50 }} />
                  </TabItem>
                </TabArea>
              </View>

              <View style={styles.box}>
                <TabArea >
                  <TabItem onPress={() => {
                    nav.navigate("ScheduleScreen", { title: "SERVIÇOS", backgroundColor: "#274cb3c7" });
                  }} >
                    <Image source={credit_card} style={{ width: 50, height: 50 }} />
                  </TabItem>
                </TabArea>
              </View>
              <View style={styles.box}>
                <TabArea>
                  <TabItem >
                  <Image source={search} style={{ width: 50, height: 50 }} />
                  </TabItem>
                </TabArea>
              </View>
              <View style={styles.box}>
                <TabArea>
                  <TabItem >
                    <Icon size={32} name="wallet-outline" color="#fcfcfc" />
                  </TabItem>
                </TabArea>
              </View>

            </View>

          </View>
        </View>

         { !Boolean( user?.saldo_da_conta) ? <Loading /> : null}

      </>
    )
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
    color: "#10359c",
    fontSize: 30,
    fontWeight: "bold"
  },
  welcomejaba: {
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
    justifyContent: "center",
    alignItems: "center"

  },
  bottomview: {
    marginTop: 50,
    flex: 9,
    backgroundColor: "#fffffff2",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  containerbutton: {
    justifyContent: 'center',
    alignSelf: 'auto',
    margin: 1,
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 25,
    elevation: 9,
  },
  box: {
    height: 80,
    width: 80,
    backgroundColor: '#04497B',
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.9, 
    shadowRadius: 25,
    shadowColor: '#1f1e1e',
   
    
  }
});
