import { Text, View } from "react-native";

export default function ProfileDisplay() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFEFEF", // lebih soft dan berbeda
        paddingHorizontal: 24,
      }}
    >
      {/* Segitiga Warna Merah */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 48,
          borderRightWidth: 48,
          borderBottomWidth: 96,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "#FF0000", // red dalam hex
          marginBottom: 18,
        }}
      />

      {/* Oval Biru untuk NIM */}
      <View
        style={{
          width: 130,
          height: 52,
          backgroundColor: "#0000FF", // blue dalam hex
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <Text style={{ color: "#FFF", fontWeight: "700" }}>105841106922</Text>
      </View>

      {/* Kotak Nama Oranye */}
      <View
        style={{
          width: 210,
          height: 62,
          backgroundColor: "#FFA500", // orange hex
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            fontSize: 19,
            color: "#000000",
            fontWeight: "bold",
          }}
        >
          BASO HAMZAH
        </Text>
      </View>
    </View>
  );
}