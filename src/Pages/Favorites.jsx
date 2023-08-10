import {ArrowLeftOutlined} from '@ant-design/icons'
import {NavLink} from 'react-router-dom'

export  const Favorites = () => 
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='space-y-5 flex flex-col justify-center items-center '>
          <h1 className='text-xl font-semibold'>No tienes productos Favoritos</h1>
          <NavLink to='/'>
          <button className='bg-gray-800 text-white px-5 py-2 rounded-m drop-shadow-xl flex items-center space-x-2'>
            <span>Regresar al Inicio</span>
            <ArrowLeftOutlined/>
          </button>
          </NavLink>
        </div>
      </div>
