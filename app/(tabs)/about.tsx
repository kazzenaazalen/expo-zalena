import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Tentang Aplikasi</Text>

      <Text style={styles.paragraph}>
        Aplikasi ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah pemrograman mobile. Tujuan dari aplikasi ini
        adalah untuk menampilkan informasi seputar{" "}
        <Text style={styles.bold}>Universitas Muhammadiyah Makassar (Unismuh Makassar)</Text> dalam bentuk digital yang
        sederhana namun informatif.
      </Text>

      <Text style={styles.paragraph}>
        Aplikasi ini memiliki tiga halaman utama, yaitu:
      </Text>

      <View style={styles.bulletList}>
        <Text style={styles.bullet}>
          • <Text style={styles.bold}>Home</Text>: Menampilkan informasi umum tentang Unismuh Makassar, termasuk visi
          dan misi universitas.
        </Text>
        <Text style={styles.bullet}>
          • <Text style={styles.bold}>About</Text>: Menjelaskan tujuan dibuatnya aplikasi serta fungsi dari masing-masing halaman.
        </Text>
        <Text style={styles.bullet}>
          • <Text style={styles.bold}>Profil</Text>: Menyajikan tampilan visual berupa gambar/logo universitas yang dapat dilihat dengan fitur geser (carousel).
        </Text>
      </View>

      <Text style={styles.paragraph}>
        Fitur yang disediakan meliputi:
      </Text>

      <View style={styles.bulletList}>
        <Text style={styles.bullet}>• Tampilan profil secara visual dan interaktif.</Text>
        <Text style={styles.bullet}>• Penjelasan visi dan misi universitas secara terstruktur.</Text>
        <Text style={styles.bullet}>• Navigasi antar halaman yang mudah dan responsif.</Text>
      </View>

      <Text style={styles.paragraph}>
        Aplikasi ini dikembangkan menggunakan teknologi React Native dan dirancang agar mudah digunakan oleh siapa saja
        yang ingin mengenal Unismuh Makassar.
      </Text>

      <Text style={styles.signature}>- By. Zalna Nur Islamiah</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "justify",
    marginBottom: 12,
  },
  bulletList: {
    marginLeft: 10,
    marginBottom: 12,
  },
  bullet: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left",
    marginBottom: 4,
  },
  bold: {
    fontWeight: "bold",
  },
  signature: {
    fontSize: 14,
    textAlign: "right",
    marginTop: 10,
    fontStyle: "italic",
  },
});
