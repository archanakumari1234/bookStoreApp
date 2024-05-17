import Footer from './Footer'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
      <Navbar/>
      <div className='w-full md:w-1/2 m-auto py-5 px-4 mt-28 dark:bg-slate-900 dark:text-white  bg-slate-200 border h-screen flex justify-center align-middle'>
       <div><h1 className='text-4xl m-auto w-full flex justify-center align-middle items-center text-center'> This is about page</h1></div>
      </div>
      <Footer/>
    </>
  ) 
}

export default About
