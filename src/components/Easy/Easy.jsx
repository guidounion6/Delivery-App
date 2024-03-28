import React from 'react'
import time from "../../assets/time.png"
import fork from "../../assets/fork.png"
import address from "../../assets/address.png"

const Easy = () => {
  return (
    <div className="flex flex-col py-8 sm:h-[500px]">
        <h1 className="mx-auto text-5xl p-8">Get Your Food</h1>
        <div className="flex flex-col sm:flex-row justify-around">

            <div className="w-[200px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0">
                <img  className="w-[700px] mx-auto" src={address} alt="address" />
                <p className="mx-auto">1. Find your address</p>
            </div>
           
            <div className="w-[200px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0">
                <img  className="w-[700px] mx-auto" src={fork} alt="fork" />
                <p className="mx-auto">2. Choose your food</p>
            </div>
            
            <div className="w-[200px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 sm:my-0">
                <img  className="w-[700px] mx-auto" src={time} alt="time" />
                <p className="mx-auto">3. Wait 30-40 minutes...</p>
            </div>

        </div>

    </div>
  )
}

export default Easy