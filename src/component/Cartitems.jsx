import React from 'react'
import { ArrowLeftOutlined, DeleteOutlined }  from '@ant-design/icons'
import adidas from '../assets/adidas.jpeg'
const Cartitems = () => {
  return (
    <div>
      <div className='w-11/12 m-auto py-10'>
        <h1 className='text-3xl font-bold'>Carrito de Compras</h1>
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead className='border-b'>
                <tr>
                  <td className='text-gray-40 py-2'>Producto</td>
                  <td className='text-gray-40 py-2'>Precio</td>
                  <td className='text-gray-40 py-2'>Cantidad</td>
                  <td className='text-gray-40 py-2'>Total</td>
                  <td className='text-gray-40 py-2'>Borrar</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>
                      <img src={adidas} alt="" className='w-[100px] h-[100px] border rounded p-2'/>
                      <div>
                      <h1 className='text-xl font-bold'>Adidas</h1>
                      <p>Lorem, ipsum.</p>
                    </div>
                    </div>
                    
                  </td>
                  <td>$200.00</td>
                  <td>
                    <div className='border w-24 p-2'>
                      <input type="number" className='w-full outline-0' />
                    </div>
                  </td>
                  <td>$200.00</td>
                  <td>
                    <button>
                      <DeleteOutlined size={"1.5rem"}/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='my-5'>
              <button className='flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2'>
                <ArrowLeftOutlined/>
                <span>Continue Comprando</span>
              </button>
            </div>
          </div>
          <div className='w-[40%] h-fit border rounded p-5 space-y-5'>
            <div className='flex justify-between items-center border-b border-dashed p-2'>
              <h1 className='text-xl'>Sub Totoal</h1>
              <p>$200.00</p>
            </div>
            <div className='flex justify-between items-center border-b border-dashed p-2'>
              <h1 className='text-xl'>Discount</h1>
              <p>$0.00</p>
            </div>
            <div className='flex justify-between items-center border-b p-2'>
              <h1 className='text-xl'>shipping</h1>
              <p>$20.00</p>
            </div>
            <div className='flex justify-between items-center p-2'>
              <h1 className='text-xl'>Sub Totoal</h1>
              <p>$220.00</p>
            </div>
            <button className='w-full p-2 bg-gray-800 text-center text-white rounded'>
              checkOut
            </button>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Cartitems;