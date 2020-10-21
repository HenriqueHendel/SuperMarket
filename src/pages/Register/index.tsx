import React, {useRef} from 'react';
import {Text, TouchableOpacity,StyleSheet, Alert} from 'react-native';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import asyncStorage from '@react-native-community/async-storage';

import Input from '../../components/Input';

import {Container} from './styles';

const Register: React.FC = ()=>{
    const formRef = useRef<FormHandles>(null);

    const handleFormSubmit = async (data: object)=>{
        await asyncStorage.setItem('@Supermarket: Product', JSON.stringify(data));
    };

    return(
        <Container>

            <Form ref={formRef} onSubmit={handleFormSubmit}>
                <Input name='item' placeholder="Digite o nome do item" />
                <Input name='value' placeholder="Digite o valor do item" />
                <Input name='supermarket' placeholder="Digite o supermercado" />
            </Form>

            <TouchableOpacity style={styles.button} onPress={()=>formRef.current?.submitForm()}>
                <Text style={styles.buttonText}>
                    Salvar Item
                </Text>
            </TouchableOpacity>

        </Container>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        width: 250,
        height: 50,
        paddingHorizontal: 16,
        backgroundColor: '#00bbff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 25
    }
})

export default Register;