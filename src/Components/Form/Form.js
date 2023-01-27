import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import styles from './Form.module.css';
import Button from '@mui/material/Button';

const Form = () => {
    const [selectedDataSet, setSelectedDataSet] = useState('');

    const handleChange = (event) => {
        setSelectedDataSet(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${styles.center}`}>
            <FormControl sx={{ minWidth: 200 }}>
                <Select value={selectedDataSet} onChange={handleChange}>
                    <MenuItem value="data-set-1">Data Set 1</MenuItem>
                    <MenuItem value="data-set-2">Data Set 2</MenuItem>
                    <MenuItem value="data-set-3">Data Set 3</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="success">
                Success
            </Button>
        </form >
    );
}

export default Form;
