import { Slackey } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const slackey = Slackey({
    subsets: ["latin"],
    weight: "400",
});

const categories: Record<string, string> = {
    "Villagers": 'https://dodo.ac/np/images/e/e3/Tangy_NH_Villager_Icon.png',
    "Gyroids": 'https://dodo.ac/np/images/0/04/Gyroid_NH_Inv_Icon.png',
    "Fossils": 'https://dodo.ac/np/images/5/57/Fossil_NH_Inv_Icon.png',
    "Bugs": 'https://dodo.ac/np/images/8/8e/Bug_NH_Icon.png',
    "Fish": 'https://dodo.ac/np/images/3/3c/Fish_NH_Icon.png',
    "Sea creatures": 'https://dodo.ac/np/images/f/ff/Sea_Creature_NH_Icon.png',
    "Furnitures": 'https://dodo.ac/np/images/8/82/Furniture_NH_Inv_Icon.png',
    "DIY & Recipes": 'https://dodo.ac/np/images/e/ef/Be_a_Chef%21_DIY_Recipes%2B_NH_Inv_Icon.png',
    "Clothing": 'https://dodo.ac/np/images/0/02/Dress-Up_NH_Inv_Icon.png',
    "Art Gallery": 'https://dodo.ac/np/images/4/40/Redd_NH_Character_Icon.png',
    "Events": 'https://dodo.ac/np/images/3/32/Balloon_NH_Inv_Icon.png',
    "Miscelaneous": 'https://dodo.ac/np/images/4/43/Nook_Miles_Ticket_NH_Inv_Icon.png',
}


export default function HomeMenu() {
    return (
        <>
            <h1 className={`${slackey.className} text-amber-800 text-center text-xl md:text-3xl`}>Welcome to Nook Book App!</h1>
            <p className={`text-gray-600 text-center text-md md:text-lg my-4 font-bold`}>Select the category you want to see</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {Object.keys(categories).map((category, categoryIndex) => {
                    return (
                        <button
                            key={categoryIndex}
                            className='bg-white border border-orange-200 rounded-lg shadow-lg mb-2 p-4 text-center text-teal-500 hover:bg-orange-200 font-extrabold'>
                            <Image
                                src={`${categories[category]}`}
                                alt={category}
                                width={80}
                                height={80}
                                className='m-auto' />
                            <p>{category}</p>
                        </button>
                    )
                })}
            </div>
        </>
    )
}