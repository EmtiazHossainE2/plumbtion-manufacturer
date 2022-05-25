import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='bg-[#f0efef] px-5 lg:px-12 py-5'>
            <h2 className='text-center py-8 text-3xl font-bold italic'>Welcome to blog page</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    blogs.map(blog =>
                        <div key={blog.id} class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">{blog.question}
                                </h2>
                                <p>{blog.answer && blog.answer}
                                </p>
                                {blog.img && (
                                    <a href="/problem1.png" target="_blank" rel="noopener noreferrer">
                                        <img src={blog.img} alt="" />
                                    </a>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blog;