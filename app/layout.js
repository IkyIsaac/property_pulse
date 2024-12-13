import '@/assets/styles/globals.css';
import Navbar from './components/Navbar';

export const metadata= {
  title:'PropertyPulse| Find the Perfect Rental',
  description:"Find your dream rental property",
  keywords:'rental,find rentals, find properties'
}

const MainLayout = ({ children })=>{
  return(
    <html>
      <body>
        <Navbar/>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout;