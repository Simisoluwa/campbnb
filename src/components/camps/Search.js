import React, { useState, useContext } from 'react';
import CampContext from '../../context/camps/campContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = () => {
    const campContext = useContext(CampContext);
    const { searchCamps } = campContext;
    

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
            searchCamps(text);
            setText('');
        
    }

    const onChange = (e) => {
        setText(e.target.value)
    }
        return (
            <div>
                <form>
                    <TextField
                        id="standard-search"
                        label="Search Camps"
                        type="search"
                        margin="normal"
                        value={text}
                        onChange = {onChange}
                    /> 
                </form> 
                <Button variant="contained" color="secondary" onClick={onSubmit}>
                    Search For Camps
                </Button>  
                
            </div>
        )
    }


export default Search

