import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { students } from "../../data/students";
import { Ionicons } from "@expo/vector-icons";

export default function StudentDetail() {
  const { nim } = useLocalSearchParams();
  const student = students.find((s) => s.nim === nim);

  if (!student) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Data mahasiswa tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, backgroundColor: "#f4f6f9" }}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5,
          alignItems: "center",
        }}
      >
        {/* Foto Profil */}
        <Image
          source={{ uri: student.photo }}
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
            marginBottom: 15,
            borderWidth: 3,
            borderColor: "#007AFF",
          }}
        />

        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#333" }}>
          Detail Mahasiswa
        </Text>

        {/* Biodata */}
        <View style={{ width: "100%", gap: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="person-circle-outline" size={22} color="#007AFF" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16, color: "#444" }}>Nama: {student.name}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="card-outline" size={22} color="#34C759" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16, color: "#444" }}>NIM: {student.nim}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="school-outline" size={22} color="#FF9500" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16, color: "#444" }}>Prodi: Teknik Informatika</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="business-outline" size={22} color="#5856D6" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16, color: "#444" }}>Fakultas: Ilmu Komputer</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="mail-outline" size={22} color="#FF3B30" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16, color: "#444" }}>
              Email: {student.nim}@student.ac.id
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
