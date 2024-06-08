import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
const [data,changeData]=useState(
{"products":[]}
)

const fetchData=()=>{
    axios.get("https://dummyjson.com/products").then(

        (response)=>{
            changeData(response.data)
        }
    )
}

useEffect(()=>{fetchData()},[])
  return (
    <div>

<Navbar/>
<div className="container">
    <div className="row ">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<div className="row g-3">
   
{data.products.map((value,index)=>{return  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">


<div class="card">
<img src={value.images} class="card-img-top" alt="..."/>
<div class="card-body">
<p class="card-text">{value.id}</p>
</div>
</div>

</div>})}

</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall