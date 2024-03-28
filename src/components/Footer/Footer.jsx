import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="py-10 bg-orange-900 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">

                <h1 className="text-white font-bold text-xl">quickDeli</h1>

                <div>
                    <p className="font-semibold text-white">Help</p>
                    <ul className="mt-8 space-y-4 text-gray-200">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Q&A</a></li>
                    </ul>
                </div>
                
                <div>
                    <p className="font-semibold text-white">Partners</p>
                    <ul className="mt-8 space-y-4 text-gray-200">
                        <li><a href="#">Our Gold partners</a></li>
                        <li><a href="#">Our Platinum partners</a></li>
                    </ul>
                </div>
               
                <div>
                    <p className="font-semibold text-white">Join us</p>
                    <ul className="mt-8 space-y-4 text-gray-200">
                        <li><a href="#"> HR </a></li>
                        <li><a href="#"> Job offers </a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-20 md:mt-28 2xl;mt-32">
                <div className="sm:flex items-center sm:space-x-6">
                   
                    <ul className="flex gap-5 text-white text-3xl mb-3 sm:mb-0">
                        <li><a href="#"><AiFillFacebook/></a></li>
                        <li><a href="#"><AiFillInstagram/></a></li>
                        <li><a href="#"><AiFillGithub/></a></li>
                    </ul>

                    <ul className="flex gap-6 text-gray-200">
                        <li><a href="#"> Privacy policy </a></li>
                        <li><a href="#"> Terms & conditions </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer