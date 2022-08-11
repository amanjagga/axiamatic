import Autocomplete from "../components/Autocomplete"
import Tiles from "./Tiles"
import ProductTile from './../components/ProductTile';
import Suggestions from './../mock/ProductSearch'
import { useCallback, useRef, useState } from 'react';
import './onboarding.css'
import Button from "../components/Button";
import Tag from "./../components/Tag";
import SuggestionItem from "./SuggestionItem";

const OnBoarding = (props) => {
    const [selectedProducts, setSelectedProducts] = useState([...Array(4).keys()])
    const [filteredSuggestions, setFilteredSuggestions] = useState(Suggestions)
    const autocompleteRef = useRef(null);
    const filterSuggestions = useCallback((searchQuery) => {
        console.log("search", searchQuery)
        const newSuggestions = Suggestions.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
        setFilteredSuggestions(newSuggestions)
    }, [])
    const addorRemoveItem = useCallback((item, e) => {
        e.stopPropagation()
        e.preventDefault()
        setSelectedProducts((products) => {
        const newProducts = [...products]
        let productIndex = newProducts.findIndex((product) => product.id === item.id)
        if (productIndex !== -1) {
            newProducts[productIndex] = {}
            return newProducts
        } else {
            productIndex = newProducts.findIndex((product) => !product.id)
            if (productIndex !== -1) {
            newProducts[productIndex] = item
            return newProducts
            }
        }
        })
    }, [])
    const removeProductAtIndex = useCallback((index) => {
        console.log("remvoing at", index)
        setSelectedProducts((elements) => {
            const newProducts = [...elements]
            newProducts[index] = {};
            return newProducts;
        })
    }, [])
    const productLength = selectedProducts.filter((product) => product.id).length
    return (
        <div className="onboarding">
            <Tiles selectedProducts={selectedProducts} 
                removeProductHandler={removeProductAtIndex} autocompleteRef={autocompleteRef}
                productLength={productLength}
            />
            <div className="right-section">
                <Tag text={"1 of 3"}/>
                <h2>Let's add your internal tools</h2>
                <div className="help-text">Search to quickly add products your team uses today.You'll be able to add as many as you need later but for now let's add four </div>
                <Autocomplete onChangeHandler={filterSuggestions} suggestions={filteredSuggestions}
                    ref={autocompleteRef}
                    renderFn={
                    (item) => (
                        <SuggestionItem item={item} selectedProducts={selectedProducts} addorRemoveItem={addorRemoveItem} />
                    )} />
                <div className='u-margin--vertical'>
                    <Button disabled={productLength < 4} text={'Next'}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default OnBoarding;