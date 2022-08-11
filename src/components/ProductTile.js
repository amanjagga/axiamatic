import './ProductTile.css'

const ProductTile = (props) => {
    const {isProductAdded, title, logo, autocompleteRef, removeProductHandler } = props;
    console.log("auto", autocompleteRef.current)
    function addHandler() {
        autocompleteRef.current.focus()
    }
    return (
        <div className="product-tile">
            {!isProductAdded ? 
                <div className="plus-icon" onClick={addHandler}>
                +
                </div>
            :
                <>
                    <img src={logo} width="50" height="50" alt={title}></img>
                    <div className="title">{title}</div>
                    <div className="remove-cta" onClick={removeProductHandler}>
                    <i class="fa fa-times cross-icon" aria-hidden="true"></i>  Remove</div>
                </>
            }
        </div>
    )
}

// const AddIcon = (props) => {
//     return (
        
//     )
// }

// const 

export default ProductTile;