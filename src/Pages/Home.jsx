import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Cards from './Card';
import Navbarr from './Navbar';
import { useNavigate } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';



export default function Home() {
  const [mydata, setMydata] = useState([])
  const [loading,setLoading]=useState(false)

  const navigate = useNavigate()



  useEffect(() => {
    getdata()
  }, [])

  const getdata = () => {
    const coling = axios
      .get("https://fakestoreapi.com/products").then((res) => {
        // console.log(res.data);
        setMydata(res.data)
      }).catch((err) => {
        console.log(err);
      })
      setLoading(true)

  }
  const details = (id) => {
    navigate(`/productdetails/${id}`)
  }

  console.log(mydata);

  return (
    <>
     
   <div>
       <div style={{ position: "sticky", width: "100%", marginBottom: "100px" }}>
        <Navbarr />
      </div>
    {loading ? (  
      <div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "17px" }}>

          {
            mydata.map((e, i) => {
              return (
                <div key={i}>
                  <Cards
                    image={e.image}
                    title={e.title}
                    price={e.price}
                    onClick={() => details(e.id)}
                    description={e.description}


                  />
                </div>
              )


            })
          }
        </div>
      </div>):(
         <div style={{height:"50dvh", display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Spinner  animation="border" />
         </div>
      )}
   </div>
    </>
  )
}
