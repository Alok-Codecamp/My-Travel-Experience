import React from 'react';
import BlogPosts from './BlogPosts/BlogPosts';
import NavBar from './NavBar/NavBar';

const Home = () => {
    return (
       <div>
        <NavBar></NavBar>       
        <BlogPosts></BlogPosts>  
       </div>
    )
}

export default Home;