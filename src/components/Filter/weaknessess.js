import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
        backgroundColor: 'white',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        paddingLeft: 10,
    }
}));

const WEAKNESSES_LIST = [
    "Bug",
    "Dark",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water"
];

export default function WeaknessesFilter(props) {

    const classes = useStyles();
    const weaknesses = WEAKNESSES_LIST;

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="weakness-filter" className={classes.input}>Weakness</InputLabel>
                <Select variant="filled"
                        inputProps={{
                            name: 'weakness-filter',
                            id: 'weakness-filter',
                        }}
                        value={props.value}
                        onChange={props.onChange}>
                    <MenuItem value={0}>No filter</MenuItem>
                    {weaknesses.map((value) => {
                        return <MenuItem key={value} value={value}>{value}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
