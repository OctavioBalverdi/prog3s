import React,{useState} from 'react'
import {SearchOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import adidas from '../assets/adidas.jpeg'
import newbalance from '../assets/newbalance.jpeg'
import Nike from '../assets/Nike.jpg'
import Nikej1 from '../assets/Nikej1.jpeg'
import Puma from '../assets/Puma.jpeg'

const Main = () => {
  let Products =[
    {
      img:Nike,
      title:'Nike',
      description:'lorem ipsum dolar',
      price:200,
      Talle:39-40-42
    },
    {
      img:Nikej1,
      title:'Nike Jordan 1',
      description:'lorem ipsum dolar',
      price:200,
      Talle:39-40-42
    },
    {
      img:Puma,
      title:'Puma',
      description:'lorem ipsum dolar',
      price:200,
      Talle:39-40-42
    },
    {
      img:newbalance,
      title:'New Balance',
      description:'lorem ipsum dolar',
      price:200,
      Talle:39-40-42
    },
    {
      img:adidas,
      title:'Adidas',
      description:'lorem ipsum dolar',
      price:200,
      Talle:39-40-42
    },
    // {
    //   img:,
    //   title:'Leather Watch',
    //   description:'lorem ipsum dolar',
    //   price:880
    // },
    // {
    //   img:monitor,
    //   title:'One plus monitor',
    //   description:'lorem ipsum dolar',
    //   price:40
    // },
    // {
    //   img:sunGlass,
    //   title:'Sun Glasses',
    //   description:'lorem ipsum dolar',
    //   price:40
    // },
    // {
    //   img:mouse,
    //   title:'Mouse',
    //   description:'lorem ipsum dolar',
    //   price:40
    // },
    // {
    //   img:leatherWatch,
    //   title:'leather',
    //   description:'lorem ipsum dolar',
    //   price:40
    // }, 
  ]
  const [filteredProducts,setFilteredProducts]=useState(Products)
  const searchHandler = (e)=>{
    const filteredArray= Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
    if(filteredArray.length !=0){
      setFilteredProducts(filteredArray);
    }
  }
  return (
    <div className='w-full relative'>
      <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
          <h1 className='text-3xl font-bold'>Multimarcas</h1>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
            <input type="text" placeholder='Search product' className='bg-transparent outline-0'
            onChange={searchHandler}/>
            <button onClick={()=> searchHandler()}><SearchOutlined/></button>
          </div>
        </div>
        <div className="categories bg-white w-full flex justify-between space-x-8 px-2 py-10">
          <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Adidas</p>
          </div>
          <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Nike</p>
          </div>
          <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Puma</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
            <p>Rebook</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
            <p>Topper</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
            <p>Converse</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
            <p>Jordan</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
            <p>Crocs</p>
          </div>
          <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
            <p>New Balance</p>
          </div>
          
        </div>
      </div>
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts && filteredProducts.map((product,idx)=>{
          return(
            <div key={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border">
            <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2' />
            <div className='m-2 bg-gray-100 p-2'>
              <h1 className='text-xl font-semibold'>{product.title}</h1>
              <p className='text-sm'>{product.description}</p>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>${product.price}.00</p>
                <ShoppingCartOutlined size={'1.4rem'}/>
              </div>
            </div>
          </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Main;