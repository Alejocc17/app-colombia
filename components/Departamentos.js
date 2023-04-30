import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { getDepartamentosColombia } from "../api/services";



const Departamentos = () => {

    const [departamentosColombia, setDepartamentosColombia] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const departamentosColombia = await getDepartamentosColombia();
            setDepartamentosColombia(departamentosColombia);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Departamentos de Colombia:</Text>
            {departamentosColombia.map(departament => (
                <Text key={departament.id} style={styles.text}>{departament.name}</Text>
            ))}
        </View>
    );
};

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

export default Departamentos