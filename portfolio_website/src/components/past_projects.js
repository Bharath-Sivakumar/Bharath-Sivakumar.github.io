import React from 'react'
import './past_projects.css'
import '../App.css'


function past_projects() {
    return (
        <>
            <div className='title-ribbon'>
                <h1>Past Projects</h1>
            </div>
            <div className='project-1-content'>
                <div className='project-1-text'>
                    <h2>Intelligent bibliometrics for knowledge discovery</h2>
                    <p>
                    Intelligent bibliometrics is a scientific and innovative way of exploring knowledge. This technology is dedicated to 
                        discovering new knowledge from statistical methods through a large number of literature innovations. Develop a quantitative model whose value exceeds its own. This model is called value-added information.We can use bibliometrics to analyze scientific literature.
                         We combine it with artificial intelligence to efficiently extract useful large-scale data from scientific literature. <br /> <br />
                     
                     During this project I utlised two 
                    natural language processing (NLP) libraries such as Google AI's BERT (via Tensorflow) and Word2Vec using the Python programming language.
                    These libraries enabled us to analyse the statistical significance of certain words in a dataset of 1000+ academic
                    articles across many different fields, including Engineering and Medical Science
                    </p>
                </div>
                <img src='https://2.bp.blogspot.com/-qRz-hnwUdY4/WulXSQ6Rv4I/AAAAAAAATvQ/shk7KsphA0c3E3nUMsDVASqYaH0PhLPNwCK4BGAYYCw/s1600/GoogleAI_logo_horizontal_color_rgb.png'></img>
                <img src='https://www.gstatic.com/devrel-devsite/prod/v3c2319be42ec37c76448426e64c5186bfb85c07b78d714f8abe2af99733028ed/tensorflow/images/lockup.svg'></img>
            </div>
            <div className='project-2-content'>
                <div className='project-2-text'>
                    <h2>Task Manager</h2>

                    <p>
                        Over the years I have used many different project management applications in order to keep track of items that I need to complete.
                        However each of the off the shelf solutions had some major drawbacks that prevented me from using them consistently, due to these 
                        solutions not meeting my specific needs. Therefore I begun creating my own solution to cover my specific needs
                        <br /> <br />
                        In order to accomplish this I used several development services. For the front end I used ReactJS to craft a user interface that
                        I was able to easily use. While ReactJS is generally used for web development, I was able to convert it into a progressive web application
                        that could be used on both mobile and desktop. For the back end I used MongoDB to store all task items as well as their associated due dates.
                        due to the NoSQL nature of this service, it was easy to query and parse the data using JavaScript.</p>
                </div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'></img>
                <img src='https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg'></img>
            </div>
        </>
    )
}

export default past_projects

