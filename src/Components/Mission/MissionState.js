import React, {Component} from 'react';
import './MissionState.css';


class MissionState extends Component {
render() {

    const missionStatement = [
                            { 
                                desc:   `
                                         My mission at Searan is to give you the best professional web presence possible. Wether it's through company 
                                         branding or developing your next website. I am with you evey step of the way from inception to launch! 
                                        `
                            },

                            {
                                note:   `-- I have had the pleasure to work with many great businesses and I’m always looking for new and exciting projects.`
                            }
                        ]

    return (
        <section className = 'mission-content' id='About'>
            <div className = 'mission-intro'>
                <p> 
                    {missionStatement[0].desc}
                <br/>
                <br/>
                    <span className = 'mission-side-note'>{missionStatement[1].note} </span>
                </p>
            </div>
            <a href='https://www.linkedin.com/in/searan/' className = 'btn-more-info'> More About Me </a>
        </section>
    )
  }
}

export default MissionState;
