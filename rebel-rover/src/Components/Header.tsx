import header_logo from '../assets/header-logo.png';

const Header = () => {
    return (
      <header className="bg-header-bg absolute z-[999] w-full text-white p-4 flex items-center gap-[113px] justify-between">
        <div className="flex items-center ml-[46px]">
          <img src={header_logo} alt="Rebel Rover Logo" className="w-[357px] mr-4" /> 
        </div>
        <nav className="hidden md:flex mr-[86px] justify-between items-center gap-x-[67px]">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <div className="relative group">
            <div className="hover:text-gray-300">Package</div>
            <div className="absolute hidden group-hover:block bg-gray-700 rounded p-2 mt-2">
              <a href="#" className="block hover:text-gray-300">Package 1</a>
              <a href="#" className="block hover:text-gray-300">Package 2</a>
            </div>
          </div>
          <div className="relative group">
            <div className="hover:text-gray-300">Destination</div>
            <div className="absolute hidden group-hover:block bg-gray-700 rounded p-2 mt-2">
              <a href="#" className="block hover:text-gray-300">Destination 1</a>
              <a href="#" className="block hover:text-gray-300">Destination 2</a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-300">Blog</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
          <div className="md:hidden">
          <div>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </div>
        </div>
        <div className="hidden md:block">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.472 6.472 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        </nav>
      </header>
    );
  };

export default Header;