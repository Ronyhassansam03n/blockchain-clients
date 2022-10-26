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

                        <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>

                        <p> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                       
                    </blockquote>
                </div>
            </div>


            <div className="card mb-5">
                <div className="card-header">
                   <h4> 3. How does the private route work?</h4>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">

                        <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    </blockquote>
                </div>
            </div>

            <div className="card mb-5">
                <div className="card-header">
                   <h4> 4. What is Node? How does Node work?</h4>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        
                        <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications</p>

                        <p>Node. js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Non-blocking I/o: Non-blocking i/o means working with multiple requests without blocking the thread for a single request.</p>


                    
                    </blockquote>
                </div>
            </div>

        </div>
    );
};

export default Blog;