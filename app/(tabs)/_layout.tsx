// import React from "react";
// import { View, TouchableOpacity } from "react-native";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { Tabs} from "expo-router";


// export default function TabBarRoot() {
//   return (
//     <Tabs
//       screenOptions={{
//         header: ({ navigation }) => (
//           <View
//             style={{
//               backgroundColor: "whitesmoke",
//               borderBottomWidth: 1,
//               borderBottomColor: "black",
//               padding: 10,
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate("index");
//               }}
//             >
//               <AntDesign name="home" size={24} color="black" />
//             </TouchableOpacity>
//           </View>
//         ),
//       }}
//     >
//       <Tabs.Screen name="index" options={{ title: "Halaman Utama" }} />
//       <Tabs.Screen name="about" options={{ title: "Tentang Saya" }} />
//     </Tabs>
//   );
// }