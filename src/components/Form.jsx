

/* eslint-disable react/prop-types */

import Checkbox from "./Checkbox"
import Radiobutton from "./Radiobutton"

function Form({ onSubmit, values, onChange }){

    return (
        <>
        <form className="form" onSubmit={onSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <Radiobutton onChange={onChange} checked={values.color}/>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <Checkbox onChange={onChange} values={values}/>
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    value={values.review}
                    onChange={onChange}
                ></textarea>
            </label>
                <label>Put your name here (if you feel like it):
                    <input
                        type="text"
                        name="username"
                        value={values.inputName}
                        onChange={onChange}/>
                </label>
            <label>Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}/>
            </label>
            <input 
                className="form__submit" 
                type="submit" 
                value="Submit Survey!"
            />
        </form>
        </>
    )
}

export default Form