import { View, Text, FlatList, Image, StyleSheet, } from "react-native";

export const Section = ({ title, data }: { title: string; data: any[] }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title} ›</Text>

    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image}  />
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      )}
    />
  </View>
);
export default Section;
const styles =  StyleSheet.create({
  section: {
    marginVertical: 12,
    paddingHorizontal:20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    marginRight: 12,
    overflow: 'hidden'
  },
 
  location: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop:4
  },
});