'use client'
import { MenuIcon, X, User, LogOut, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsUserDropdownOpen(false);
    closeMobileMenu();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#060606]/95 backdrop-blur-sm shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group text-white"
            onClick={closeMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
    width="45.864pt"
    height="4.608pt"
    viewBox="0 0 45.864 4.608">
<defs/>
<path id="shape0" transform="matrix(0.072 0 0 0.072 22.2879999330063 0.144)" fill="#ffffff" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M47 0L0 0L0 9L17 10.5L13 59.5L29 59.5L29 12.5L46 13.5Z"/><path id="shape1" transform="matrix(0.072 0 0 0.072 26.3199999330063 0.216)" fill="#ffffff" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M2 58.5L0 1.5L14 4.5L15.5 22.5L32.5 24.5L34 0L48.5 2.5L44.5 58.5L34 58.5L32.5 37L14 34L13.5 57.5Z"/><path id="shape2" transform="matrix(0.072 0 0 0.072 39.1719999330062 0.144)" fill="#ffffff" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M1.5 59.5L0 1L40 0L34.5 12.5L15 11.5L13 23.5L37.5 23.5L36.5 32L13 34L15 48.5L43 44L43.5 56Z"/><path id="shape3" transform="matrix(0.072 0 0 0.072 22.2879999330063 0.144)" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="2" d="M47 0L0 0L0 9L17 10.5L13 59.5L29 59.5L29 12.5L46 13.5Z"/><path id="shape4" transform="matrix(0.072 0 0 0.072 26.3199999330063 0.216)" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="2" d="M2 58.5L0 1.5L14 4.5L15.5 22.5L32.5 24.5L34 0L48.5 2.5L44.5 58.5L34 58.5L32.5 37L14 34L13.5 57.5Z"/><path id="shape5" transform="matrix(0.072 0 0 0.072 39.1719999330062 0.144)" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="2" d="M1.5 59.5L0 1L40 0L34.5 12.5L15 11.5L13 23.5L37.5 23.5L36.5 32L13 34L15 48.5L43 44L43.5 56Z"/><path id="shape6" transform="matrix(0.072 0 0 0.072 42.483999901032 0.072)" fill="#ffffff" fill-rule="evenodd" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="2" d="M1 51L18.5 44L18.5 40L0 24.5L13 3.5L19.5 3.5L20 0L30 0L30 4L36 4L46 13.5L37 22.5L27.5 17L27.5 28.5L42.5 39L37.5 52L31 55L31 61L21.5 61L21.5 56L7 57.5ZM19.5 16L16.5 17L13.5 22L19 27ZM28 37.5L26.5 50.5L32.5 42.5Z"/><path id="shape7" transform="matrix(0.072 0 0 0.072 30.4599999330062 0.144)" fill="#ffffff" fill-rule="evenodd" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="2" d="M1.5 59.5L0 1L40 0L34.5 12.5L15 11.5L13 23.5L37.5 23.5L36.5 32L13 34L15 48.5L43 44L43.5 56Z"/><path id="shape8" transform="matrix(0.072 0 0 0.072 34.2039999330063 0.144)" fill="#ffffff" fill-rule="evenodd" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="2" d="M0 59.5L9.5 0L22 0L28.5 11.5L34.5 2.5L46 5L59.5 56L46 58.5L46 46L39 29L28 42L16.5 23.5L14.5 59.5Z"/><path id="shape9" transform="translate(0.0315000210641805, 0)" fill="#ffffff" fill-rule="evenodd" d="M2.9565 1.188L3.8925 0.504L3.2445 0L0.9405 0L0.00449999 0.684L0 3.6855L0.7155 4.401L2.646 4.4145L3.7935 3.6045L3.186 2.9835L2.5245 3.4965L0.891 3.4965L0.567 3.213L0.6075 0.9585L1.026 0.6075L2.592 0.54C2.592 0.54 2.7135 0.756 2.9565 1.188Z"/><path id="shape10" transform="translate(1.77299999930989, 2.02499997470431)" fill="#ffffff" fill-rule="evenodd" d="M0.0405 0.7695L1.431 0.7425L1.4445 2.322L2.1465 2.322L2.1735 0L0 0.027C0 0.027 0.0135 0.2745 0.0405 0.7695Z"/><path id="shape11" transform="matrix(1.48832773421333 0 0 1 4.24799982033504 0.026999998858062)" fill="#ffffff" fill-rule="evenodd" d="M1.224 0.738L1.22625 0L0.612 0L0.018 0.648L0 3.672L0.504 4.302L1.206 4.3065L1.206 3.564L0.7335 3.55725L0.4905 3.213L0.4905 1.04625L0.7335 0.80325C0.7335 0.80325 0.897 0.7815 1.224 0.738Z"/><path id="shape01" transform="matrix(-1.48832773421333 0 0 1 7.7624996716929 0.0157500891964384)" fill="#ffffff" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M1.224 0.738L1.22625 0L0.612 0L0.018 0.648L0 3.672L0.504 4.302L1.206 4.3065L1.206 3.564L0.7335 3.55725L0.4905 3.213L0.4905 1.04625L0.7335 0.80325C0.7335 0.80325 0.897 0.7815 1.224 0.738Z"/><path id="shape02" transform="matrix(1.48832773421333 0 0 1 7.96274966322348 0.0123750456148626)" fill="#ffffff" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M1.224 0.738L1.22625 0L0.612 0L0.018 0.648L0 3.672L0.504 4.302L1.206 4.3065L1.206 3.564L0.7335 3.55725L0.4905 3.213L0.4905 1.04625L0.7335 0.80325C0.7335 0.80325 0.897 0.7815 1.224 0.738Z"/><path id="shape011" transform="matrix(-1.48832773421333 0 0 1 11.4772495145813 0.00112513595323893)" fill="#ffffff" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M1.224 0.738L1.22625 0L0.612 0L0.018 0.648L0 3.672L0.504 4.302L1.206 4.3065L1.206 3.564L0.7335 3.55725L0.4905 3.213L0.4905 1.04625L0.7335 0.80325C0.7335 0.80325 0.897 0.7815 1.224 0.738Z"/><path id="shape12" transform="translate(11.7089998537351, -0.0359999995502998)" fill="#ffffff" fill-rule="evenodd" d="M0 4.4145L0 0L0.578876 0L2.66737 3.6315L2.66737 0L3.29165 0L3.303 4.3335L2.39496 4.3335L0.499423 0.621L0.499423 4.293L0.495639 4.41C0.495639 4.41 0.330426 4.4115 0 4.4145Z"/><path id="shape03" transform="matrix(0.072 0 0 0.072 15.2518006558527 0.0918001062001888)" fill="#ffffff" fill-rule="evenodd" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="2" d="M1.5 59.5L0 1L40 0L34.5 12.5L15 11.5L13 23.5L37.5 23.5L36.5 32L13 34L15 48.5L43 44L43.5 56Z"/><path id="shape13" transform="translate(18.8099992044502, 0)" fill="#ffffff" fill-rule="evenodd" d="M0.018 4.284L0 0L0.81 0L0.792 4.14L0.800999 4.257C0.800999 4.257 0.54 4.266 0.018 4.284Z"/><path id="shape14" transform="translate(19.2914991840857, 0)" fill="#ffffff" fill-rule="evenodd" d="M0 0L1.3905 0L2.052 0.4725L2.0655 1.3365L1.7145 1.6605L0.0135 1.674L0.0135 1.1745L1.3365 1.188L1.485 0.891L1.4445 0.4995L1.2015 0.2835L0 0.27C0 0.27 0 0.18 0 0Z"/><path id="shape15" transform="translate(19.0484991943631, 1.0799999543225)" fill="#ffffff" fill-rule="evenodd" d="M0.162 0.432L2.0115 2.9835L2.1735 3.1995L2.7135 2.808L0.4455 0L0 0.27C0 0.27 0.054 0.324 0.162 0.432Z"/>
</svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" 
              href="/themes"
            >
              Themes
            </Link>
            <Link 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" 
              href="/upload-theme"
            >
              Upload Theme
            </Link>
            <Link 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" 
              href="/about-us"
            >
              About Us
            </Link>
            <Link 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" 
              href="/contact-us"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {loading ? (
              <div className="text-gray-400">Loading...</div>
            ) : user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium rounded-lg hover:bg-gray-800"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-600 flex items-center justify-center">
                    {user.profile_image ? (
                      <Image 
                        src={user.profile_image} 
                        alt={user.username}
                        className="w-full h-full object-cover"
                        width={32}
                        height={32}
                        onError={(e) => {
                          // Hide the image if it fails to load, showing the fallback
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    {(!user.profile_image || user.profile_image === '') && (
                      <span className="text-white text-sm font-medium">
                        {user.username.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1E1E1E] border border-gray-700 rounded-lg shadow-lg py-2">
                    <Link
                      href="/profile"
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      onClick={() => setIsUserDropdownOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left text-gray-300 hover:text-red-400 hover:bg-gray-700 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link 
                  href="/login-signup?tab=login"
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  href="/login-signup?tab=signup"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-[#0A0A0A]">
            <nav className="px-4 py-4 space-y-4">
              <Link 
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2" 
                href="/themes"
                onClick={closeMobileMenu}
              >
                Themes
              </Link>
              <Link 
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2" 
                href="/upload-theme"
                onClick={closeMobileMenu}
              >
                Upload Theme
              </Link>
              <Link 
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2" 
                href="/about-us"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link 
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2" 
                href="/contact-us"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              
              {/* Mobile Auth */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                {loading ? (
                  <div className="text-gray-400 py-2">Loading...</div>
                ) : user ? (
                  <>
                    <Link 
                      href="/profile"
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-600 flex items-center justify-center">
                        {user.profile_image ? (
                          <Image 
                            src={user.profile_image} 
                            alt={user.username}
                            className="w-full h-full object-cover"
                            width={32}
                            height={32}
                            onError={(e) => {
                              // Hide the image if it fails to load, showing the fallback
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : null}
                        {(!user.profile_image || user.profile_image === '') && (
                          <span className="text-white text-sm font-medium">
                            {user.username.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <span>{user.username}</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full text-left text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium py-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/login-signup?tab=login"
                      className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                      onClick={closeMobileMenu}
                    >
                      Sign In
                    </Link>
                    <Link 
                      href="/login-signup?tab=signup"
                      className="block w-full text-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200 font-medium"
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;