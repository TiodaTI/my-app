import React from "react"
import { StyleSheet, View } from "react-native"

interface IUserMenu {
    children : React.ReactNode
}

const UserMenu = ({children}: IUserMenu) =>{
    return (
        <View style={Styles.userCard}>
            {children}
        </View>
    )
}

const Styles = StyleSheet.create({
    userCard :{
    width: '45%',          // Quase metade da tela (2 colunas)
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    minWidth: 300,
    }
})

export default UserMenu