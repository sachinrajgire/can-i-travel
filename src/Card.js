import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css'

export default function BasicCard({label, subHeading, textBody, bgColor, textColor}) {

  return (
    <Card className="card-class" style={{backgroundColor:`${bgColor}`, color:`${textColor}`}} >
      <CardContent>
        <Typography variant="h5" component="div">
        {label}
        </Typography>
        <Typography sx={{ mb: 1.1 }} style={{ backgroundColor:`${bgColor}`, color:`${textColor}`}}>
          {subHeading}
        </Typography>
        <Typography style={{textAlign: "justify"}} variant="body1">
          <span dangerouslySetInnerHTML={{__html: textBody }} />
        </Typography>
      </CardContent>
      <CardActions >
        <Button style={{backgroundColor:`${bgColor}`}} size="small"> <a rel="noreferrer" href="https://www.immigration.com/blogs/f-1-students-travel-during-opt-or-h-1b-process" target="_blank"> Learn More </a></Button>
      </CardActions>
    </Card>
  );
}
