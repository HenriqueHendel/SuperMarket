import 'react-native-gesture-handler';
import React from 'react';
import {ProductsProvider} from './hooks/products';

import Routes from './routes';

const App: React.FC = ()=>{
    return (
        <ProductsProvider>
            <Routes />
        </ProductsProvider>
    );
}

export default App;