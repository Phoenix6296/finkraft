import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, Select, MenuItem } from '@mui/material';
import styles from './Form.module.css';
import Button from '@mui/material/Button';

const Form = (props) => {
    const [selectedDataSet, setSelectedDataSet] = useState('');
    const history = useNavigate();

    const handleChange = (event) => {
        setSelectedDataSet(event.target.value);
    }

    const handleSubmit = () => {
        props.onSubmitHandler(selectedDataSet);
        history('/grid');
    }

    return (
        <form className={`${styles.form} ${styles.center}`}>
            <FormControl sx={{ minWidth: 200 }}>
                <Select value={selectedDataSet === '' ? 'data-set-default' : selectedDataSet} onChange={handleChange}>
                    <MenuItem value="data-set-default">Show All</MenuItem>
                    <MenuItem value="data-set-1">Male</MenuItem>
                    <MenuItem value="data-set-2">Female</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
        </form >
    );
}

export default Form;