import '../style/Hero.scss'
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero">
            <h1>Kévin Monféry</h1>
    <div class="all">
    <div class="lefter">
        <Link to='home' smooth duration={1000}><div className='linker'></div></Link>
  <div class="text">Profile</div>
</div>
<div class="left">
<Link to='experience' smooth duration={1000}><div className='linker'></div></Link>
  <div class="text">Experience</div>
</div>
<div class="center">
  <div class="explainer"><span>Welcome</span></div>
  <Link to='mywork' smooth duration={1000}><div className='linkermywork'></div></Link>
  <div class="text">My Work</div>
  </div>
<div class="right">
<Link to='feedback' smooth duration={1000}><div className='linker'></div></Link>
  <div class="text">FeedBack</div>
</div>
<div class="righter">
<Link to='contact' smooth duration={1000}><div className='linker'></div></Link>
  <div class="text">Contact</div>
</div>
</div>

  <div class="waves"></div>

</section>
    )
}

export default Hero; 