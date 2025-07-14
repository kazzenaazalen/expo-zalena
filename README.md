<!-- 
tugas 1
import { View, Text } from "react-native";

export default function IdentityCard() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAF9F6", // latar estetik off-white
        padding: 20,
      }}
    >
      {/* Segitiga Ungu Estetik */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 48,
          borderRightWidth: 48,
          borderBottomWidth: 96,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "#6C63FF", // ungu biru
          marginBottom: 20,
        }}
      />

      {/* Bentuk pil merah salmon untuk NIM */}
      <View
        style={{
          height: 52,
          width: 130,
          backgroundColor: "#FF6B6B", // merah lembut
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF", // putih
            fontWeight: "bold",
          }}
        >
          105841106922
        </Text>
      </View>

      {/* Kotak nama warna kuning pastel */}
      <View
        style={{
          width: 200,
          height: 60,
          backgroundColor: "#FFD166", // kuning lembut
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 19,
            color: "#2D3142", // abu gelap elegan
            fontWeight: "bold",
          }}
        >
          BASO HAMZAH
        </Text>
      </View>
    </View>
  );
} -->
