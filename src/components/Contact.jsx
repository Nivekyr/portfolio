import git from '../images/github1.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png';
import istg from '../images/instagram.png';
import game from '../images/testimage.png';

function Contact () {
    return (
        <div class="row contactBlock d-flex justify-content-center">
            <div class="col-6 row leftBlock">
            <img class="contactLogo col-3" src={git} alt="git" />
            <img class="contactLogo col-3" src={linkedin} alt="linkedin" />
            <img class="contactLogo col-3" src={mail} alt="mail" />
            <img class="contactLogo col-3" src={istg} alt="istg" />
            <span class="col-12 resume justify-content-center d-flex"><button class="rounded">Show Resume</button></span>
            </div>
                <div class=" col-6 row rightBlock">
                    <div class="col-12"><img class="card gameSite" src={game} alt=''/></div>
                </div>
        </div>
    );
}

export default Contact;