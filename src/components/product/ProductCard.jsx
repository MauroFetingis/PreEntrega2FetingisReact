import React from 'react'
import "./Product.css"

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor pointer' >
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src="./img/airpods.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/watch.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/pixel7.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/appletv.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/galaxy.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/aipadA.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/ipadP.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/iphone.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/macP.jpg" alt="" />
        </div>
        <div>
            <img className='h-full w-full object-cover object-left-top' src="./img/macA.jpg" alt="" />
        </div>
        <div className='parteTexto bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>MacBook Air</p>
                <p>La MacBook Air (M1) es una gran computadora portátil asequible. Tiene una pantalla grande, una potente CPU y una batería de larga duración.</p>
            </div>
            <div className='font-semibold'>
                <p>$$</p>
                <p className='line-throught opacity-50'>$$$$</p>
                <p className='text-green-900 font-semibold'>Descuento 50% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard