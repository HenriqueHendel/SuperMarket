import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {useProductsHook} from '../../hooks/products';
interface ProductProps {
    item: string,
    value: number,
    supermarket: string;
}
const List: React.FC = ()=>{
    const {products} = useProductsHook();

    // const [list, setList] = useState<ProductProps[]>([]);

    // Alert.alert('Henrique');

    // useEffect(()=>{
    //     setList(products)
    // }, [products]);

    return(
        <View>
            {products ? products.map(product => 
                <View key={product.item}>
                    <Text>{`${product.item}(${product.supermarket})`}</Text>
                    <Text>R${product.value}</Text>
                </View>
            ) : 
                <Text>Não há produtos cadastrados</Text>
        }
        </View>
    );
}

export default List;