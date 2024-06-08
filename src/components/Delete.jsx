import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const [data,changeData]=useState(
        {
            "name":""
        }
    )
    const inputHolder=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
        }
        
        const readValue=()=>{
          console.log(data)
        }
  return (
    <div>

<Navbar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">Recipe Name</label>
        <input type="text" className="form-control" name="name" value={data.name} onChange={inputHolder}/>

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


        <button className="btn btn-danger" onClick={readValue}>Delete</button>

        </div>
    </div>
</div>

    </div>
  )
}

export default Delete