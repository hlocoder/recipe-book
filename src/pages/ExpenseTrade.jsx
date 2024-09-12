import React, { useRef } from 'react'

const ExpenseTrade = () => {

  let snoRef = useRef()
  let placeRef = useRef()
  let priceRef = useRef()

    let arr=[{
        id:1,
        place:'Lucknow',
        price:10000
    },
    {
        id:2,
        place:'Food',
        price:1000
    },
{
        id:3,
        place:'Imambada',
        price:300
    },
    {
        id:4,
        place:'club',
        price:10000
    },
    
]

// let  submitData = ()=>{
//  console.log('running')
// }
  return (
    <div>
      <h3 className='text-center'>This is ExpenseTrade page.</h3>
{/*       
      {
        arr.map((obj)=>{
            return <div>
                <p>{obj.price}</p>
                <p>{obj.place}</p>
            </div>
        })
      } */}
      <form action="" className=''>
        <input type="number" placeholder='S no.' ref={snoRef} />
        <input type="text" placeholder='Enter your place' ref={placeRef} />
        <input type="number" placeholder='Enter your price' ref={priceRef}/>
        <button>Add data</button>
      </form>
     <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">S no.</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   {
    arr.map((obj)=>{
        return  <tr>
        <th scope="row">{obj.id}</th>
        <td>{obj.place}</td>
        <td>{obj.price}</td>
        <td><button className='btn btn-danger'>Delete</button></td>
      </tr>
    })
   }
  </tbody>
</table>

    </div>
  )
}

export default ExpenseTrade
