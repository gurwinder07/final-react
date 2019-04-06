import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div className ="Header">
    <h1>Restaurant</h1>
      <Button variant="contained" className={classes.button}>
      search
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
      categories
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
      city/location
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
      sory by
      </Button>

      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
      <div style={{ display: 'inline-flex', width: '100%' }}>
          <TextField
              id="standard-search"
              label="Search field"
              type="search"
              margin="normal"
              variant="outlined"
              fullWidth
              style={{margin: '10px'}}
              name="search"
              onChange={props.onChange}
          />
          <Button name="search" onClick={props.onClick} style={{width: '30%', margin: '10px', verticalAlign: 'center'}} variant="contained">
              Search Now
          </Button>
      </div>
    </div>


  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
