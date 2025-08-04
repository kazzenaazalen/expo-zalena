import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Data nama mahasiswa berdasarkan urutan stambuk (5 sebelum dan 5 setelah nim 69)
const studentData = [
  
  { nim: 66, name: "AGIL", major: "Informatika" },
  { nim: 67, name: "ALIZAH NU", major: "Informatika" },
  { nim: 68, name: "YAUMUL FURQAN", major: "Informatika" },
  { nim: 69, name: "BASO HAMZAH", major: "Informatika" },
  { nim: 70, name: "INDAH NUR FAUZIAH", major: "Informatika" },
  { nim: 71, name: "ZALNA NUR ISLAMIAH - Anda", major: "Informatika" },
  { nim: 72, name: "IPUL", major: "Informatika" },
  { nim: 73, name: "ALPIN", major: "Informatika" },
  { nim: 74, name: "FATHUL", major: "Informatika" },
  { nim: 75, name: "RIZKI", major: "Informatika" },
  { nim: 76, name: "SITI MARYAM", major: "Informatika" },
];

// Array font sesuai persyaratan: 5 Static + 5 Variable
const fontList = [
  // 5 Static Fonts (file terpisah untuk setiap font-weight)
  "Font1-Medium",        // Static - Medium weight
  "Font2-Cursive-Bold",  // Static - Bold weight
  "Font3-BoldItalic",    // Static - Bold Italic weight
  "Font7-Regular",       // Static - Regular weight
  "Font8-BoldItalic",    // Static - Bold Italic weight
  
  // 5 Variable Fonts (1 file mendukung banyak font-weight)
  "Font4-Variable",      // Variable - Multiple weights
  "Font5-Variable",      // Variable - Slant + Weight
  "Font6-Variable",      // Variable - Width + Weight
  "Font9-Variable",      // Variable - Multiple weights
  "Font10-Variable"      // Variable - Multiple weights
];

// Fungsi untuk generate font mapping menggunakan perulangan
const generateFontMapping = () => {
  const fontMapping: { [key: number]: string } = {};
  
  for (let i = 0; i < studentData.length; i++) {
    // Assign font menggunakan modulo untuk cycling
    fontMapping[studentData[i].nim] = fontList[i % fontList.length];
  }
  
  return fontMapping;
};

// Generate font mapping
const nimToFontMap = generateFontMapping();

