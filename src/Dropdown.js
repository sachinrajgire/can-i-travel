import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

import './App.css'

export default function Dropdown({ label, choices, parameter, setParameter }) {

    const handleChange = (event) => {
        setParameter(event.target.value);
    };

    return (
        <div className="drop">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth={true}>
                    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={parameter === null ? " " : parameter}
                        label={label}
                        onChange={handleChange}
                    >
                        {Object.entries(choices).map((item, index) => {
                            return <MenuItem key={index} value={item[0]}>{item[1]}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

Dropdown.propTypes = {
    choices: PropTypes.object.isRequired,
}
