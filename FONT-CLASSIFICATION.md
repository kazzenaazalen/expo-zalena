# ✅ Klasifikasi Font Sesuai Persyaratan

## 📋 **Persyaratan:**
- ✅ **5 font harus bertipe statis** (file terpisah untuk tiap font-weight)
- ✅ **5 font harus bertipe variable** (1 file mendukung banyak font-weight)

## 🎯 **Implementasi Lengkap:**

### 📁 **5 Static Fonts** (File terpisah untuk setiap weight):

| No | Font Name | File | Tipe Weight | Keterangan |
|----|-----------|------|-------------|------------|
| 1  | `Font1-Medium` | `1-Medium.ttf` | Medium | Static font khusus medium weight |
| 2  | `Font2-Cursive-Bold` | `2-Cursive-Bold.ttf` | Bold | Static font khusus bold weight |
| 3  | `Font3-BoldItalic` | `3-BoldItalic.ttf` | Bold Italic | Static font khusus bold italic |
| 4  | `Font7-Regular` | `7-Regular.ttf` | Regular | Static font khusus regular weight |
| 5  | `Font8-BoldItalic` | `8-BoldItalic.ttf` | Bold Italic | Static font khusus bold italic |

### 🔄 **5 Variable Fonts** (1 file, multiple weights):

| No | Font Name | File | Variasi | Keterangan |
|----|-----------|------|---------|------------|
| 1  | `Font4-Variable` | `4-VariableFont_wght.ttf` | Weight | Variable font dengan multiple weights |
| 2  | `Font5-Variable` | `5-slnt,wght.ttf` | Slant + Weight | Variable font dengan slant dan weight |
| 3  | `Font6-Variable` | `6-wdth,wght.ttf` | Width + Weight | Variable font dengan width dan weight |
| 4  | `Font9-Variable` | `9-VariableFont_wght.ttf` | Weight | Variable font dengan multiple weights |
| 5  | `Font10-Variable` | `10-VariableFont_wght.ttf` | Weight | Variable font dengan multiple weights |

## 💡 **Perbedaan Static vs Variable:**

### **Static Fonts:**
```css
/* Setiap weight membutuhkan file terpisah */
Font1-Medium.ttf        ← Hanya untuk medium weight
Font2-Cursive-Bold.ttf  ← Hanya untuk bold weight
Font3-BoldItalic.ttf    ← Hanya untuk bold italic
```

### **Variable Fonts:**
```css
/* Satu file mendukung banyak weight */
4-VariableFont_wght.ttf ← Weight 100-900 dalam 1 file
5-slnt,wght.ttf        ← Slant + Weight dalam 1 file
6-wdth,wght.ttf        ← Width + Weight dalam 1 file
```

## 🔧 **Implementasi di Kode:**

### **Di `_layout.tsx`:**
```tsx
const [ loaded, error ] = useFonts({
  // 5 Static Fonts (file terpisah untuk setiap font-weight)
  "Font1-Medium": require("../assets/fonts/1-Medium.ttf"),
  "Font2-Cursive-Bold": require("../assets/fonts/2-Cursive-Bold.ttf"),
  "Font3-BoldItalic": require("../assets/fonts/3-BoldItalic.ttf"),
  "Font7-Regular": require("../assets/fonts/7-Regular.ttf"),
  "Font8-BoldItalic": require("../assets/fonts/8-BoldItalic.ttf"),
  
  // 5 Variable Fonts (1 file mendukung banyak font-weight)
  "Font4-Variable": require("../assets/fonts/4-VariableFont_wght.ttf"),
  "Font5-Variable": require("../assets/fonts/5-slnt,wght.ttf"),
  "Font6-Variable": require("../assets/fonts/6-wdth,wght.ttf"),
  "Font9-Variable": require("../assets/fonts/9-VariableFont_wght.ttf"),
  "Font10-Variable": require("../assets/fonts/10-VariableFont_wght.ttf"),
});
```

### **Penggunaan Variable Fonts:**
```tsx
// Variable font dapat menggunakan fontWeight dinamis
<Text style={{
  fontFamily: "Font4-Variable",
  fontWeight: "300"  // Light
}}>
  Text dengan weight 300
</Text>

<Text style={{
  fontFamily: "Font4-Variable", 
  fontWeight: "700"  // Bold
}}>
  Text dengan weight 700 (font yang sama!)
</Text>
```

### **Penggunaan Static Fonts:**
```tsx
// Static font sudah fix weight-nya
<Text style={{
  fontFamily: "Font1-Medium"  // Sudah medium, tidak bisa diubah
}}>
  Text dengan medium weight
</Text>

<Text style={{
  fontFamily: "Font2-Cursive-Bold"  // Sudah bold, tidak bisa diubah
}}>
  Text dengan bold weight
</Text>
```

## 📊 **Mapping dalam Aplikasi:**

### **Halaman `nama-list.tsx` (10 nama):**
- **NIM 64**: Font1-Medium (Static)
- **NIM 65**: Font2-Cursive-Bold (Static)
- **NIM 66**: Font3-BoldItalic (Static)
- **NIM 67**: Font7-Regular (Static)
- **NIM 68**: Font8-BoldItalic (Static)
- **NIM 70**: Font4-Variable (Variable)
- **NIM 71**: Font5-Variable (Variable)
- **NIM 72**: Font6-Variable (Variable)
- **NIM 73**: Font9-Variable (Variable)
- **NIM 74**: Font10-Variable (Variable)

### **Halaman `gambar-grid.tsx` (11 gambar):**
11 gambar menggunakan 10 font dengan modulo cycling:
- NIM 64-68: Menggunakan 5 static fonts
- NIM 69: Font1-Medium (cycling kembali ke awal)
- NIM 70-74: Menggunakan 5 variable fonts

## ✅ **Status Compliance:**

| Persyaratan | Status | Implementasi |
|-------------|--------|--------------|
| 5 Static Fonts | ✅ **SESUAI** | Font1-Medium, Font2-Cursive-Bold, Font3-BoldItalic, Font7-Regular, Font8-BoldItalic |
| 5 Variable Fonts | ✅ **SESUAI** | Font4-Variable, Font5-Variable, Font6-Variable, Font9-Variable, Font10-Variable |
| File terpisah untuk static | ✅ **SESUAI** | Setiap static font punya file .ttf sendiri |
| 1 file untuk variable | ✅ **SESUAI** | Setiap variable font adalah 1 file yang mendukung multiple weights |

## 🎉 **KESIMPULAN:**
**YA, proyek Anda sudah 100% sesuai dengan persyaratan!**
- ✅ 5 static fonts dengan file terpisah untuk setiap weight
- ✅ 5 variable fonts dengan 1 file yang mendukung multiple weights
- ✅ Total 10 font sesuai permintaan
