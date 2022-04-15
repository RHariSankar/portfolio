import { Container, Divider, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import Typist from "react-typist";
import Timeline from './timeline';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  // textAlign: 'center', 
  color: theme.palette.text.secondary,
}));

const imageStyle = {
  height: "100%",
  width: "100%",
  borderRadius: "10px"
}

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
      <Item>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
          <Grid item md={3}>

            <img src="profilePic.jpg" style={imageStyle}></img>

          </Grid>
          <Grid item md={9}>
            <Grid container direction="column" justifyContent="space-between" alignItems="stretch" spacing={5}>
              <Grid item>
                <Typography variant='h3'>R HARISANKAR</Typography>
              </Grid>
              <Grid item>
                <Typist >
                  I'm a mostly self taught curious software engineer, with background in full stack development.<br />
                  I have a bachelors degree in Computer science and Engineering from College of Engineering, Trivandrum, where I started my coding journey.<br />
                  I have interests in Machine learing and Deep learning domains and have tried a bit on the same.<br />
                  Also an amature experience in IOT/embedded system.<br />
                  Currently I am working for Avalara Technologies Pvt. Ltd. where i am mostly working in a full stack field.<br />
                </Typist>
              </Grid>
              <Grid item>
                <GitHub></GitHub>
                <LinkedIn></LinkedIn>
                <Instagram></Instagram>
                <AttachFileRoundedIcon></AttachFileRoundedIcon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Item>
      <Item>
        <Timeline></Timeline>
      </Item>


    </div>

  )

}