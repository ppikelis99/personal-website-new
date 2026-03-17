import './Portfolio.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import briefCase from '../../assets/Briefcase.lottie?url'
import projectData from './Portfolio.json'

export default function Portfolio() {
    return(
        <section className='portfolioBox'>
            <DotLottieReact src={briefCase} className='briefCaseAnim' loop autoplay/>
            <h1>Portfolio Showcase</h1>
            <p>Explore my journey through projects</p>
            <div className='portfolioBoundries'>
                <div className='portfolioTable'>
                {projectData.projects.map(project => (
                        <div className='projectTable' key={project.id}>
                            <div className='projectInfo'>
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
                                <div className='projectTech'>
                                    {project.technologies.map(technologie => (
                                        <p key={technologie}>{technologie}</p>
                                    ))}
                                </div>
                                <div className='projectLinks'>
                                    <a className='projectLink' href={project.links.live}>Demo</a>
                                    <a className='projectLink' href={project.links.repo}>GitHub</a>
                                </div>
                                <img className='projectImg' src={project.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}