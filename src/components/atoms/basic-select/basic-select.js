import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = ({data=[],nameOfSelect, ...props})=> {

    return (
        <Box>
            <FormControl fullWidth size="small" sx={{m: 1, maxWidth: 170 }}>
                <InputLabel id="demo-simple-select-label">{nameOfSelect}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...props}
                >
                    {data.map((item)=>(
                        <MenuItem value={item.time}>{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default BasicSelect