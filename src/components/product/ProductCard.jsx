import React from 'react'
import "./Product.css"
const ProductCard = ({ productos }) => {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor pointer' >
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.img} alt="" />
            </div>

            <div className='parteTexto bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.nombre}</p>
                    <p>{product.descripcion}</p>
                </div>
                <div className='font-semibold'>
                    <p>{product.precio}</p>
                    <p className='line-throught opacity-50'>$$$$</p>
                    <p className='text-green-900 font-semibold'>Descuento 50% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard