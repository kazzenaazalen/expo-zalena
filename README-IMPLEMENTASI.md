# 📱 Aplikasi Font Demo - Baso Hamzah (NIM 69)

## 🎯 Fitur Utama yang Diminta

### ✅ 1. Import 10+ Font dengan Perulangan
- **12 font total**: 2 original + 5 static + 5 variable fonts
- **Font loading**: Menggunakan `useFonts` hook dari `expo-font`
- **Static fonts**: File terpisah untuk setiap font-weight
- **Variable fonts**: 1 file mendukung multiple font-weight

### ✅ 2. Tampilan 10 Nama dengan Font Berbeda
- **Halaman**: `app/nama-list.tsx`
- **5 nama sebelum NIM 69**: Ahmad Rizki (64), Siti Nurhaliza (65), Muhammad Fadly (66), Aisyah Putri (67), Bayu Santoso (68)
- **5 nama setelah NIM 69**: Indira Sari (70), Arif Budiman (71), Maya Sari (72), Dian Permata (73), Rizky Maulana (74)
- **Font assignment**: Menggunakan perulangan `for` dan modulo operator
- **Interaktif**: Tap untuk detail, animasi scale, visual indicator

### ✅ 3. Grid Gambar NIM dengan Font
- **Halaman**: `app/gambar-grid.tsx` 
- **Range NIM**: 69-78 (10 gambar total) ✅ **DIPERBAIKI**
- **Font berbeda**: Setiap NIM menggunakan font yang berbeda (10 font lengkap)
- **Interaktif**: Scale animation, image toggle, status indicator
- **Highlight khusus**: NIM 69 (Anda) diberi border merah dan marker

## 🔧 Implementasi Teknis

### Font Loading dengan Perulangan
```tsx
// Di _layout.tsx
const [ loaded, error ] = useFonts({
  // 2 Font Original
  "fontBas": require("../assets/fonts/fontBas.ttf"),
  "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  
  // 5 Static Fonts (file terpisah untuk setiap weight)
  "Font1-Medium": require("../assets/fonts/1-Medium.ttf"),
  "Font2-Cursive-Bold": require("../assets/fonts/2-Cursive-Bold.ttf"),
  "Font3-BoldItalic": require("../assets/fonts/3-BoldItalic.ttf"),
  "Font7-Regular": require("../assets/fonts/7-Regular.ttf"),
  "Font8-BoldItalic": require("../assets/fonts/8-BoldItalic.ttf"),
  
  // 5 Variable Fonts (1 file, multiple weights)
  "Font4-Variable": require("../assets/fonts/4-VariableFont_wght.ttf"),
  "Font5-Variable": require("../assets/fonts/5-slnt,wght.ttf"),
  "Font6-Variable": require("../assets/fonts/6-wdth,wght.ttf"),
  "Font9-Variable": require("../assets/fonts/9-VariableFont_wght.ttf"),
  "Font10-Variable": require("../assets/fonts/10-VariableFont_wght.ttf"),
});
```

### Font Assignment dengan Perulangan
```tsx
// Array font untuk cycling
const fontList = [
  "fontBas", "SpaceMono-Regular", "Font1-Medium",
  "Font2-Cursive-Bold", "Font3-BoldItalic", "Font7-Regular",
  "Font8-BoldItalic", "Font4-Variable", "Font5-Variable", "Font6-Variable"
];

// Generate mapping menggunakan for loop
const generateFontMapping = () => {
  const fontMapping = {};
  for (let i = 0; i < studentData.length; i++) {
    // Modulo untuk cycling font jika data lebih banyak dari font
    fontMapping[studentData[i].nim] = fontList[i % fontList.length];
  }
  return fontMapping;
};
```

