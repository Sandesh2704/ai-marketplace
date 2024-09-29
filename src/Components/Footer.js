import React from 'react'

export default function Footer() {


  return (
    <>

<footer className="bg-gray-600 text-white fixed bottom-0 w-full px-4 md:px-7 xl:px-[150px] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 AI & ML Platform. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-300">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
    </>
  )
}
