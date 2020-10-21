import React, {useContext, createContext, useState, useCallback} from 'react';

interface ProductsProps {
    item: string;
    value: number;
    supermarket: string;
}

interface ContextProps {
    products: ProductsProps[];
    setProducts(data: ProductsProps): void
}

const ProductsContext = createContext<ContextProps>({} as ContextProps);

export const ProductsProvider: React.FC = ({children})=>{
    const [products, setTheProducts] = useState<ProductsProps[]>([]);

    const setProducts = useCallback(({item, value, supermarket}: ProductsProps)=>{
        setTheProducts([...products, {item, value, supermarket}]);
    }, [products]);

    return(
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductsHook = ()=>{
    const context = useContext(ProductsContext);

    if(!context){
        throw new Error('ProductsContext must be used within a ProductsProvider');
    }

    return context;
}