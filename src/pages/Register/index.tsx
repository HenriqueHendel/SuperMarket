import React, {useRef} from 'react';
import {Text, TouchableOpacity,StyleSheet, Alert} from 'react-native';

import {useProductsHook} from '../../hooks/products';

import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';


import Input from '../../components/Input';

import {Container} from './styles';

interface ProductProps {
    item: string;
    value: number;
    supermarket: string;
}

const Register: React.FC = ()=>{
    const {setProducts} = useProductsHook();
    const {products} = useProductsHook();
    const formRef = useRef<FormHandles>(null);

    const handleFormSubmit = async (data: ProductProps)=>{
        data.value = Number(data.value);
        console.log(data);
        setProducts(data);
    };

    const show = async() =>{
        console.log(products);
    }

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

            <TouchableOpacity style={styles.button} onPress={show}>
                <Text style={styles.buttonText}>
                Show Storage
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