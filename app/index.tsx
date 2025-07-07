import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >

      {/* SEGITIGA */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'purple',
        }}
      />

      {/* PIL (TABUNG HORIZONTAL) */}
      <View
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 999, // membuat bentuk kapsul
        }}
      >
        <Text style={{ color: 'pink', fontSize: 16 }}>105841107122</Text>
      </View>

      {/* PERSEGI PANJANG */}
      <View
        style={{
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 0,
          width: 150,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          ZALNA NUR ISLAMIAH
        </Text>
      </View>
    </View>
  );
}