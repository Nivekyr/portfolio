import React from "react";
import {Link} from "react-scroll"
import briefing from '../icon/briefing.png'
import bullhorn from '../icon/bullhorn.png'
import certificate from '../icon/certificate.png'
import courriel from '../icon/courriel.png'
import feedback from '../icon/feedback.png'
import profil from '../icon/profil.png'
import '../style/Aside.scss'


 
const Aside = () => {
    return (
        <nav id="asidenav">
        <div className="trapeze1"></div>
        <div className="trapeze2"></div>
            <ul>
                <Link to="home" smooth duration={1000}><li><img src={profil} alt="profil" /></li></Link>
                <Link to="experience" smooth duration={1000}><li><img src={briefing} alt="briefing" /></li></Link>
                <Link to="mywork" smooth duration={1000}><li><img src={certificate} alt="certificate" /></li></Link>
                <Link to="feedback" smooth duration={1000}><li><img src={feedback} alt="feedback" /></li></Link>
                <Link to="media" smooth duration={1000}><li><img src={bullhorn} alt="bullhorn" /></li></Link>
                <Link to="contact" smooth duration={1000}><li><img src={courriel} alt="courriel" /></li></Link>
            </ul>
        </nav>
    )
}

export default Aside;