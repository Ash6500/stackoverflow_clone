import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Trophy, MessageSquare, MessagesSquare, Search} from 'lucide-react'
import UserAvatar from '../../assets/user.png'
import Logo from '../../assets/logo-stackoverflow.png'
import AltLogo from '../../assets/stack-logo.png'

const Navbar = () => {
    
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 710);

    useEffect(() => {
        const handleResize = () =>{
            setIsSmallScreen(window.innerWidth <= 710)
        }

        window.addEventListener('resize', handleResize);

        return () =>{
            window.removeEventListener('resize', handleResize)
        }
    }, []);

  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-white'>
        {/* logo */}
        <div className='flex items-center space-x-4'>

            {/* conditionally render logo based on screen size */}
            {isSmallScreen ? (
              <Link>
              <img src={AltLogo} alt="logo" className='w-40 h-10 cursor-pointer'/>
              </Link>
                
            ) : (
                <Link>
                <img src={Logo} alt="logo" className='w-40 h-10 cursor-pointer' />
                </Link>
            )}
        </div>

        {/* Search bar and products link */}
        <div className='flex items-center space-x-4'>
            {/* searchbar */}
            <div className='flex border rounded-full mx-4 px-4 py-2 hover:border-gray-500 '>
            <input type="text"
            placeholder='Search Your Answers Here...'
            className='focus:outline-none text-slate-400 min-w-72' />
            <Search className='text-amber-500'/>
            </div>

            {/* products link */}
            <Link to={'/products'} className='text-slate-500 hover:text-slate-700'>
            Products
            </Link>
        </div>

        {/* Icons */}
        <div className='flex items-center space-x-6'>
            <Link to={'/comments'} className='text-slate-500 hover:text-slate-700'>
            <MessageSquare/>
            </Link>
            <Link to={'trophies'}  className='text-slate-500 hover:text-slate-700'>
            <Trophy/>
            </Link>
            <Link to={'/discussion'} className='text-slate-500 hover:text-slate-700'>
            <MessagesSquare/>
            </Link>
            <Link to={'/user'}>
            <img src={UserAvatar} alt="user" className='w-14 h-14 border rounded-full border-amber-500' />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar