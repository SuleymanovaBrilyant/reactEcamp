import './FooterLeft.css'
import Page from './image/logo.png'
function FooterLeft() {
    return (
        <div>
            <div>
                <img className='Image' src={Page} alt="" />
            </div>
            <h3>
                Want to recieve our
                awesome stories?
            </h3>
            <div className='RightInputButton'>
                <input type="text" placeholder='Enter your email'/>
                <button>Subcribe</button>
            </div>
            <p className='LeftP'>© The 18 Design, All rights reserved.</p>
        </div>
    )
}
export default FooterLeft;