import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Boat from './Boat';

const boats = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    picture: require('./img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly set the Horizon 180 above all others.',
    picture: require('./img/four_winns.jpg'),
  },
  {
    name: 'Flipper 640 ST',
    description:
      'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
    picture: require('./img/flipper.jpg'),
  },
  {
    name: 'Princess V48',
    description:
      'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
    picture: require('./img/princess.jpg'),
  },
  {
    name: 'Bayliner 175 Bowrider',
    description:
      'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
    picture: require('./img/bayliner.jpg'),
  },
  {
    name: 'Fairline Targa 47',
    description:
      'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
    picture: require('./img/fairline.jpg'),
  },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
          <View style={styles.hero}>
            <View style={[styles.column, styles.heroContent]}>
              <View style={[styles.row, styles.brandRow]}>
                <View
                  style={styles.brandMark}
                  accessibilityElementsHidden
                  importantForAccessibility="no-hide-descendants"
                >
                  <MaterialCommunityIcons name="sail-boat" size={28} color="#B8E4D7" />
                </View>
                <View style={[styles.column, styles.brandCopy]}>
                  <Text style={styles.brandName}>GetABoat</Text>
                  <Text style={styles.brandTagline}>A LIFE ON THE WATER</Text>
                </View>
              </View>
              <Text accessibilityRole="header" style={styles.title}>
                Find your next{'\n'}horizon.
              </Text>
              <View style={[styles.row, styles.heroLabel]}>
                <View style={styles.statusDot} />
                <Text style={styles.heroLabelText}>YOUR NEXT CHAPTER STARTS HERE</Text>
              </View>
            </View>
          </View>

          <View style={[styles.column, styles.collection]}>
            <View style={[styles.row, styles.sectionHeading]}>
              <View style={[styles.column, styles.sectionCopy]}>
                <Text style={styles.eyebrow}>EXPLORE THE POSSIBILITIES</Text>
                <Text accessibilityRole="header" style={styles.sectionTitle}>The collection</Text>
              </View>
              <View style={styles.countBadge}>
                <Text style={styles.countText}>{boats.length} boats</Text>
              </View>
            </View>

            <View style={[styles.column, styles.boatList]}>
              {boats.map((boat, index) => (
                <Boat
                  key={boat.name}
                  name={boat.name}
                  description={boat.description}
                  picture={boat.picture}
                  number={index + 1}
                />
              ))}
            </View>

            <View style={[styles.row, styles.footer]}>
              <MaterialCommunityIcons name="anchor" size={20} color="#627981" />
              <Text style={styles.footerText}>Good days begin on the water.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // Slides 19-22: these parent styles arrange their child elements.
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  container: {
    flex: 1,
    backgroundColor: '#102F3D',
  },
  content: {
    flex: 1,
    backgroundColor: '#F2F6F6',
  },
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    backgroundColor: '#102F3D',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  heroContent: {
    width: '100%',
    maxWidth: 632,
    alignSelf: 'center',
    gap: 22,
  },
  brandRow: {
    alignItems: 'center',
    gap: 12,
  },
  brandMark: {
    width: 50,
    height: 50,
    borderRadius: 16,
    borderCurve: 'continuous',
    backgroundColor: '#214651',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandCopy: {
    flex: 1,
    gap: 3,
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  brandTagline: {
    color: '#AFC5CC',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '700',
    letterSpacing: -1.6,
  },
  heroLabel: {
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    borderCurve: 'continuous',
    backgroundColor: '#B8E4D7',
  },
  heroLabelText: {
    flexShrink: 1,
    color: '#B8E4D7',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.1,
    lineHeight: 16,
  },
  collection: {
    width: '100%',
    maxWidth: 680,
    alignSelf: 'center',
    padding: 20,
    paddingTop: 28,
    gap: 22,
  },
  // Slides 35-42: separate the heading and count, then align them vertically.
  sectionHeading: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  sectionCopy: {
    gap: 6,
    flex: 1,
  },
  eyebrow: {
    color: '#587078',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  sectionTitle: {
    color: '#102F3D',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  countBadge: {
    backgroundColor: '#E0ECE8',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderCurve: 'continuous',
  },
  countText: {
    color: '#2F5A4D',
    fontSize: 12,
    fontWeight: '600',
  },
  boatList: {
    gap: 22,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  footerText: {
    flexShrink: 1,
    color: '#627981',
    fontSize: 14,
    lineHeight: 20,
  },
});