import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 250,
        backgroundColor: 'white',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        paddingLeft: 10,
    },
}));

const Type = [
    "Bug",
    "Electric",
    "Dragon",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water",
];

export default function TypeFilter(props) {

    const classes = useStyles();

    let types = Type;

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="weakness-filter" className={classes.input}>Type</InputLabel>
                <Select variant="filled"
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        inputProps={{
                            name: 'type-filter',
                            id: 'type-filter',
                        }}
                        value={props.value}
                        onChange={props.onChange}>
                    {<MenuItem value={0}>No filter</MenuItem>}
                    {types.map((value) => {
                        return <MenuItem key={value} value={value}>{value}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
