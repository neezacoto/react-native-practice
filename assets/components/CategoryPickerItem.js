import React from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './Apptext';
import Icon from './Icon';

// import React from "react";
// import { View, StyleSheet, TouchableOpacity } from "react-native";

// import Icon from "./Icon";
// import Text from "./Text";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;


// function CategoryPickerItem({item, onPress}) {
//     return (
//         <View style={styles.container}>
//             <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
//             <AppText style={styles.label}>{item.label}</AppText>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 30,
//         paddingVertical: 15,
//         alignItems: 'center',
//         width: "33%"
//     },
//     label: {
//         textAlign: 'center',
//         marginTop: 5
//     }
// })
// export default CategoryPickerItem;