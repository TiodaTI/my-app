
import MoreButton from '@/components/MoreButton';
import UserMenu from '@/components/UserMenu';
import axios from 'axios';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';



interface IUsers {
  createdAt: string
  name: string
  email: string
  id: string
  avatar: string
}


export default function HomeScreen() {
const [Users, setUsers] = React.useState<IUsers[]>([])

const GetUsers = async () =>{
  const { data } = await axios.get("https://682c6002d29df7a95be6c034.mockapi.io/api/Alunos")
  setUsers(data)
  console.log(data)
}

const ListUsers = () =>{
   return Users.map(User => {
    return(
      <UserMenu>
        <Image 
          source={{ uri: User.avatar }} 
          style={{ width: 100, height: 100, borderRadius: 10, marginBottom: 10,}} 
        />
        <Text>ID: {User.id}</Text>
        <Text>E-mail: {User.email}</Text>
        <Text style={{marginBottom: 10}}>Nome: {User.name}</Text>
        <MoreButton 
          title = "Ver Mais"
        />
      </UserMenu>
      
    )
   })
}

React.useEffect(() => {
   GetUsers()
}, [])

  return (
   <ScrollView style={{backgroundColor: 'black'}}>
   <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around', padding:10}}>
      {ListUsers()}
   </View>
   </ScrollView>
  );
}
