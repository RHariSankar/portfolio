import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import Timeline from './timeline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin:theme.spacing(1),
  // textAlign: 'center', 
  color: theme.palette.text.secondary,
}));

export const darkTheme = createTheme({  
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function Home() {
  return (
    <div>
      <Grid container spacing={0.5} >
        <Grid item xs={10} md={10} lg={10} style={{ textAlign: "left" }}>
          <Item>
            <Typography variant="h6" component="div" gutterBottom>
              Harisankar R
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2} md={2} lg={2} style={{ textAlign: "right" }}>
          <Item>
            <Button startIcon={<AttachFileRoundedIcon />} size="medium">
              Resume
            </Button>
          </Item>
        </Grid>
      </Grid>
      <Item>
      <Timeline></Timeline>
      </Item>
      

    </div>

  )

}