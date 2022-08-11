import ProductTile from "../components/ProductTile";
import './tiles.css'
const Tiles = (props) => {
    const { selectedProducts, removeProductHandler, autocompleteRef, productLength } = props;
    console.log("seles", selectedProducts.map((product) => <ProductTile isProductAdded={!!product.id} title={product.title} logo={product.logo} />))
    return (
        <div>
            <div className="tiles">
            {selectedProducts.map((product, index) => (
                <ProductTile isProductAdded={!!product.id} title={product.title} logo={product.logo}
                    removeProductHandler={() => removeProductHandler(index)} autocompleteRef={autocompleteRef}
                 />
            ))}
            </div>
            <div className="product-length">{productLength} products added</div>
        </div>
        
    )
    
}

export default Tiles;