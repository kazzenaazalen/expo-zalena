import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const images = [
  require("../../assets/images/profile.jpg"),
  require("../../assets/images/profile2.jpg"),
  require("../../assets/images/profile3.jpg"),
];

export default function ProfilScreen() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>Biodata Mahasiswa</Text>
      <Text style={styles.subtitle}>Universitas Muhammadiyah Makassar</Text>

      {/* Foto Carousel */}
      <View style={styles.carouselContainer}>
        <TouchableOpacity onPress={prevImage}>
          <AntDesign name="leftcircleo" size={30} color="#555" />
        </TouchableOpacity>

        <Image source={images[index]} style={styles.image} />

        <TouchableOpacity onPress={nextImage}>
          <AntDesign name="rightcircleo" size={30} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Data Diri */}
      <View style={styles.card}>
        <Item label="Nama" value="Zalna Nur Islamiah" />
        <Item label="NIM" value="105841107122" />
        <Item label="Kelas" value="6B" />
        <Item label="Program Studi" value="Informatika" />
        <Item label="Fakultas" value="Teknik" />
      </View>
    </ScrollView>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "Poppins-Bold", // Jika kamu pakai custom font
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 15,
    fontFamily: "Poppins-Regular",
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 260,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  card: {
    width: "100%",
    backgroundColor: "#f4f4f4",
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  item: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    width: 130,
    fontWeight: "600",
    color: "#444",
    fontFamily: "Poppins-Medium",
  },
  value: {
    flex: 1,
    color: "#222",
    fontFamily: "Poppins-Regular",
  },
});
