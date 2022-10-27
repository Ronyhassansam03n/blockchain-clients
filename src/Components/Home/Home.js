import React from 'react';
import Block02 from './../Home/homepic/Block02.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='d-flex  me-5 m-5'>


            <div >

            <h1 >
                    Welcome To Blockchain World !

                </h1> <br/>

                <h4 className='text-danger '> " We are at the beginning of a global wave of demand for blockchain academic and professional education and certification. We are  offering the first Master of Science degree in Blockchain and Digital Currency, available to students worldwide through an online  since 2022. The programme is hosted by the Great & Friendly Teacher's. "</h4>
            </div>

            <div  >
                
               <img 
               src={Block02}alt="" 
               />
            </div>
        </div>
    );
};

export default Home;