import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Grid, Typography} from "@material-ui/core"

const Navlink = ({linkText}) => (
  <Grid item>
    <Typography component="h2" variant="h3">
      <Link
          to={linkText}
          style={{textDecoration: "none", color: "inherit"}}
        >
        {linkText}
      </Link>
    </Typography>
  </Grid>
)

Navlink.propTypes = {
  linkText: PropTypes.string,
}

Navlink.defaultProps = {
  linkText: ``,
}

export default Navlink
