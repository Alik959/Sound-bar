export default function Footer() {
  return (
    <footer className='mt-16 bg-gradient-to-br from-black via-gray-900 to-black text-gray-300 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-r from-gray-800/20 via-transparent to-gray-800/20 pointer-events-none'></div>
      <div className='relative mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800'>
        <div>
          <h2 className='text-2xl font-extrabold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent'>
            MyWebsite
          </h2>
          <p className='mt-3 text-sm leading-relaxed text-gray-400 max-w-sm'>
            Innovative digital solutions, built with precision and powered by
            cutting-edge technologies.
          </p>
        </div>

        <div>
          <h3 className='font-semibold text-white mb-4'>Navigation</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='/' className='block hover:text-white transition'>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className='block hover:text-white transition'>
                About
              </a>
            </li>
            <li>
              <a href='/products' className='block hover:text-white transition'>
                Products
              </a>
            </li>
            <li>
              <a href='/contact' className='block hover:text-white transition'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-white mb-4'>Company</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='block hover:text-white transition'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='block hover:text-white transition'>
                Partners
              </a>
            </li>
            <li>
              <a href='#' className='block hover:text-white transition'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='block hover:text-white transition'>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-white mb-4'>Connect</h3>
          <div className='flex space-x-5 text-xl'>
            <a href='#' className='hover:text-gray-100 transition'>
              🌐
            </a>
            <a href='#' className='hover:text-gray-100 transition'>
              🐦
            </a>
            <a href='#' className='hover:text-gray-100 transition'>
              📘
            </a>
            <a href='#' className='hover:text-gray-100 transition'>
              📸
            </a>
          </div>
        </div>
      </div>

      <div className='relative py-4 text-center text-xs text-gray-500'>
        © {new Date().getFullYear()} MyWebsite — All rights reserved.
      </div>
    </footer>
  )
}
