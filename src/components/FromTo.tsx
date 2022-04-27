import * as React from 'react';
import { Text, View } from 'react-native';

interface prosp{
  name:string,
  background:string
}

export default  ({name,background}:prosp) => {
  return (
    <>
     <View style={{ width: "100%" }}>
      <View style={{ flexDirection: "row", marginBottom: 15, alignItems: "center" }}>
        
        <View style={{ marginLeft: 20 }}>
          <Text style={{ opacity: 0.6, fontSize: 15 }}>SERVIÇOS</Text>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}>{name}</Text>
        </View>
      </View>
      <View style={{ position: "absolute", left: 12, height: 28, borderWidth: 1, top: 42, width: 0, borderColor: "#EBE7E6" }}>
      </View>
    </View>
    </>
  );
};