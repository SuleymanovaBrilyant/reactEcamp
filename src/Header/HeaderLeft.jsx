import './HeaderLeft.css'
import myImage from './img/bri.png'
function Left() {
    return(
        <div>
            
            <ul>
              <img className='MyImage' src={myImage} alt="My Image" />
                <li>About Us</li>
                <li>How it work</li>
                <li>Pricing</li>
                <li>FAQs</li>
            </ul>
        </div>
    )
}

export default Left;