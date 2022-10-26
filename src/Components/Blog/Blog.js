import React from 'react';

const Blog = () => {
    return (
        <div className='w-50 m-auto mt-5 '>


            <div className="card mb-5">
                <div className="card-header">

               <h4> 1. What is cors?   </h4>    

                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">

                        <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                       
                    </blockquote>
                </div>
            </div>
            


            <div className="card mb-5">
                <div className="card-header">
                <h4>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">

                        <p>A well-known quote, contained in a blockquote element.</p>
                       
                    </blockquote>
                </div>
            </div>


            <div className="card mb-5">
                <div className="card-header">
                   <h4> 3. How does the private route work?</h4>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">

                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                </div>
            </div>

            <div className="card mb-5">
                <div className="card-header">
                   <h4> 4. What is Node? How does Node work?</h4>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        
                        <p>A well-known quote, contained in a blockquote element.</p>
                    
                    </blockquote>
                </div>
            </div>

        </div>
    );
};

export default Blog;