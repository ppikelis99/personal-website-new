import './MainSection.css'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import avatar from '../../images/avatar.jpg'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import webAnim from '../../assets/Webdev.lottie?url'

export default function MainSection() {
    const subtitle = 'FastTrack Student'
    return(
        <div className='mainSections'>
            <section className="hero">
                <div className='heroContent'>
                    <div className='heroTitle'>
                        <h1>Frontend <span className='heroDeveloper'>Developer</span></h1>
                    </div>
                    <div className='heroSubtitle'>
                        {subtitle.split("").map((char, index) => (
                        <span key={index} style={{"--index": index}}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                        ))}
                    </div>
                    <div className='heroDescription'>Bringing ideas to life in the browser. I bridge the gap between design and code to build intuitive web interfaces.</div>
                    <div className='heroSkills'>
                        <p>React</p>
                        <p>JavaScript</p>
                        <p>Python</p>
                        <p>Django</p>
                        <p>SQLite</p>
                    </div>
                    <div className='heroActions'>
                        <a href='https://pauliusp.lt/portfolio'>Projects</a>
                        <a href='https://pauliusp.lt/contact'>Contact</a>
                    </div>
                </div>
                <div className='lottieBox'>
                    <DotLottieReact src={webAnim} className='lottieAnim' loop autoplay/>
                </div>
            </section>
            <div className='heroSocials'>
                <a href="https://github.com/ppikelis99?tab=repositories"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/paulius-pikelis-755a16381/"><img src={linkedin} alt="" /></a>
            </div>
            <section className='about'>
                <div className='aboutContainer'>
                    <div className='aboutTitle'>
                        <h1>About Me</h1>
                        <h3>Status: <span className='aboutStatus'>Actively searching for a job</span></h3>
                    </div>
                    <div className='aboutDescriptionBox'>
                        <div className='aboutDescription'>
                            <p className='whoAm'>Hello, I'm <span className='aboutFullName'>Paulius Pikelis</span></p>
                            <p>I am a motivated Junior Front-End Engineer who completed intensive, instructor-led
                            programming courses (364 hours) and continues to deepen my knowledge independently.
                            After completing mandatory military service, I decided to return to IT field I had previously stepped away from due to a lack of IT opportunities in my hometown.</p>
                            <a className='aboutAction' href="">View my Projects</a>
                        </div>
                        <img className='aboutAvatar' src={avatar} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}