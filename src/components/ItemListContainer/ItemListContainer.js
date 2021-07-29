import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = () =>{
    const [cantCompra, setCantCompra] = useState(0);

    const onAdd = ( cantidad ) => {
        setCantCompra( cantidad );
    };
    return(
        <div>
        {cantCompra === 0 &&
            <ItemCount 
                initial={1}
                onAdd={onAdd}
            />
        }
        </div>
    );
}

export default ItemListContainer;