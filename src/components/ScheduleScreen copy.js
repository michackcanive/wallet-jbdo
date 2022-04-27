import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PRIMARYCOLOR } from '../../Constants';
import { CustomCard } from './CustomCard';
import FromTo from './FromTo';
import { ScrollView } from 'react-native-gesture-handler';
import styled from "styled-components/native";
import BackButton from './BackButton';



const TabItem = styled.TouchableOpacity`

justify-content:center;
align-items:center;

`
export default () => {

  const nav = useNavigation();

  const route = useRoute();
  const params = route.params;
  const DATA = [
    {
      id: 1,
      departuretime: "10:00",
      arrivaltime: "10:30",
      name: "Cliente:Michak Canive",
      price: "5.0",
      onPressHandler: () => {
        nav.navigate("payment", { price: "5.0" });
      }
    },
    {
      id: 2,
      departuretime: "10:00",
      arrivaltime: "10:30",
      name: "Cliente:Michak Canive",
      price: "5.0",
      onPressHandler: () => {
        nav.navigate("payment", { price: "5.0" });
      }
    },
    {
      id: 3,
      departuretime: "10:00",
      arrivaltime: "10:30",
      name: "Cliente:Michak Canive",
      price: "5.0",
      onPressHandler: () => {
        nav.navigate("payment", { price: "5.0" });
      }
    }
  ];
  const scheduleItem = ({ item }) => {
    return (<View style={{ marginBottom: 10, borderBottomWidth: 2, marginHorizontal: 5, borderBottomStartRadius: 30, borderBottomEndRadius: 10, borderBottomColor: "#EBE7E6" }}>
      <View style={{ flexDirection: "row", marginHorizontal: 26, marginBottom: 10, justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="timer-outline" size={15} color="#000" />
          <Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 10 }}>{item.departuretime}</Text>
          <Ionicons name="swap-horizontal-outline" size={15} color="#000" />
          <Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 10 }}>{item.arrivaltime}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", marginRight: 16 }}>$ {item.price}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 26, marginBottom: 15, justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="location-outline" size={15} color="#000" />
          <Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 10 }}>{item.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={item.onPressHandler} style={{ backgroundColor: params.backgroundColor, paddingHorizontal: 8, borderRadius: 5 }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Detalhes</Text>
          </TouchableOpacity>
        </View> 
      </View>
    </View>
    );
  };
  return (
   <>

   <ScrollView>  
      
    <View style={[styles.container, { backgroundColor: params.backgroundColor }]}>
      <View style={[styles.topview, { backgroundColor: params.backgroundColor, marginBottom: 50 }]}>
        <Text style={{ position: "absolute", top: 10, textAlign: "center", fontSize: 30, color: "#fff", fontWeight: "bold" }}>{params.title}</Text>
      </View>
    
      <View style={styles.bottomview}>
        
        <TabItem onPress={() => {
          Alert.alert('Licncia QU','Pagamento de de Lincença')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>

        <TabItem onPress={() => {
          Alert.alert('RESET SENHA')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>

        <TabItem onPress={() => {
          Alert.alert('PARCERIA')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>

        <TabItem onPress={() => {
          Alert.alert('SERVIÇOS SMS')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>
        <TabItem onPress={() => {
          Alert.alert('CARTÃO VISA')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>

        <TabItem onPress={() => {
          Alert.alert('Lecencia OSM')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>

        <TabItem onPress={() => {
          Alert.alert('Serviços 5')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>
        <TabItem onPress={() => {
          Alert.alert('Serviços 7')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>
        <TabItem onPress={() => {
          Alert.alert('Serviços 9')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>
        <TabItem onPress={() => {
          Alert.alert('Serviços 11')
        }} >
          <CustomCard elevated={true}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 24,
              marginTop: 30,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FromTo backgroundColor={params.backgroundColor} />
          </CustomCard>
        </TabItem>
       
        <View>

        </View>
      </View>
    </View>
  </ScrollView>
   </>
  
  );
}

const styles = StyleSheet.create({
  topview: {
    marginTop: 70,
    marginHorizontal: 24,
    backgroundColor: PRIMARYCOLOR,
    flex: 1,
    position: 'relative'

  },
  bottomview: {

    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    marginTop: 20,
    borderTopRightRadius: 50,
  },
  container: {
    flex:3,
    backgroundColor: PRIMARYCOLOR,
  },
  container: {
    shadowColor: '#BEBEBE',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 5,
  }
});