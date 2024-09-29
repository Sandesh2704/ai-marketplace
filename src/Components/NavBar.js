import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function NavBar({ isActive }) {

  const NavPages = [
    { url: "/", title: "Home" },
    { url: "/agents", title: "AI Agents" },
    { url: "/marketplace", title: "Marketplace" },
    { url: "/upload", title: "Upload Dataset" },
    { url: "/purchased", title: "Purchased Datasets" },
  ];

  const [isOpen, setIsOpen] = useState(false)
  const menuhandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    {/* <header className="bg-gray-800 text-white px-4 md:px-7 xl:px-[150px] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI & ML Platform</h1>
        <nav className="flex space-x-7">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/agents" className="hover:text-gray-300">
            AI Agents
          </Link>
          <Link to="/marketplace" className="hover:text-gray-300">
            Marketplace
          </Link>
          <Link to="/upload" className="hover:text-gray-300">
            Upload Dataset
          </Link>
          <Link to="/purchased" className="hover:text-gray-300">
            Purchased Datasets
          </Link>
        </nav>
      </div>
    </header> */}



  




      <div className={`shadow-md relative w-full px-4 md:px-7 xl:px-[150px]  z-30 flex justify-between items-center py-4 bg-white top-0 sticky relative z-40}`}> 
        <NavLink to='/'>   <h1 className="text-2xl font-bold">AI & ML Platform</h1></NavLink>
        <div className=' flex items-center gap-9'>
          <div className='hidden lg:flex flex gap-9 text-base '>
            {
              NavPages.map((item, index) => (
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>  `hover:text-[#2B31B6] font-medium  ${isActive ? "text-black font-semibold" : "text-gray-500"}`}
                  >
                    {item.title}
                  </NavLink>
              ))
            }
          </div>


          <div className='text-2xl md:text-3xl flex xl:hidden text-white'
            onClick={menuhandler}>
            <RiMenu3Line />
          </div>
        </div>
      </div> 

      {isOpen && (
        <div
          className="fixed top-0 h-full inset-0 bg-black/60 z-40"
          onClick={menuhandler}
        />
      )}

      <div className='fixed top-0 z-40  right-0 h-full w-[80%] sm:w-[40%] md:w-[50%] bg-[#0f0f11] border-l-2 border-blue-900 transition-transform transform duration-500 ease-in-out'
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <div className='flex py-4 px-4 md:px-7 justify-between items-center w-full  border-b border-[#ffffff33]'>
          <div className='flex items-center gap-3'>
            <NavLink to='/'>
            <h1 className="text-2xl font-bold">AI & ML Platform</h1>
            </NavLink>
          </div>
          <div className='text-white text-xl bg-blue-900/20 p-2 md:p-3 rounded-full group cursor-pointer  hover:rotate-180' onClick={menuhandler}>
            <span className='rotate-0 hover:rotate-180 duration-500 '> < IoCloseOutline /> </span>
          </div>
        </div>

        <div className=' px-4 md:px-7 my-10'>
          <div className='flex flex-col font-medium'>
            {
              NavPages.map((item, index) => (
                <NavLink
                  to={item.url}
                  key={index}
                  className={({ isActive }) => `flex items-center gap-4 py-2.5  hover:text-[#3c72fc]  border-b ${isActive ? "text-[#3c72fc] border-[#3c72fc]" : "text-white border-[#ffffff33]"}`}
                  onClick={menuhandler}>
                  <span className='test-base'>
                    {item.title}
                  </span>
                </NavLink>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}


 


