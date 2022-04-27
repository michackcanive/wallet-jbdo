import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert, StatusBar, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CustomCard } from './CustomCard';
import FromTo from './FromTo';
import styled from "styled-components/native";
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-paper';
import jabakule from '../assets/img/jabakule_branco.png';
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
      name: "QUIANNI",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("JabakulePay", { title: `${'JABA'}`, imagesrc: jabakule, backgroundColor: "#525f7f" });
      }
    },
    {
      id: 2,
      name: "OSMEC",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("Sms", { title: "SMS", imagesrc: jabakule, backgroundColor: "#525f7f" });
      }
    },
    {
      id: 3,
      name: "AJEC",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("schedule", { title: "AFILIADOS", imagesrc: '', backgroundColor: "#525f7f" });
      }
    },
    {
      id: 4,
      name: "JABAKULE SMS",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("schedule", { title: "AFILIADOS", imagesrc: '', backgroundColor: "#3A9EC2" });
      }
    },
    {
      id: 5,
      name: "CARTÃO VISA VIRTUAL",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("schedule", { title: "AFILIADOS", imagesrc: '', backgroundColor: "#3A9EC2" });
      }
    }, {
      id: 6,
      name: "COMPRA DE JABA",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("schedule", { title: "AFILIADOS", imagesrc: '', backgroundColor: "#3A9EC2" });
      }
    },
    {
      id: 7,
      name: "COMPRA DE JABA",
      backgroundColor: `${theme.colors.primary}`,
      imagesrc: jabakule,
      onPressHandler: () => {
        nav.navigate("schedule", { title: "AFILIADOS", imagesrc: '', backgroundColor: "#3A9EC2" });
      }
    }
  ];
  const transportItem = ({ item }) => {

    return (

      <TabItem onPress={() => {
        Alert.alert(`Pagamentos de serviços`,`Serviços ${item.name}`)
      }} >
        <CustomCard elevated={true}
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 24,
            marginTop: 10,
            padding: 9,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <FromTo backgroundColor={params.backgroundColor} name={item.name} />
        </CustomCard>
      </TabItem>

    );
  };
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.primary} />
      <View style={styles.container}>

        <View style={styles.bottomview}>
         
          <View style={styles.td}>
          
            <Text style={{ marginHorizontal: 36, marginVertical: 24, fontWeight: "bold", fontSize: 20, justifyContent: 'center',color:'#fff' }}>INICIO</Text>
            <BackButton goBack={nav.goBack} />
          </View>

          <View>
            <FlatList
              data={DATA}
              renderItem={transportItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  td: {
    backgroundColor: theme.colors.primary,
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20

  },
  topview: {
    marginTop: 10,
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
    flex: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});