import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost/BlogPost';
import './BlogPosts.css'
const BlogPosts = () => {
    const [Blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('https://vast-ravine-84875.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='blog-container'>
            hello
          {
             Blogs.map(blog=><BlogPost
             key={blog.id}
             blog={blog}    
             ></BlogPost>)
          }
        </div>
    );
};

export default BlogPosts;