import { Link } from "react-router-dom";

import profile from "../../images/profile.svg"
import share from "../../icons/share.svg"
import slack from "../../icons/slack.png"
import github from "../../icons/github.png"
import zuri from "../../images/Zuri.png"
import ingressive from "../../images/I4G.png"
import './linkTree.scss';
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <div className="Home">


{/***********************Content section********************/}
    <div className='content'>

      <div className='content-inner'>

        <div className='profile-section'>

          <div id="profile__img">
            <img src={profile} alt="profile-img" />
          </div>

          <span>
            <img src={share} alt="share-icon" />
          </span>

          <div className='profile-social'>
            <div id="twitter">Simeon_Kong</div>

            <div id="slack">Simeon Ehioze</div>

          </div>

        </div>

        {/******************************Link Section***********************/}
        <div className='links-section'>
          <a href="https://twitter.com/Simeon_kong" >Twitter Link</a>

          <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>

          <a href="http://books.zuri.team" id="books">Zuri Books</a>

          <a href="https://books.zuri.team" id="book__python">Python Books</a>

          <a href="https://background.zuri.team" id="pitch">Background Check for Coders</a>

          <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>

            <Link to="/Contact" id="contact"> Contact </Link>
             

        </div>

        <div className="socials">

          <div className="socials-inner">
            <img src={slack} alt="slack" />
            <img src={github} alt="github" />
          </div>

        </div>

      </div>

    </div>




{/***********************Footer section********************/}
   <Footer />


    </div>
  );
}

export default Home;
