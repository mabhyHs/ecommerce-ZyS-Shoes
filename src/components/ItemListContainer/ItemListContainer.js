import './ItemListContainer.css';

const ItemListContainer = (props) =>{
    const{ greeting, color, fontSize } = props;

    return(
    <h1 style ={{ color, fontSize}}>
           {greeting}
    </h1>    
    );
}

export default ItemListContainer;