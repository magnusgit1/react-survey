
/* eslint-disable react/prop-types */

function Radiobutton({ onChange, checked }) {
    return (
        <>
        <ul>
            <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={onChange} checked={checked === "1"}/>
                <label htmlFor="color-one">1</label>
            </li>
            <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={onChange} checked={checked === "2"} />
                <label htmlFor="color-two">2</label>
            </li>
            <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={onChange} checked={checked === "3"}/>
                <label htmlFor="color-three">3</label>
            </li>
            <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={onChange} checked={checked === "4"}/>
                <label htmlFor="color-four">4</label>
            </li>
        </ul>
        </>
    )
}

export default Radiobutton