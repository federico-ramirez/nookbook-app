import React from 'react'

export default function Main(props: any) {
    const { children } = props
    return (
        <main className='bg-orange-50 w-full md:w-2/3 mx-auto my-8 rounded-lg p-8'>
            {children}
        </main>
    )
}
