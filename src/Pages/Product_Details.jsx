import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbarr from './Navbar'
import { Spinner } from 'react-bootstrap'

const Product_Details = () => {
    const {id} =useParams()
    const navigats = useNavigate()
    const [loading1,setLoading1]=useState(false)

    const [sigledata,setsingledata] = useState("")
    // console.log(id);
    useEffect(()=>{
        const  singledata = axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            console.log(res.data);
            setsingledata(res.data)
        }).catch((err)=>{
            console.log(err);
        })
        setLoading1(true)
    },[])

    const backtohome = ()=>{
        navigats("/")
    }

  return (
    <>
    <div style={{position:"sticky", width:"100%" , marginBottom:"100px"}}>
     <Navbarr/>
     </div>
    { loading1 ? (
          <div style={{display:"flex",justifyContent:"space-between"  ,marginTop:"100px"}}>
          <div style={{width:"100%"}}>
            <img style={{width:"70%", margin:"auto"}} src={sigledata.image} alt="" />
          </div>
          <div  style={{width:"100%", marginTop:""}}>
          <h1 style={{fontSize:"20px", borderBottom:"1px solid black", display:"inline-block"}}><button onClick={backtohome} style={{color:"blue"}}>Home</button>/ {sigledata.title}</h1><br /><br />
          <p>{sigledata.description}</p><br />
          <h1 style={{fontSize:"30px", color:"blue"}}><b style={{color:"black"}}>$</b> {sigledata.price}</h1>
          </div>
        </div>) :(
         <div style={{height:"50dvh", display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Spinner  animation="border" />
        </div>
        )
    }
    
    </>
  )
}

export default Product_Details
