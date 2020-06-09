import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    media: {
        paddingTop: '70%',
        backgroundSize: '40%'
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        paddingTop: 20,
    },
    cardHeight: {
        height: '22rem',
    }
}));


export default function PokemonCard(props) {

    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div>
            <Card key={props.id}>
                <CardActionArea className={classes.cardHeight}>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title={props.name}
                        src={props.name}
                    />
                    <CardContent>
                        <Typography fontWeight="fontWeightBold" className={classes.title} color="textSecondary" gutterBottom>
                            {props.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textPrimary">
                            Type: <span>
                            {props.type.map(type =>
                                <span key={type}>
                                    <Chip variant="outlined" size="small" label={type} color="primary" />
                                </span>
                            )}
                        </span>
                            </Typography>
                            <Typography variant="subtitle1" color="textPrimary">
                            Weaknesses: <span>
                            {props.weaknesses.map(weakness =>
                                <span key={weakness}>
                                    <Chip variant="outlined" size="small" label={weakness} color="secondary" />
                                </span>
                            )}
                        </span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        </main>
    );
}
