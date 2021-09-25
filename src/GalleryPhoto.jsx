import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import {gadata} from "./Gallerydata";
import { NavLink } from 'react-router-dom';
import Menu from "./Menu";
const GalleryPhoto = () => {
    const [data, setdata] = useState(gadata);
    const filterItem=(cate)=>{
    const updateItem=gadata.filter((ele)=>{
        return ele.category === cate;
    })
    setdata(updateItem);
    }
    return (
        < >
      <Menu />
         <div style={{backgroundColor:"#30336b"}}>
       <h1 className="text-center mt-5 text-danger">Cards</h1>   
       </div>
       <div className="d-flex justify-content-around menu-tab" >
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>filterItem("breakfast")}> Breakfast</Button>
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>filterItem("lunch")}> Lunch</Button>
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>filterItem("evening")}> Evening</Button>
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>filterItem("dinner")}> Dinner</Button>
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>setdata(gadata)}> All</Button>
       </div>
        
        <div className="menu-items container-fluid mt-5 d-flex justify-content-between my-5" 
        style={{flexWrap:"wrap",paddingRight:"150px"}}>
        {
            data.map((eleE)=>{
                const {id,Image,name,category,price}=eleE;
                return(
                    <>
                   
                    <div className="container__" style={{flex:"33%"}}>
          <div className="card__">
          <div className="imgbx">
           <img src={Image} alt="..." />
          </div>
          <div className="content">
           <h1>{name}</h1>
           <p>Spicy food</p>
           <h1>{price}</h1>
           <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       > Order Now</Button>
          </div>
          
          </div>
      </div>
      
      
                    </>

                )
            })
        }
        </div>
          
         
      
        </>
    )
}

export default GalleryPhoto;
