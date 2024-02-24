import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = ({ image, title, price, description, onClick}) => {

    return (
        <Card onClick={onClick} sx={{ maxWidth: 400, maxHeight: 700 }}>
            <CardMedia
                sx={{ height: 500, width: 400 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography color={{ color: "blue" }} gutterBottom variant="h6" component="div">
                    {title.substring(0, 20)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.substring(0, 45)}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant='h5' size="small">{price}</Typography>
                <Button variant='outlined' size="small">buy Now</Button>
            </CardActions>
        </Card>
    );
}
export default Cards