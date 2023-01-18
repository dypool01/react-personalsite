import React from 'react'

export default function Footer() {
    return (
        <footer className='text-center text-white bg-dark p-4'>
            <strong>&copy; {new Date().getFullYear()} Dylan Poole</strong>
        </footer>
    )
}