import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




function PersonalSection() {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            xs=8
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            xs=4
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            xs=4
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            xs=8
          </Grid>
        </Grid>
      </Box>
    )
}

export default PersonalSection;