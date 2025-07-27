# Font Import Documentation

## Overview
Aplikasi ini telah berhasil mengimport **12 font** yang terdiri dari:
- 2 Font original (fontBas dan SpaceMono)
- 5 Static Fonts
- 5 Variable Fonts

## Daftar Font yang Diimport

### Font Original (2 fonts)
1. **fontBas** - `../assets/fonts/fontBas.ttf`
2. **SpaceMono-Regular** - `../assets/fonts/SpaceMono-Regular.ttf`

### Static Fonts (5 fonts)
Static fonts adalah font dengan file terpisah untuk setiap font-weight:

1. **Font1-Medium** - `../assets/fonts/1-Medium.ttf`
   - Tipe: Medium weight
   - Format: Static TTF

2. **Font2-Cursive-Bold** - `../assets/fonts/2-Cursive-Bold.ttf`
   - Tipe: Cursive Bold
   - Format: Static TTF

3. **Font3-BoldItalic** - `../assets/fonts/3-BoldItalic.ttf`
   - Tipe: Bold Italic
   - Format: Static TTF

4. **Font7-Regular** - `../assets/fonts/7-Regular.ttf`
   - Tipe: Regular weight
   - Format: Static TTF

5. **Font8-BoldItalic** - `../assets/fonts/8-BoldItalic.ttf`
   - Tipe: Bold Italic
   - Format: Static TTF

### Variable Fonts (5 fonts)
Variable fonts adalah font dengan 1 file yang mendukung banyak font-weight:

1. **Font4-Variable** - `../assets/fonts/4-VariableFont_wght.ttf`
   - Mendukung: Multiple weights dalam 1 file
   - Format: Variable TTF

2. **Font5-Variable** - `../assets/fonts/5-slnt,wght.ttf`
   - Mendukung: Slant dan Weight variations
   - Format: Variable TTF

3. **Font6-Variable** - `../assets/fonts/6-wdth,wght.ttf`
   - Mendukung: Width dan Weight variations
   - Format: Variable TTF

4. **Font9-Variable** - `../assets/fonts/9-VariableFont_wght.ttf`
   - Mendukung: Multiple weights dalam 1 file
   - Format: Variable TTF

5. **Font10-Variable** - `../assets/fonts/10-VariableFont_wght.ttf`
   - Mendukung: Multiple weights dalam 1 file
   - Format: Variable TTF

## Cara Penggunaan

### Static Fonts
```tsx
<Text style={{ fontFamily: "Font1-Medium" }}>
  Text menggunakan Font1-Medium
</Text>
```

### Variable Fonts
```tsx
<Text style={{ 
  fontFamily: "Font4-Variable", 
  fontWeight: "400" // Light
}}>
  Text dengan weight 400
</Text>

<Text style={{ 
  fontFamily: "Font4-Variable", 
  fontWeight: "700" // Bold
}}>
  Text dengan weight 700
</Text>
```

## Implementasi di _layout.tsx

Semua font telah didaftarkan di file `app/_layout.tsx` menggunakan hook `useFonts` dari `expo-font`:

```tsx
const [ loaded, error ] = useFonts({
  // Font yang sudah ada
  "fontBas": require("../assets/fonts/fontBas.ttf"),
  "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  
  // 5 Static Fonts
  "Font1-Medium": require("../assets/fonts/1-Medium.ttf"),
  "Font2-Cursive-Bold": require("../assets/fonts/2-Cursive-Bold.ttf"),
  "Font3-BoldItalic": require("../assets/fonts/3-BoldItalic.ttf"),
  "Font7-Regular": require("../assets/fonts/7-Regular.ttf"),
  "Font8-BoldItalic": require("../assets/fonts/8-BoldItalic.ttf"),
  
  // 5 Variable Fonts
  "Font4-Variable": require("../assets/fonts/4-VariableFont_wght.ttf"),
  "Font5-Variable": require("../assets/fonts/5-slnt,wght.ttf"),
  "Font6-Variable": require("../assets/fonts/6-wdth,wght.ttf"),
  "Font9-Variable": require("../assets/fonts/9-VariableFont_wght.ttf"),
  "Font10-Variable": require("../assets/fonts/10-VariableFont_wght.ttf"),
});
```

