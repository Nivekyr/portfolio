import js from '../images/js.png';
import csharp from '../images/c-sharp.png';
import git from '../images/github.png';
import node from '../images/node-js.png';
import rect from '../images/react.png';
import sass from '../images/sass.png';
import symfony from '../images/symfony.png';
import css from '../images/css-3.png';
import html from '../images/html-5.png';
import sql from '../images/sql.png';
import php from '../images/php.png';
import python from '../images/python.png';
import unity from '../images/unity.png';
import bootstrap from '../images/bootstrap.png';
import vegas from '../images/vegas.png';
import photoshop from '../images/photoshop.png';

import ProjectCard from './ProjectCard';
import {Project} from './Project';

function Techno () {
    const dataProject = Project.map((data)=>{
        return(
            <ProjectCard
            key={data.key}
            id={data.id}
            name={data.name}
            tech={data.tech}
            desc={data.desc}
            img={data.img}
            url={data.url}
            />
        )
    })
    return (
        
        <div class="row heroBlock d-flex justify-content-center">
            <div class="col-6 row leftBlock techLB">
                    {dataProject}
                </div>
            <div class=" col-6 row rightBlock">
                
                <div class="row d-flex justify-content-center align-items-center">
                    <span class="techText col-12 text-center">TECH AND SOFTWARE THAT I USE</span>
                    <img class="techLogo col-3" src={js} alt="" />
                    <img class="techLogo col-3" src={csharp} alt="" />
                    <img class="techLogo col-3" src={git} alt="" />
                    <img class="techLogo col-3" src={node} alt="" />
                    <img class="techLogo col-3" src={rect} alt="" />
                    <img class="techLogo col-3" src={sass} alt="" />
                    <img class="techLogo col-3" src={unity} alt="" />
                    <img class="techLogo col-3" src={symfony} alt="" />
                    <img class="techLogo col-3" src={css} alt="" />
                    <img class="techLogo col-3" src={html} alt="" />
                    <img class="techLogo col-3" src={php} alt="" />
                    <img class="techLogo col-3" src={sql} alt="" />
                    <img class="techLogo col-3" src={python} alt="" />
                    <img class="techLogo col-3" src={bootstrap} alt="" />
                    <img class="techLogo col-3" src={photoshop} alt="" />
                    <img class="techLogo col-3" src={vegas} alt="" />





                </div>
            </div>
        </div>
        
                
    );
}

export default Techno;