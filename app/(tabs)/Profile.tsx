import { StyleSheet, Text, View, Image, ScrollView, Platform, Pressable, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Profile() {
  const router = useRouter();
  return (        
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerIcons}>
        <View style={styles.icon}>
          <Ionicons name="search-outline" size={20}/>
        </View>
        <View style={styles.icon}>
          <Ionicons name="settings" size={20}/>
        </View>
      </View>

      <View style={styles.profileWrapper}>
        <Text style={styles.pageTitle}>Profile</Text>
        <View style={styles.profileContainer}>
          <View style={styles.profileImage}>
            <Text style={styles.profileInitial}>F</Text>
          </View>
          <Text style={styles.name}>Faizan</Text>
          <Text style={styles.guest}>Guest</Text>
        </View>

        <View style={styles.container2}>
          <View style={styles.box}>
            <Image style={styles.boxImage} source={require('../../assets/images/85bcad890e12283f64a20921f06d56a55beb7807.png')} />
            <Text style={styles.boxText}>Connections</Text>
          </View>
          <View style={styles.box}>
            <Image style={styles.boxImage} source={require('../../assets/images/360feeda1295098c6fe53c2b6cce41389cd7d75c.png')} />
            <Text style={styles.boxText}>Past trips</Text>
          </View>
        </View>

        <View style={styles.host}>
          <Image source={require('../../assets/images/house.png')} style={{width: 40, height: 40, resizeMode: 'contain'}} />
          <View>
            <Text style={styles.hostTitle}>Become a Host</Text>
            <Text style={styles.hostSubtitle}>It is easy to start hosting and earn income.</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuList}>
        <MenuItem title="Account settings" router={router} />
        <MenuItem title="Get help" router={router} />
        <Pressable style={styles.menuItem} onPress={() => router.push('/(pages)/ProfileDetails')}>
          <View style={styles.menuLeft}>
            <Ionicons name='hand-left-outline' size={24}/>
            <Text style={styles.menuText}>View profile</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={24} color={'gray'} />
        </Pressable>
        <MenuItem title="Privacy" router={router} />
        <View style={styles.separator} />
        <MenuItem title="Refer a host" router={router} />
        <MenuItem title="Find a co-host" router={router} />
        <MenuItem title="Legal" router={router} />
        <MenuItem title="Log out" router={router} />
      </View>     
    </ScrollView>
  )
}

const MenuItem = ({ title, router }: { title: string, router: any }) => (
  <View style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <Ionicons name='hand-left-outline' size={24}/>
      <Text style={styles.menuText}>{title}</Text>
    </View>
    <Ionicons name='chevron-forward-outline' size={24} color={'gray'} />
  </View>
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? 40 : 60,
  },
  headerIcons:{
    flexDirection: 'row', 
    gap: 10, 
    justifyContent:'flex-end', 
    marginRight: 20
  },
  icon:{
    backgroundColor:'#dad8d8ff', 
    padding:8, 
    borderRadius:20
  },
  pageTitle:{
    fontSize :32, 
    fontWeight:'500', 
    marginBottom:20
  },
  profileWrapper:{
    marginHorizontal:20, 
  },
  profileContainer:{
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#232323',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 24,
    paddingVertical: 20,
  },
  profileImage:{
    backgroundColor:'#000',
    borderRadius: 55,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileInitial:{
    fontSize:40, 
    color:"#FFFFFF", 
    fontWeight:'700'
  },
  name:{
    fontSize:24,
    fontWeight: "600",
    marginTop: 10
  },
  guest:{
    marginTop:5, 
    color:'#555'
  },
  container2:{
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent:'space-between'
  },
  box:{
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#232323',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 13,
    height:160,
    width: (width - 60) / 2, 
  },
  boxImage:{
    height:100, 
    width:100, 
    resizeMode: 'contain'
  },
  boxText:{
    fontWeight:'500', 
    marginTop: 8
  },
  host:{
    flexDirection:'row',  
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    shadowColor: '#232323',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom:20,
    borderRadius: 20,
    gap:10,
    width: '100%',
    padding: 16,
    marginTop:30
  },
  hostTitle:{
    fontWeight: 'bold'
  },
  hostSubtitle:{
    color:'#555',
    fontSize: 13
  },
  menuList:{
    gap:20, 
    paddingHorizontal:30, 
    marginTop:20
  },
  menuItem:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuLeft:{
    flexDirection:'row', 
    gap:20, 
    alignItems:'center'
  },
  menuText:{
    fontSize:14, 
    fontWeight:'400'
  },
  separator:{
    borderBottomColor: "#ccc", 
    borderBottomWidth: 1, 
    marginVertical: 10
  }
});