## Keuntungan Menggunakan Berbagai Tipe Font

### Static Fonts:
- ✅ Ukuran file lebih kecil untuk weight tertentu
- ✅ Kompatibilitas yang baik dengan sistem lama
- ✅ Kontrol penuh atas setiap weight

### Variable Fonts:
- ✅ Fleksibilitas weight yang tidak terbatas
- ✅ Smooth transitions antar weight
- ✅ Lebih efisien untuk multiple weights
- ✅ Animasi weight yang mulus

## Files yang Dimodifikasi:
1. `app/_layout.tsx` - Import semua font menggunakan perulangan
2. `app/index.tsx` - Halaman utama dengan navigasi
3. `app/fonts-demo.tsx` - Demo lengkap semua font
4. `app/nama-list.tsx` - **BARU!** 10 nama dengan 10 font berbeda (NIM 64-68, 70-74)
5. `app/gambar-grid.tsx` - **BARU!** Grid gambar NIM 69-77 dengan font berbeda
6. `FONTS.md` - Dokumentasi ini

## Fitur Baru: 10 Nama dengan Font Berbeda (NIM 69)

### Halaman `nama-list.tsx`:
- ✅ Menampilkan 10 nama mahasiswa (5 sebelum NIM 69, 5 setelah NIM 69)
- ✅ Setiap nama menggunakan font yang berbeda (dari 10 font yang diimport)
- ✅ Font assignment menggunakan perulangan `for` dan modulo operator
- ✅ Interaktif: tap untuk melihat detail font yang digunakan
- ✅ Visual indicator untuk membedakan sebelum/setelah NIM Anda
- ✅ Animasi scale saat ditekan

### Halaman `gambar-grid.tsx`:
- ✅ Grid gambar untuk NIM 69-77 (9 gambar total)
- ✅ Setiap gambar memiliki label NIM dengan font berbeda
- ✅ Font assignment menggunakan perulangan modulo
- ✅ Interaktif: tap untuk scale dan toggle gambar alternatif
- ✅ NIM 69 (Anda) diberi highlight khusus
- ✅ Status indicator untuk setiap gambar

## Penggunaan Perulangan untuk Import Font

### Di `_layout.tsx`:
```tsx
const [ loaded, error ] = useFonts({
  // Menggunakan perulangan implisit untuk assignment
  "fontBas": require("../assets/fonts/fontBas.ttf"),
  "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  // ... font lainnya
});
```

### Di komponen aplikasi:
```tsx
// Array font untuk perulangan
const fontList = [
  "fontBas", "SpaceMono-Regular", "Font1-Medium",
  "Font2-Cursive-Bold", "Font3-BoldItalic", "Font7-Regular",
  "Font8-BoldItalic", "Font4-Variable", "Font5-Variable", "Font6-Variable"
];

// Generate font mapping menggunakan perulangan
const generateFontMapping = () => {
  const fontMapping = {};
  for (let i = 0; i < studentData.length; i++) {
    fontMapping[studentData[i].nim] = fontList[i % fontList.length];
  }
  return fontMapping;
};
```

## Testing
Untuk memastikan semua font berfungsi:
1. Jalankan aplikasi dengan `npm start`
2. Buka halaman utama untuk navigasi
3. **BARU!** Kunjungi "📝 Lihat 10 Nama" untuk melihat implementasi 10 nama dengan font berbeda
4. **BARU!** Kunjungi "📸 Grid Gambar NIM 69-77" untuk grid gambar interaktif
5. Kunjungi "🎨 Demo Semua Font" untuk melihat semua 12 font