### Image Generation dengan Perulangan
```tsx
const bas69GenerateImagePairs = () => {
  const baseNIM = '10584110';
  const suffix = '22';
  const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const query = '_.jpg?1751871539';
  const altURL = 'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

  const pairs = [];
  
// Loop untuk generate NIM 69-78 (10 gambar total)
for (let i = 69; i <= 78; i++) {
  const nim = \`\${baseNIM}\${i}\${suffix}\`;
  const main = \`\${baseURL}\${nim}\${query}\`;
  pairs.push({ main, alt: altURL, nimNumber: i });
}  return pairs;
};
```

## 📱 Navigasi Aplikasi

### Halaman Utama (`/`)
- 🏠 Welcome screen dengan profil Baso Hamzah
- 🧭 Navigasi ke 3 halaman fitur utama
- 💡 Info NIM 69 dan penjelasan aplikasi

### Halaman 10 Nama (`/nama-list`)
- 📝 List 10 nama mahasiswa (64-68, 70-74)
- 🎨 Setiap nama menggunakan font berbeda
- 🔵🔴 Color coding: biru (sebelum), merah (setelah)
- 📊 Detail font dan statistik lengkap

### Halaman Grid Gambar (`/gambar-grid`)
- 📸 Grid 3x3 gambar mahasiswa NIM 69-77
- 🎭 Font berbeda untuk setiap label NIM
- 🎯 Highlight khusus untuk NIM 69 (Anda)
- 🔄 Interactive: scale, image toggle, status

### Halaman Demo Font (`/fonts-demo`)
- 🎨 Showcase semua 12 font yang diimport
- 📋 Demonstrasi static vs variable fonts
- 💾 Dokumentasi lengkap setiap font

## 🚀 Cara Menjalankan

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Expo server**:
   ```bash
   npm start
   ```

3. **Test di device**:
   - Scan QR code dengan Expo Go app
   - Atau jalankan di emulator Android/iOS

## 📁 Struktur File

```
app/
├── _layout.tsx         # Font loading & navigation setup
├── index.tsx           # Halaman utama dengan navigasi
├── nama-list.tsx       # 10 nama dengan 10 font berbeda ⭐
├── gambar-grid.tsx     # Grid gambar NIM 69-77 ⭐
└── fonts-demo.tsx      # Demo semua font

assets/fonts/
├── fontBas.ttf         # Font original
├── SpaceMono-Regular.ttf
├── 1-Medium.ttf        # Static fonts
├── 2-Cursive-Bold.ttf
├── 3-BoldItalic.ttf
├── 7-Regular.ttf
├── 8-BoldItalic.ttf
├── 4-VariableFont_wght.ttf  # Variable fonts
├── 5-slnt,wght.ttf
├── 6-wdth,wght.ttf
├── 9-VariableFont_wght.ttf
└── 10-VariableFont_wght.ttf

FONTS.md               # Dokumentasi lengkap font
README-IMPLEMENTASI.md # File ini
```

## ✨ Fitur Khusus

### 🎯 NIM 69 Highlighting
- Border merah pada gambar NIM 69
- Marker "← Anda" di font mapping
- Color highlight di text

### 🔄 Interaktivitas
- **Tap to scale**: Gambar membesar saat ditekan
- **Image toggle**: Ganti ke gambar alternatif
- **Detail view**: Tap nama untuk info detail
- **Smooth animations**: Scale dan color transitions

### 📊 Data Visualization
- **Font mapping table**: Tabel NIM → Font
- **Statistics panel**: Ringkasan data
- **Status indicators**: Real-time status gambar
- **Legend**: Keterangan color coding

## 🎨 Design Highlights

- **Modern UI**: Card-based layout dengan shadows
- **Color scheme**: Blue (sebelum), Red (setelah), Yellow (highlight)
- **Typography**: 12 font berbeda untuk variety
- **Responsive**: Adaptif untuk berbagai ukuran layar
- **Accessibility**: Clear labels dan good contrast

---

**👨‍🎓 Dibuat oleh**: Baso Hamzah - NIM 69  
**🏫 Universitas**: Negeri Makassar  
**📚 Jurusan**: Teknik Informatika  
**📅 Angkatan**: 2021
