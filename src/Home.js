import {useState,useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
 
const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');

    return ( 
     <div className="home">
      {error && <div>could not fetch the data for that resource</div>}
      {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs={blogs} title="AllBlogs"/>}
     </div>  
     );
}
 
export default Home;