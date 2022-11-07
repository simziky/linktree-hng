import "./footer.scss"
import zuri from "../../images/Zuri.png"
import ingressive from "../../images/I4G.png"

const Footer = () => {
    return (
    <div className='footer'>

    <div className="footer-inner">
    
      <img src={zuri} alt="zuri" />
      <span>HNG Internship 9 Frontend Task</span>
      <img src={ingressive} alt="I4G" />
    
    </div>
    
    </div>
    )
}

export default Footer