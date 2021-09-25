// import { Button } from "bootstrap";
import React,{ useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
//import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';

const MaterialUiIcons=(props)=>{
    const [inc,setinc]=useState(0);
    const incfun=()=>{
        setinc(inc+1);
    }
    const decfun=()=>{
    if(inc>0){
        setinc(inc-1);
    }
    else{
        alert("Sorry zero reached");
        setinc(0);
    }
    }
return(
    <>
    <h1>{inc}</h1>
    <Button onClick={incfun} style={{backgroundColor:"lightgray"}}><AddIcon/></Button>
    <Button onClick={decfun} style={{backgroundColor:"lightblue"}}><DeleteIcon/></Button>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Checkbox  name="gilad" />
      <div >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon  />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </div>
    <form  noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <form  noValidate>
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
    <Select
        //   value={age}
        //   onChange={handleChange}
        //   displayEmpty
        //   className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
       / >
       <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
        //   value={age}
        //   onChange={handleChange}
        //   displayEmpty
        //   className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Slider  aria-labelledby="continuous-slider" />
        <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
        <Switch
      // focusVisibleClassName={classes.focusVisible}
      // disableRipple
      // classes={
      //   root: classes.root,
      //   switchBase: classes.switchBase,
      //   thumb: classes.thumb,
      //   track: classes.track,
      //   checked: classes.checked,
      // }
/>
    <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>


    </>
)
}
export default MaterialUiIcons;