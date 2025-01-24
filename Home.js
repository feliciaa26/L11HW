import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';

const Home = ({ route, navigation }) => {
    const { userData } = route.params;

    return (
        <ScrollView contentContainerStyle={{ flex: 1, padding: 20, backgroundColor: '#FFECF7' }}>
            <Text style={styles.headerText}>ISU Championships 2025</Text>
            <Image style ={styles.image}
                   source={{ uri: 'https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/usafs.sidearmsports.com/images/2019/11/12/Mariah_Bell_Free_Skate_3__16x9.jpg' }}
            />
            <View style={styles.infoBox}>
                <Text style={styles.subHeaderText}>Registered User Details:</Text>
                <Text>Username: {userData.name}</Text>
                <Text>Email: {userData.email}</Text>
                <Text>Phone: {userData.phone}</Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.subHeaderText}>Competition Information:</Text>
                <Text>The Figure Skating Competition will take place on the 15th of February, 2025. Please arrive at the venue 1 hour before the start time. More details will be sent via email.</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace('Register')}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    infoBox: {
        padding: 20,
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        borderColor: '#FFB6C1',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF6F91',
    },
    subHeaderText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#FF6F91',
    },
    button: {
        backgroundColor: '#FF6F91',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 375,
        height: 200,
        alignSelf: 'center',
        borderRadius: 5,
        marginBottom: 20
    }
});

export default Home;
