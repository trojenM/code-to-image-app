"use client";
import Link from 'next/link';
import React from 'react'

function Footer() {
    return (
        <div className='flex items-center gap-10 py-6'>
            <Link href='https://github.com/trojenM'
                className='text-sm font-medium text-gray-400 hover:text-gray-200 ease-in-out transition-all duration-300'
            >
                Github &#8599;
            </Link>
            <div className='text-sm font-medium text-gray-400'
            >
                Made by Ömür Bilgin
            </div>
            <Link href='https://www.linkedin.com/in/omurbilgin/'
                className='text-sm font-medium text-gray-400 hover:text-gray-200 ease-in-out transition-all duration-300'
            >
                LinkedIn &#8599;
            </Link>
        </div>
    )
}

export default Footer
