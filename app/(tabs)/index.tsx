import { Text, View } from "react-native";

export default function ProfileDisplay() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFEFEF",
        paddingHorizontal: 24,
      }}
    >
      {/* Segitiga Merah */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 48,
          borderRightWidth: 48,
          borderBottomWidth: 96,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "#FF0000",
          marginBottom: 18,
        }}
      />

      {/* Bentuk pil untuk NIM */}
      <View
        style={{
          width: 130,
          height: 52,
          backgroundColor: "#0000FF",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <Text style={{ color: "#FFF", fontWeight: "700" }}>105841106922</Text>
      </View>

      {/* Persegi Panjang untuk Nama */}
      <View
        style={{
          width: 200,     // lebih panjang
          height: 60,     // lebih rendah → membentuk persegi panjang
          backgroundColor: "#FFA500",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#000",
            fontWeight: "bold",
          }}
        >
          BASO HAMZAH
        </Text>
      </View>
    </View>
  );
}
