import { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import styles from './Form.module.css';
import Button from '@mui/material/Button';

const Form = (props) => {
    const [selectedDataSet, setSelectedDataSet] = useState('');

    const handleChange = (event) => {
        setSelectedDataSet(event.target.value);
    }

    const handleSubmit = (event) => {
        props.onSubmitHandler(selectedDataSet);
        console.log(selectedDataSet, "Form.js");
        event.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${styles.center}`}>
            <FormControl sx={{ minWidth: 200 }}>
                <Select value={selectedDataSet} onChange={handleChange}>
                    <MenuItem value="data-set-1">Male</MenuItem>
                    <MenuItem value="data-set-2">Female</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
        </form >
    );
}
export default Form;