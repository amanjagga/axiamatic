import { forwardRef, useRef, useState } from 'react';
import './Autocomplete.css'

const Autocomplete = forwardRef((props, ref) => {
    const [textValue, setTextValue] = useState('')
    const {suggestions, renderFn, onChangeHandler} = props;
    const [hideSuggestions, setHideSuggestions] = useState(true);
    const timerRef = useRef(null)

    function changeHandler(value) {
        console.log("vale", hideSuggestions)
        setTextValue(value)
        // setHideSuggestions(!hideSuggestions)
        onChangeHandler(value)
    }
    function blurHandler(e) {
        setHideSuggestions(true)
    }
    function focusHandler() {
        console.log("focus handler called")
        setHideSuggestions(false)
    }
    console.log("textValue", textValue)
    return (
        <div className="autocomplete" onFocus={focusHandler} onBlur={blurHandler}>
            <div className="text-box">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" ref={ref} onChange={(e) => changeHandler(e.target.value)}></input> 
            </div>
            {!hideSuggestions && 
            <div className="suggestions-wrapper">
                 <div className="suggestions">
                     {suggestions.map((suggestion) => (
                         renderFn(suggestion)
                     ))}
                 </div>
             </div>
            }
           
        </div>
    )
})

export default Autocomplete;