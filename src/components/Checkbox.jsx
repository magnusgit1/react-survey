
/* eslint-disable react/prop-types */

function Checkbox({ onChange, values }) {
    return (
        <>
        <ul>
            <li>
                <label>
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="swimming"
                        onChange={onChange}
                        checked={values.spendTime.includes("swimming")}/>
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spend-time" 
                        type="checkbox" 
                        value="bathing"
                        onChange={onChange}
                        checked={values.spendTime.includes("bathing")} />
                    Bathing
                </label>
            </li>
            <li>
                <label>
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="chatting" 
                        onChange={onChange}
                        checked={values.spendTime.includes("chatting")}/>
                    Chatting
                    </label>
            </li>
            <li>
                <label>
                    <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="noTime" 
                    onChange={onChange}
                    checked={values.spendTime.includes("noTime")}/>
                    I dont like to spend time with it
                </label>
            </li>
        </ul>
        </>
    )
}

export default Checkbox