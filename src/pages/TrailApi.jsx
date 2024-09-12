import React, { useEffect, useState } from 'react'

const TrailApi = () => {
    let [items,setItems] = useState([])
    // console.log(items)

   async function getData(){
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    // console.log(data.products)
    setItems(data.products)
    }
    
    useEffect(()=>{
        getData()

    },[])
    // console.log(data)

  return (
    <div>
      <h1>this is  api page</h1>


     { items.map((product)=>{
        console.log(product)
        return <div>
            <img id='img1' src={product.images} alt="" />
            <h1>{product.brand}</h1>
            <h1>{product.title}</h1>
        </div>
      })}



    </div>
  )
}

export default TrailApi
