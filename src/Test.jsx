import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



// <div className="nav" style={{float:"right",marginTop:"80px",marginRight:"40px"}}>
//         <div className="container-fluid nav bg" >
//             <div className="row">
//                 <div className="col-10 mx-auto">    
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid" >
     
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav  mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink exact activeClassName="active_class " className="nav-link " aria-current="page" to="/menu">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink exact activeClassName="active_class " className="nav-link" to="/post">Post</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink exact activeClassName="active_class " className="nav-link" to="/about">About</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink exact activeClassName="active_class " className="nav-link" to="/contact">Contact</NavLink>
//         </li>
  
//     </ul>
    
//     </div>
//   </div>
// </nav>

//   </div>
//             </div>
//         </div>
//         </div>
        

// import React, {useState} from 'react';
// import Button from '@material-ui/core/Button';
// import Signup from './Signup';
// import { NavLink,Redirect, useHistory } from 'react-router-dom';
// import "./Login.css";

// const Frontpage = (props) => {
//     const [state, setstate] = useState({ customer:{
//       loemail: props.email,
//      lopass: props.password
//     }
//     })
//     let history=useHistory();
//     const fun=()=>{

//     }
//     const cfun=()=>{
      
//         alert("email and password are matched");
//         history.push("/menu");
        
       
//       }
//     return (
      
//         <>
         
//           <h1 className=" text-danger text-center" style={{backgroundColor:"#30336b",
//         height:"60px",marginTop:"150px"}} >Login Form</h1>
//         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//         <div >
//              <div classNameName="signup" style={{marginTop:"50px",border:"5px solid #f0932b",
//              height:"400px",width:"450px",padding:"40px",backgroundColor:"#636e72",color:"white"}}>
// <form onSubmit={cfun}>

//   <div className="mb-3" >
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control"  value={state.loemail.customer.props.email} onChange={fun}  id="exampleInputEmail1" aria-describedby="emailHelp"
//      autoComplete="off" required style={{borderRadius:"30px"}}/>
//      <div className="mb-3">
//     <label for="exampleInputName1" className="form-label">Password</label>
//     <input type="password" className="form-control" value={state.lopass.customer.password} onChange={fun}  id="exampleInputName1" autoComplete="off" 
//     required style={{borderRadius:"30px"}}/>
//   </div>
//     <Button type="submit" style={{backgroundColor:"#95afc0"}} >Login</Button>
//     </div>
//     <span >Don't have an account?</span>
//     <NavLink exact activeClassName="active_class " className="nav-link "
//  aria-current="page" to="/signup" style={{color:"#f0932b"}}> Register Now</NavLink>
 
// </form>
//       </div>
//       </div> 
//       </div>
 
//         </>
//     )
// }

// export default Frontpage;


// import React, {useState} from 'react';
// import Button from '@material-ui/core/Button';
// import Signup from './Signup';
// import { NavLink,Redirect, useHistory } from 'react-router-dom';
// import "./Login.css";

// const Frontpage = (props) => {
//     const [state, setstate] = useState({
//       loemail:"",
//      lopass:"",
//     })
//     let history=useHistory();
//     const fun=(event)=>{
//       const value= event.target.value;
//       const name= event.target.name;
//       setstate((prevvalue)=>{
//          return{ ...prevvalue,
//           [name]:value,}
//       })

    
//    }
//     const cfun=()=>{
//       const email=props.email;
//       const password=props.password;
//       console.log(props.email);
//       if(state.loemail === email && state.lopass === password)
//       {
//         alert("email and password are matched");
//         history.push("/menu");
        
//         }
//       else {
//         alert("Sorry, Your email or password is incorrect");
      
//     }
//       }
//     return (
      
//         <>
//          <p>{props.password}  {props.email}</p>
//           <h1 className=" text-danger text-center" style={{backgroundColor:"#30336b",
//         height:"60px",marginTop:"150px"}} >Login Form</h1>
//         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//         <div >
//              <div classNameName="signup" style={{marginTop:"50px",border:"5px solid #f0932b",
//              height:"400px",width:"450px",padding:"40px",backgroundColor:"#636e72",color:"white"}}>
// <form onSubmit={cfun}>

//   <div className="mb-3" >
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name="loemail" value={state.loemail} onChange={fun}  id="exampleInputEmail1" aria-describedby="emailHelp"
//      autoComplete="off" required style={{borderRadius:"30px"}}/>
//      <div className="mb-3">
//     <label for="exampleInputName1" className="form-label">Password</label>
//     <input type="password" className="form-control" name="lopass" value={state.lopass} onChange={fun}  id="exampleInputName1" autoComplete="off" 
//     required style={{borderRadius:"30px"}}/>
//   </div>
//     <Button type="submit" style={{backgroundColor:"#95afc0"}} >Login</Button>
//     </div>
//     <span >Don't have an account?</span>
//     <NavLink exact activeClassName="active_class " className="nav-link "
//  aria-current="page" to="/signup" style={{color:"#f0932b"}}> Register Now</NavLink>
 
// </form>
//       </div>
//       </div> 
//       </div>
 
//         </>
//     )
// }

// export default Frontpage;
