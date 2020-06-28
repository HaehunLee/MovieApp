import React from 'react'
import Styled from 'styled-components/native';

const Container = Styled.View`
    width : 100%;
    height: 40px;
    padding-left: 16px;
    padding-right : 16px;
    border-radius : 4px;
    background-color : #333333;
`
const InputFiled = Styled.TextInput`
    flex : 1;
    color : #FFFFFF;
`

interface Props {
    placeholder?: String;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    style? : Object;
    clearMode?: boolean;
    onChangeText?: (text:string) => void;
}

const Input = ({
    placeholder,
    keyboardType,
    secureTextEntry,
    style,
    clearMode,
    onChangeText
}: Props) => {
    return (
        <Container style={style}>
            <InputFiled
            selectionColor="#FFFFFF"
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType ? keyboardType : 'default'}
            autoCapitalize="none"
            allowFontScaling={false}
            placeholderTextColor="#FFFFFF"
            placeholder={placeholder}
            clearButtonMode={clearMode ? 'while-editing' : 'never'}
            onChangeText={onChangeText}
            />
        </Container>
    )
}

export default Input;
