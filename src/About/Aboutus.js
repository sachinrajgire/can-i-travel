import * as React from 'react';
import Typography from '@mui/material/Typography';
import './about-us.css'

export default function ActionAreaCard() {
  return (
         <div class='aboutus'>
          <Typography gutterBottom variant="h5" component="div">
            About this Application
          </Typography>
          <Typography variant="body2" color="text.secondary">
            App created by <a href="https://wynisco.com">Wynisco</a> bootcamp students
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Content based on <a href="https://immigration.com">Immigration.com </a>
           and <a href="https://immigration.com/sites/default/files/F-1%20Visa%20Holder%2C%20May%20you%20Travel%20%28OPTH-1B%20Situations%29_0.png">this</a> flow chart
          </Typography>
          </div>
  );
}