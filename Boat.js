import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image, StyleSheet, Text, View } from 'react-native';

/**
 * Displays a boat's name, description, and photo.
 * @param {{ name: string, description: string, picture: import('react-native').ImageSourcePropType }} props
 */
export default function Boat({ name, description, picture }) {
  return (
    <View style={styles.boat}>
      <View style={styles.titleRow}>
        <View
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          <MaterialCommunityIcons name="sail-boat" size={24} color="#777777" />
        </View>
        <Text accessibilityRole="header" style={styles.name}>
          {name}
        </Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Image
        source={picture}
        style={styles.picture}
        resizeMode="stretch"
        accessible
        accessibilityLabel={'Photo of ' + name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  boat: {
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  name: {
    flex: 1,
    color: '#777777',
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '400',
    letterSpacing: -1,
    textTransform: 'uppercase',
  },
  description: {
    color: '#777777',
    fontSize: 14,
    lineHeight: 16,
  },
  picture: {
    width: '100%',
    maxWidth: 407,
    aspectRatio: 4 / 3,
  },
});
