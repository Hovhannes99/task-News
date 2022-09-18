import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const MultipleSelect = ({data = [], name = [], test, label = "label", ...props}) => {

    return (
        <FormControl sx={{m: 1, width: 170, padding: "0 0 0 0"}} size="small">
            <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                input={<OutlinedInput label={label} sx={{height: "42px", padding: "0 0 0 0"}}/>}
                renderValue={(selected) => selected.join(', ')}
                {...props}
            >
                {data.map((item) => (
                    <MenuItem key={item.id} value={item.id}  sx={{width: 172, padding: "0 0 0 0"}}>
                        <Checkbox checked={name.indexOf(item.id) > -1}/>
                        <ListItemText primary={item.name}/>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default MultipleSelect