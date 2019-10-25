import React, {useState} from 'react'
import PropTypes from 'prop-types'

const IngredientEditor = props => {
    const [formData, setFormData] = useState({
        name:"",
        type:""
    })

    const {name, type} = formData;

    return (
        <div>

        <table>
            <tr>
                <td>dfas</td>
                <td>dfas</td>
                <td>dfas</td>
            </tr>
        </table>

            <form>
                <input
                type="text"
                placeholder="name"
                name="name"
                value={name}
                />
                <select name="type" value={type}>
                    <option value="Meat">Meat</option> 
                    <option value="Fish">Fish</option> 
                    <option value="Vegetable">Vegetable</option> 
                    <option value="Fruit">Fruit</option> 
                    <option value="HerbsnSpices">Herbs n' Spices</option> 
                    <option value="NutsnSeeds">Nuts n' Seeds</option> 
                    <option value="Sauces">Sauces</option> 
                    <option value="Vegetable">Vegetable</option> 
                </select>
            </form>
        </div>
    )
}

IngredientEditor.propTypes = {

}

export default IngredientEditor
