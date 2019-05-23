import React, {Component} from 'react';

//  project photo's
import project1 from '../../img/Projects/project1.gif';
import project2 from '../../img/Projects/project2.gif';
import project3 from '../../img/Projects/project3-3-2.gif'
import project4 from '../../img/Projects/project4-4.gif'
import project5 from '../../img/Projects/project5.gif'

// icons
import react from '../../img/Tech/2.jpg';
import jQuery from '../../img/Tech/3.jpg';
import heroku from '../../img/Tech/4.jpg';
import gmaps from '../../img/Tech/5.jpg';
import stripe from '../../img/Tech/6.jpg';
import udacity from '../../img/Tech/7.jpg';
import leaflet from '../../img/Tech/8.jpg';
import mapbox from '../../img/Tech/9.jpg';
import js from '../../img/Tech/11.jpg';
import github from '../../img/Tech/12.jpg';
import wordpress from '../../img/Tech/13.jpg';
import woo from '../../img/Tech/14.jpg';
import a11y from '../../img/Tech/15.jpg';



import './Projects.css';

class  Projects extends Component {

    render() {

        const projectTitle = [
            {
                title: `I believe in crafting quality solutions with the process 
                        of design and the percision of development in mind. Please 
                        take a look around my website & view my projects.
                        `
            }
        ]

        const projects = [

            // Project 0

            {
                name: 'Venue App',
                description:    `
                                    This neighborhood map showcases Crete the largest Greek island with 30 default markers provided 
                                    with more information when clicked, along with the ability to search by name or type of venue 
                                    in a drop down menu. When a marker is selected the marker will jump to allow the searcher to easily 
                                    identify the venues location on the map.
                                `,
                heroku: 'https://app-neighborhood-map.herokuapp.com/',
                github: 'https://github.com/maxsearan/Neighborhood-Map'
            },

            // project 1

            {
                name: 'myReads App',
                description:    `
                                    This stylish, reponsive, and user friendly Book Tracking App allows users to search through assorted 
                                    books. The user will be able to change the books state to "Currently Reading" , "Wanting to Read", or 
                                    "Read". This is the 6th project for the FEND Udacity Program.
                                `,
                heroku: 'https://bookshelf-react-reads.herokuapp.com/',
                github: 'https://github.com/maxsearan/MyReads'
            },

            // project 2

            {
                name: 'PWA',
                description:    `   This ARIA comppliant app allows the user to select a restaurant to see various reviews, hours, and locations.
                                    It uses leaflet and mapbox to determine locations!
                                `,
                heroku: '' ,
                github: 'https://github.com/maxsearan/restaurant-review-app'
            },

            // project 3

            {
                name: 'Memory',
                description:    `
                                    This memory game is built using vanilla javaScript and jQuery. 
                                    There is a built in timer, performance star rating, and move counter....Have fun! 
                                `,
                ghPages: 'https://maxsearan.github.io/memory-game.io/',
                github:  'https://github.com/maxsearan/memory-game.io/'
            },

            // project 4

            {

                name: 'Rendury',
                description:    `
                                    Rendury is a Virtual Staging company based out of Atlanta Ga. 
                                    The new and updated identity was a result of rendury's business vision. 
                                    The new website is the full vision of the company's expertise in Virtual Staging, 
                                    Architectural Renderings, and 3D floor plans. 

                                `,
                website: 'https://www.rendury.com', 

            }


        ]

      
        return (
        <section className='project-container' id='Projects'> 
            <p className='project-title--main'>
                {projectTitle[0].title}
            </p>
            {/* project - 0 venue */}

            <div className='project-content'>

            <div className='project-info'>
                <div className='col1'>
                    <p className='project-name'>{projects[0].name}</p>
                    <button className = 'btn-more-info'><a href={projects[0].heroku}>launch</a></button>
                    <button className = 'btn-more-info'><a href={projects[0].github}>Github</a></button>
                </div>

                <div className='col2'>
                    <p className='project-description'>{projects[0].description}</p>
                    <div className='tech-container'>
                    <h1 className='tech-title--main'>Technologies</h1>
                        <ul className='techLogos'>
                            <img src={react} className='tech' />
                            <img src={gmaps} className='tech' />
                            <img src={heroku} className='tech' />
                        </ul>
                    </div>
                </div>
                <div className='col3'>
                        <img src={project1} className='project-images' />
                </div>
            </div>
            </div>

            {/* project - 1 myReads */}

            <div className='project-content'>

            <div className='project-info'>
                <div className='col1'>
                    <p className='project-name'>{projects[1].name}</p>
                    <a href={projects[1].heroku} className = 'btn-more-info'>launch</a>
                    <a href={projects[1].github} className = 'btn-more-info'>Github</a>
                </div>

                <div className='col2'>
                    <p className='project-description'>{projects[1].description}</p>

                    <div className='tech-container'>
                    <h1 className='tech-title--main'>Technologies</h1>
                        <ul className='techLogos'>
                            <img src={react} className='tech' />
                            <img src={udacity} className='tech' />
                            <img src={heroku} className='tech' />
                        </ul>
                    </div>
                </div>
                <div className='col3'>
                        <img src={project2} className='project-images' />
                </div>
            </div>
            </div>

            {/* project - 2 PWA */}

            <div className='project-content'>

            <div className='project-info'>
                <div className='col1'>
                    <p className='project-name'>{projects[2].name}</p>
                    <a href={projects[2].github} className = 'btn-more-info'>Github</a>
                </div>

                <div className='col2'>
                    <p className='project-description'>{projects[2].description}</p>

                    <div className='tech-container'>
                    <h1 className='tech-title--main'>Technologies</h1>
                        <ul className='techLogos'>
                            <img src={leaflet} className='tech' />
                            <img src={mapbox} className='tech' />
                            <img src={a11y} className='tech' />
                        </ul>
                    </div>
                </div>
                <div className='col3'>
                        <img src={project3} className='project-images' />
                </div>
            </div>
            </div>

            {/* project - 3 memory game  */}

            <div className='project-content'>

            <div className='project-info'>
                <div className='col1'>
                    <p className='project-name'>{projects[3].name}</p>
                    <a href={projects[3].ghPages} className = 'btn-more-info'>launch</a>
                    <a href={projects[3].github} className = 'btn-more-info'>Github</a>
                </div>

                <div className='col2'>
                    <p className='project-description'>{projects[3].description}</p>

                    <div className='tech-container'>
                    <h1 className='tech-title--main'>Technologies</h1>
                        <ul className='techLogos'>
                            <img src={jQuery} className='tech' />
                            <img src={js} className='tech' />
                            <img src={github} className='tech' />
                        </ul>
                    </div>
                </div>
                <div className='col3'>
                        <img src={project4} className='project-images' />
                </div>
            </div>
            </div>

            {/* project - 4 Rendury   */}

            <div className='project-content'>

            <div className='project-info'>
                <div className='col1'>
                    <p className='project-name'>{projects[4].name}</p>
                    <a href={projects[4].website} className = 'btn-more-info'>launch</a>
                </div>

                <div className='col2'>
                    <p className='project-description'>{projects[4].description}</p>

                    <div className='tech-container'>
                    <h1 className='tech-title--main'>Technologies</h1>
                        <ul className='techLogos'>
                            <img src={wordpress} className='tech' />
                            <img src={woo} className='tech' />
                            <img src={stripe} className='tech' />
                        </ul>
                    </div>
                </div>
                <div className='col3'>
                        <img src={project5} className='project-images' />
                </div>
            </div>
            </div> 


        </section>
        );
    }
}

export default Projects





















