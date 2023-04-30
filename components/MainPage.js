import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Icon } from "react-native-elements"



const MainPage = () => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sitio de información</Text>
            <Text style={styles.text}>En este sitio podrás encontrar información sobre los presidentes
             que ha tenido colombia en su historia y los consultar los diferentes departamentos con los
              que cuenta este pais</Text>
            {/* <Text style={styles.text}>Apellido: {presidents.LastName}</Text> */}
            {/* <Text style={styles.text}>Descripcion: {presidents.description}</Text> */}
            {/* <Text style={styles.text}>Periodo de inicio: {presidents.startPeriodDate}</Text> */}
            </View>
        
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default MainPage