export default function Zalna71NamaList() {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const [animationStates, setAnimationStates] = useState(
    studentData.map(() => ({ scale: 1, isPressed: false }))
  );

  // NIM utama diubah ke 71
  const mainNim = 71;

  const handlePress = (index: number, nim: number) => {
    setSelectedStudent(selectedStudent === nim ? null : nim);
    setAnimationStates((prev) =>
      prev.map((item, i) => {
        if (i !== index) return { ...item, isPressed: false };
        return {
          scale: item.scale === 1 ? 1.05 : 1,
          isPressed: !item.isPressed,
        };
      })
    );
  };

  const getFontWeight = (fontName: string): "normal" | "bold" => {
    if (fontName.includes("Bold")) return "bold";
    return "normal";
  };

  return (
    <ScrollView style={zal71Styles.container}>
      <View style={zal71Styles.header}>
        <Text style={zal71Styles.headerTitle}>
          🎓 Daftar Mahasiswa Teknik Informatika
        </Text>
        <Text style={zal71Styles.headerSubtitle}>
          10 Nama dengan 10 Font Berbeda
        </Text>
        <Text style={zal71Styles.yourNim}>
          📋 NIM Anda: 71 (Zalna Nur Islamiah)
        </Text>
      </View>

      <View style={zal71Styles.legendContainer}>
        <Text style={zal71Styles.legendTitle}>Keterangan:</Text>
        <Text style={zal71Styles.legendText}>🔵 Sebelum NIM Anda (66-70)</Text>
        <Text style={zal71Styles.legendText}>🔴 Setelah NIM Anda (72-76)</Text>
      </View>

      {studentData.map((student, index) => {
        const isSelected = selectedStudent === student.nim;
        const currentFont = nimToFontMap[student.nim];
        const isBeforeYou = student.nim < mainNim;
        return (
          <Pressable
            key={student.nim}
            onPress={() => handlePress(index, student.nim)}
            style={[
              zal71Styles.studentCard,
              {
                transform: [{ scale: animationStates[index].scale }],
                backgroundColor: isSelected ? '#e3f2fd' : 'white',
                borderColor: isBeforeYou ? '#2196f3' : '#f44336',
                borderLeftWidth: 5,
              },
            ]}
          >
            <View style={zal71Styles.studentInfo}>
              <View style={zal71Styles.nimContainer}>
                <Text style={zal71Styles.nimText}>
                  {isBeforeYou ? '🔵' : '🔴'} NIM: {student.nim}
                </Text>
                <Text style={zal71Styles.fontInfo}>
                  Font: {currentFont}
                </Text>
              </View>

              <Text
                style={[
                  zal71Styles.nameText,
                  {
                    fontFamily: currentFont,
                    fontWeight: getFontWeight(currentFont),
                  },
                ]}
              >
                {student.name}
              </Text>

              <Text style={zal71Styles.majorText}>
                📚 {student.major}
              </Text>

              {isSelected && (
                <View style={zal71Styles.detailContainer}>
                  <Text style={zal71Styles.detailText}>
                    ✨ Font yang digunakan: <Text style={{ fontWeight: 'bold' }}>{currentFont}</Text>
                  </Text>
                  <Text style={zal71Styles.detailText}>
                    📍 Posisi: {isBeforeYou ? 'Sebelum' : 'Setelah'} NIM Anda
                  </Text>
                  <Text style={zal71Styles.detailText}>
                    🔢 Urutan: {index + 1} dari 10 mahasiswa
                  </Text>
                </View>
              )}
            </View>
          </Pressable>
        );
      })}

      <View style={zal71Styles.fontListContainer}>
        <Text style={zal71Styles.fontListTitle}>📝 Daftar Font yang Digunakan:</Text>
        {fontList.map((font, index) => (
          <View key={font} style={zal71Styles.fontItem}>
            <Text style={zal71Styles.fontNumber}>{index + 1}.</Text>
            <Text style={[zal71Styles.fontName, { fontFamily: font }]}> 
              {font}
            </Text>
            <Text style={zal71Styles.fontType}>
              {font.includes('Variable') ? '(Variable)' : '(Static)'}
            </Text>
          </View>
        ))}
      </View>

      <View style={zal71Styles.summaryContainer}>
        <Text style={zal71Styles.summaryTitle}>📊 Ringkasan:</Text>
        <Text style={zal71Styles.summaryText}>
          • Total mahasiswa ditampilkan: <Text style={{ fontWeight: 'bold' }}>10 orang</Text>
        </Text>
        <Text style={zal71Styles.summaryText}>
          • Font berbeda digunakan: <Text style={{ fontWeight: 'bold' }}>10 font</Text>
        </Text>
        <Text style={zal71Styles.summaryText}>
          • Sebelum NIM 71: <Text style={{ fontWeight: 'bold', color: '#2196f3' }}>5 orang (66-70)</Text>
        </Text>
        <Text style={zal71Styles.summaryText}>
          • Setelah NIM 71: <Text style={{ fontWeight: 'bold', color: '#f44336' }}>5 orang (72-76)</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const zal71Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1976d2',
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    textAlign: 'center',
    marginBottom: 10,
  },
  yourNim: {
    fontSize: 14,
    color: '#ffeb3b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  legendContainer: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  studentCard: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  studentInfo: {
    flex: 1,
  },
  nimContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nimText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  fontInfo: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  nameText: {
    fontSize: 20,
    color: '#1976d2',
    marginBottom: 8,
    lineHeight: 26,
  },
  majorText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  detailContainer: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#4caf50',
  },
  detailText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
    lineHeight: 18,
  },
  fontListContainer: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fontListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  fontItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  fontNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginRight: 10,
    width: 20,
  },
  fontName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  fontType: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  summaryContainer: {
    backgroundColor: '#e8f5e8',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4caf50',
    marginBottom: 30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 12,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#388e3c',
    marginBottom: 6,
    lineHeight: 20,
  },
});
