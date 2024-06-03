import logo from './logo.svg';
import {
  createBrowserRouter,
  Outlet,
  useLocation,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Announcement from './Components/Header/Announcement';
import Header from './Components/Header/Header';
import LandingPage from './pages/Home';
import Footer from './Components/Footer/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ServiceDetails from './pages/ServiceDetails';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';


function App() {
  const Layout = () =>{
    return (
      <div className='app '>
        <Announcement />
        <Header/>
        <Outlet  />
        <Footer/>
      </div>
    )
  }

const router = createBrowserRouter(
  [
    {
      path : '/',
      element : <Layout/>,
      // errorElement : '',
      children : [
        {
          path : '/',
          element : <LandingPage/>
        },
        {
          path : '/about',
          element : <AboutUs/>
        },
        {
          path : '/service-details',
          element : <ServiceDetails/>
        },
        {
          path : '/portfolio',
          element : <Portfolio/>
        },
        {
          path : '/blogs',
          element : <Blogs/>
        },
        {
          path : '/blog-details',
          element : <BlogDetails/>
        },
        {
          path : '/contact',
          element : <ContactUs/>
        }
      ]
    }
  ]
)
return (
  <>
    <RouterProvider router={router} />
  </>
)
}
export default App;
