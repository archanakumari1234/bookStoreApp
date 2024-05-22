import { Link } from "react-router-dom";
import Cards from "./Cards";
import axios from 'axios'
import { useEffect, useState } from "react";
const Courses = () => {
  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async() =>{
      try {
      const res = await axios.get('http://localhost:4001/book')
      console.log(res.data);
      setBook(res.data)
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getBook()
  },[])
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-6">
        <div className="mt-28 text-center">
          <h1 className="text-2xl  md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-600">Here! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit quo recusandae aspernatur consequatur quaerat, optio,
            minus excepturi dicta sunt autem sed? Blanditiis rerum nihil nulla
            minima ipsa recusandae numquam architecto obcaecati fugit quis ea,
            nostrum officiis quisquam omnis, fugiat et? Magnam culpa sequi
            exercitationem ipsam consectetur quos molestias a excepturi
            asperiores! Tempore, possimus repellat rerum modi praesentium
          </p>
          <Link to={'/'}>
          <button className="mt-6 text-white hover:bg-pink-600 py-2 px-4 rounded-lg bg-pink-500 hover:duration-300">
            Back
          </button>
      </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
