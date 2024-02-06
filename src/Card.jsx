import React from 'react'
import icone1 from './img/image-equilibrium.jpg'
import iconeEter from './img/icon-ethereum.svg'
import iconeHour from './img/icon-clock.svg'
import tete from "./img/image-avatar.png"
import vue from "./img/vue.png"

export default function card() {
    return (

        <div className="h-[550px] w-[320px] rounded-xl bg-blue-950 flex flex-col justify-end items-center">

            <div className="top h-[50%] w-[90%] bg-black rounded-xl relative">
                <img className='rounded-xl w-[100%] h-[100%]' src= {icone1} alt="" srcset="" /> 
                <div className='absolute inset-0 flex justify-center items-center bg-[#00f5ff] opacity-0 hover:opacity-60'> 
                    <img src={vue} alt="" srcset="" />
                </div>

            </div>
            <div className="mid h-[15%] w-[100%] pl-4 pt-2 text-start bg-blue-950">
                
                <h2 className="font-extrabold text-white">Equilibrium #3429</h2>
                <p className="text-slate-400 font-normal">Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <div className='bot h-[10%] w-[100%] pl-4 pt-2 text-start bg-blue-950 flex justify-end items-center'>
                <div className='h-[50%] w-[50%] text-cyan-400 flex space-x-2 font-bold'>
                    <img src={iconeEter} alt="" srcset="" /> 
                    
                    <p>0.041 ETH</p>
                </div>
                <div className='h-[50%] w-[50%]  text-[#8BACD9] flex justify-end space-x-2 pr-5 font-bold '>
                    <img src={iconeHour} alt="" srcset="" /> 
                    
                    <p>0.041 ETH</p>
                </div>
            </div>
            <div className="h-[20%] w-[90%]  border-t-2 flex justify-center items-center rounded-b-xl bg-blue-950">
                <div className='w-[100%] flex justify-center items-center space-x-2 '>
                    <img className='h-[15%] w-[15%] border-2 rounded-full ' src={tete} alt="" srcset="" />
                    <div className=" flex justify-start nbr text-gray-300 font-normal  w-[85%]"> Creation of <span className="text-white font-bold ps-1"> Jules Wyvern </span></div>
                </div>
            </div>
        </div>
    )
}
