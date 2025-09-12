import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

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
            <View style={styles.imageContainer}>
              <View style= {styles.guestButton}>
                  <Text>Guest favorite</Text>
              </View>
              <TouchableOpacity style={styles.iconButton }>
                  <Ionicons name="heart-outline" size={24} color={'white'}/>
              </TouchableOpacity>
              <Image source={item.image}  />
            </View>
                
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
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10    
  },
  imageContainer:{
    position: 'relative' , 
  },
  guestButton:{
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    zIndex:2
  },
  iconButton: {
    position: "absolute",
    top: 10,
    right: 1,
    borderRadius: 20,
    padding: 6,
    zIndex:2,
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