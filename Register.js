import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = () => {
        if (!name || !email || !phone) {
            alert('Please fill in all fields');
            return;
        }

        const userData = { name, email, phone };

        fetch('https://jsonhost.com/json/5e0f688946585bff26818f1d7139f0f1', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "gknpkhw975tjvhnbg4fo6n30uyqanqcr",
            },
            body: JSON.stringify({ newUser: userData }),
        }).then(() => {
            navigation.replace('Home', { userData });
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.headerText}>Register for ISU Championships 2025</Text>
            <Image style={styles.image}
                   source={{ uri: 'https://isu-d8g8b4b7ece7aphs.a03.azurefd.net/isudamcontainer/uploads/images/event/logo/3pojzyz2t7tlmw4lh68oi3jbkap6q4223rez6akt5gb8omqgx8.jpg' }}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                value={phone}
                onChangeText={setPhone}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFECF7',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF6F91',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFB6C1',
        backgroundColor: '#FFF',
        marginBottom: 15,
        padding: 12,
        borderRadius: 5,
        fontSize: 16,
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

export default Register;