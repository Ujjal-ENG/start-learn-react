import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from './blogsData';
const Blog = () => {
    const [blogs, setBlogs] = useState(blogsData);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">This is the Blog Page</h1>

            <section className="text-xl font-semibold text-center py-5">
                {blogs.map((blog) => {
                    const { id, title, desc } = blog;
                    return (
                        <article key={id}>
                            <h3 className="text-3xl font-bold ">{title}</h3>
                            <p>{desc.slice(0, 90) + '....'}</p>
                            <Link className="px-4 py-1 font-bold bg-blue-600" type="button" to={title}>
                                Read More
                            </Link>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Blog;
