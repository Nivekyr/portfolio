import moi from '../images/Myself.jpg';
import astronomy from '../images/astronomy.jpg';
import dev from '../images/dev.jpg';
import games from '../images/games.jpg';
import music from '../images/music.jpg';



function Hero () {
    return (
        <div class="row heroBlock d-flex justify-content-center">
            <div class="col-6 row leftBlock">
                <p>
                    Welcome to my portfolio ! Let me introduce my self, my name is Kévin Monféry, i'm a web and software engineer.
                    I start coding about 2 years ago cause i wanted to create my own video game.
                    And now i'm passionate with the dev world in general.
                    Im a pro about everything alive and more le texte continuerass.
                    <img class="moi card" src={moi} alt="kevinmonfery" />
                </p>

                </div>
            <div class=" col-6 row rightBlock">
            <span class="col-12 passionsTitle justify-content-center d-flex align-items-end">HOBBIES</span>
                <img src={astronomy} alt="astronomy" class="passionsCard col-5 card" />
                <img src={dev} alt="dev" class="passionsCard col-5 card" />
                <img src={music} alt="astronomy" class="passionsCard col-5 card" />
                <img src={games} alt="astronomy" class="passionsCard col-5 card" />

                
            </div>
        </div>
    );
}

export default Hero;