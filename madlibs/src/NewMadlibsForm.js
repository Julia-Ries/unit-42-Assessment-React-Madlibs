import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';



const NewMadLibsForm = ({createMadlib}) => {
    const [formData, setFormData] = useState({
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    });

    const handleChange = e => {
        const{name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = e => {
        e.preventDefault();
        createMadlib({...formData, id:uuid()})
        setFormData({noun:'', noun2: '', adjective: '', color: ''});
    };
    return (
        <div>
            <form onSubmit={gatherInput}>
            
                <input 
                    id="noun"
                    name='noun'
                    type= 'text'
                    placeholder='noun'
                    value = {formData.noun}
                    onChange={handleChange}
                />
                
                <input 
                    id="noun2"
                    name='noun2'
                    type= 'text'
                    placeholder='noun 2'
                    value = {formData.noun2}
                    onChange={handleChange}
                />
               
                <input 
                    id="adjective"
                    name='adjective'
                    type= 'text'
                    placeholder='adjective'
                    value = {formData.adjective}
                    onChange={handleChange}
                />
                
                 <input 
                    id="color"
                    name='color'
                    type= 'text'
                    placeholder='color'
                    value = {formData.color}
                    onChange={handleChange}
                />
                <button id="NewMadlibButton">Get Story!</button>
            </form>

        </div>
    );
}


export default NewMadLibsForm;