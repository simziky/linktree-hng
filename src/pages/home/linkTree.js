import profile from "../../images/profile.svg"
import share from "../../icons/share.svg"
import './linkTree.scss';

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

          <a href="https://training.zuri.team/" >Zuri Team</a>

          <a href="http://books.zuri.team" >Zuri Books</a>

          <a href="https://books.zuri.team" >Python Books</a>

          <a href="https://background.zuri.team" >Background Check for Coders</a>

          <a href="https://books.zuri.team/design-rules" >Design Books</a>

        </div>

        <div className="socials">

          <div className="socials-inner">

          </div>

        </div>

      </div>

    </div>




{/***********************Footer section********************/}
    <div className='footer'>

    </div>


    </div>
  );
}

export default Home;
