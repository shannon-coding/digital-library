import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Typography, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Bookshelf from "../../static/images/bookshelf.jpg";

const useStyles = makeStyles(theme => ({
  hero:{
    minHeight:"100vh",
    paddingLeft:theme.spacing(9),
    paddingRight:theme.spacing(9),
    backgroundImage: `url(${Bookshelf})`,
    backgroundSize: "100%",
    backgroundColor: theme.palette.primary.main,
    backgroundBlendMode: "multiply",
  },
  heroTitle:{
    maxWidth:'14em',
    marginBottom:theme.spacing(4),
  },
  heroSubtitle:{
    paddingTop:theme.spacing(8),
    maxWidth: "22em",
  },
  button:{
    fontSize: "28px",
    marginTop: theme.spacing(4),
  }
}));

function IndexPage(){
  const classes = useStyles();

  return(
    <Layout>
      <SEO title="Home" />
      <Grid 
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.hero}
      >
        <Grid item>
          <Typography component="h3" variant="h3" className={classes.heroTitle}>
            Simplifying a teacher's library, one book at a time.
          </Typography>
          <Typography 
            component="h5"
            variant="h5"
            className={classes.heroSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button variant="outlined" color="inherit" className={classes.button}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default IndexPage
