import '../App.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function JobCard() {
  return (
    <div className="App">
      <Box className="App-title">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Job Title
            </Typography>
            <Typography variant="h5" component="div">
              Job Description
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Skills
            </Typography>
            <Typography variant="body2">
              Company
              <br />
              <Button size="small">Apply</Button>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
    </div>
  )
}
