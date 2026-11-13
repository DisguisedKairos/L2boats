import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Displays a boat's name, description, and photo.
 * @param {{ name: string, description: string, picture: import('expo-image').ImageProps['source'], number: number }} props
 */
export default function Boat({ name, description, picture, number }) {
  return (
    <View style={styles.boat}>
      <View style={styles.imageContainer}>
        <Image
          source={picture}
          style={styles.picture}
          contentFit="cover"
          accessible
          accessibilityLabel={'Photo of ' + name}
        />
        <View style={styles.saleBadge}>
          <Text style={[styles.label, styles.saleText]}>FOR SALE</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={[styles.label, styles.number]}>THE COLLECTION / {String(number).padStart(2, '0')}</Text>
        <Text accessibilityRole="header" style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Slide 14: label is combined with a more specific text style in an array.
  label: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.1,
  },
  boat: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: '#DEE7E8',
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: '#DBE7EA',
  },
  picture: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  saleBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 8,
    borderCurve: 'continuous',
    backgroundColor: '#FFFFFF',
  },
  saleText: {
    color: '#163D40',
    fontWeight: '700',
  },
  details: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 20,
    gap: 10,
  },
  number: {
    color: '#587078',
    letterSpacing: 1.5,
  },
  name: {
    color: '#102F3D',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    letterSpacing: -0.6,
  },
  description: {
    color: '#586B72',
    fontSize: 14,
    lineHeight: 22,
  },
});