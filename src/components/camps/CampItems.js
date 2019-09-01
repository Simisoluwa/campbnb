import React from 'react';
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography } from '@material-ui/core';

const CampItems = ({ camp: { name, image, description, price}}) => {

    return (
        <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              C B
            </Avatar>
          }
          title={<h2>{name}</h2>}
        />
        <CardMedia
          image={image}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
          {<h3>${price}</h3>} 
          </Typography>
        </CardContent>
      </Card>
    )
}

export default CampItems
