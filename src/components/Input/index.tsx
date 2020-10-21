import React, {useEffect, useRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Container} from './styles';

interface InputProps extends TextInputProps {
    name: string;
}

interface InputValueReference {
    value: string;
}

const Input: React.FC<InputProps> = ({name, ...rest})=>{
    const {registerField, fieldName, defaultValue=''} = useField(name);
    const inputValueRef = useRef<InputValueReference>({value: defaultValue});

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value'
        });

    }, [registerField, fieldName]);

    return(
        <Container>
            <TextInput {...rest} onChangeText={value => inputValueRef.current.value = value} />
        </Container>
    );
}

export default Input;