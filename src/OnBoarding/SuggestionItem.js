const SuggestionItem = (props) => {
    const { addorRemoveItem, item, selectedProducts } = props;
    const isSelected = selectedProducts.find((product) => product.id === item.id)
    console.log("rendering")
    return (
        <div className="suggestion" onMouseDown={(e) => addorRemoveItem(item, e)}>
            <div className="suggestion-left">
                <img className="suggestion-logo" src={item.logo} width="20" height="20" />
                <span>{item.title}</span>
            </div>
            {isSelected && <i class="fa fa-check" aria-hidden="true"></i>}
        </div>
    )
}

export default SuggestionItem;