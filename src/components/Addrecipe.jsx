import React, { useState } from 'react'
import Navbar from './Navbar'

const Addrecipe = () => {

    const [data,changeData]=useState(
        {
            "name":"",
            "id":"",
            "ingr":"",
            "meth":"",
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
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Recipe Name</label>
<input type="text" className="form-control" name="name" value={data.name} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Recipe Id</label>
    <input type="text" className="form-control" name="id" value={data.id} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Ingrediens</label>
    <textarea name="ingr" id="" className="form-control"  value={data.ingr} onChange={inputHolder}></textarea>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Method</label>
    <textarea name="meth" id="" className="form-control" value={data.meth} onChange={inputHolder}></textarea>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Addrecipe