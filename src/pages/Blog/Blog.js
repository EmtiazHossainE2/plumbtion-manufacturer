import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
        <PageTitle title="Blog -"></PageTitle>
            <div className='bg-[#f0efef] px-5 lg:px-12 pb-8'>
                <h2 className='text-center py-8 text-3xl font-bold italic'>Welcome to blog page</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        blogs.map(blog =>
                            <div key={blog.id} className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{blog.question}
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
            <Footer />
        </>
    );
};

export default Blog;