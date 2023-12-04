import React, { useState } from 'react';
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pin, LogoIonic, Send, CallSharp, NewspaperSharp, DocumentTextSharp,HeartSharp   } from 'react-ionicons'


const Footer1 = () => { 
  const [email, setEmail] = useState('');

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      console.log('Email sent successfully');
      
      setEmail('');
    } else {
      console.error('Error sending email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

return (
  <footer className="footer-09">
      <div className="container1">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">

          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading d-flex">
              <span className="icon d-flex align-items-center justify-content-center">
                <LogoIonic color={'#00000'} title={'logo'} height="40" width="40px" />
              </span>
              About
            </h2>
            <div className="block-23 mb-3">
              <ul>
                <li><Pin color={'#00000'} title={'pin'} height="40px" width="40px" />
                  <a href="https://www.google.com/maps/place/M%E1%BB%B9+thu%E1%BA%ADt+%C4%91a+ph%C6%B0%C6%A1ng+ti%E1%BB%87n+FPT+Arena/@10.7865728,106.6648832,18.46z/data=!4m6!3m5!1s0x31752edac37c5025:0xd5fab66e51e1049d!8m2!3d10.7866489!4d106.6663127!16s%2Fg%2F11cmy6zx9z?hl=vi-VN&entry=ttu"><span className="text">590 D Cach Mang Thang 8, Phuong 11, Quan 3, TPHCM, Viet Nam</span></a></li>
                <li><a href="/"><CallSharp color={'#00000'}   title={'call'}   height="30px"   width="30px"
/>
                <span className="text">+2 392 3929 210</span></a></li>
                <li><a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSKkwslZVCxkRdMVthlDBsTvbKXFrzCjwPVjHwXpcqzxswHdTLfsBhqzNFsgRCqGLgTkzxfk"><Send color={'#00000'}  title={'send'} height="30px" width="30px" />
                <span className="text">EyeonicBest@gmail.com</span></a></li>
              </ul>
            </div>
            <form action="#" className="subscribe-form" onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control rounded-left"
            placeholder="Enter email address"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="form-control submit rounded-right">
            <span className="sr-only">Submit</span>
            <Send color={'#00000'} title={'send'} height="30px" width="30px" />
          </button>
        </div>
      </form>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading d-flex align-items-center" style={{marginLeft:'80px'}}><span className="icon d-flex align-items-center justify-content-center"><NewspaperSharp
  color={'#00000'} 
  title={'new'}
  height="30px"
  width="30px"
/></span>Latest News</h2>
            <div className="block-21 mb-4 d-flex">
              <div className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></div>
              <div className="text">
                <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="/"><span className="icon-calendar" /> Oct. 16, 2019</a></div>
                  <div><a href="/"><span className="icon-person" /> Admin</a></div>
                  <div><a href="/"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <div className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></div>
              <div className="text">
                <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="/"><span className="icon-calendar" /> Oct. 16, 2019</a></div>
                  <div><a href="/"><span className="icon-person" /> Admin</a></div>
                  <div><a href="/"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading d-flex align-items-center" style={{marginLeft:'50px'}} ><span className="icon d-flex align-items-center justify-content-center"> <DocumentTextSharp
  color={'#00000'} 
  title={'information'}
  height="30px"
  width="30px"
/></span>Information</h2>
            <ul className="list-unstyled">
              <li><a href="/Nhom3-eProject/about" className="py-1 d-block">About</a></li>
              <li><a href="/Nhom3-eProject/product" className="py-1 d-block">Products</a></li>
              <li><a href="/Nhom3-eProject/blog" className="py-1 d-block">Blog</a></li>
              <li><a href="/Nhom3-eProject/contact" className="py-1 d-block">Contact</a></li>
              <li><a href="/Nhom3-eProject/about" className="py-1 d-block">Help &amp; Support</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading d-flex align-items-center" style={{marginLeft:'80px'}}><span className="icon d-flex align-items-center justify-content-center"><HeartSharp
  color={'#00000'} 
  title={'folow'}
  height="30px"
  width="30px"
/></span>Folow Us</h2>
            <div className="block-24">
              <div className="row no-gutters">
                <div className="col-4 col-md-4 p-1">
                  <img src={process.env.PUBLIC_URL + '/images/image 1.jpg'} alt="Website Logo" width={'70px'}/>
                </div>
                <div className="col-4 col-md-4 p-1">
                <img src={process.env.PUBLIC_URL + '/images/image 2.jpg'} alt="Website Logo" width={'80px'}/>
                </div>
                <div className="col-4 col-md-4 p-1">
                <img src={process.env.PUBLIC_URL + '/images/image 3.jpg'} alt="Website Logo" width={'90px'}/>
                </div>
                <div className="col-4 col-md-4 p-1">
                <img src={process.env.PUBLIC_URL + '/images/image 4.jpg'} alt="Website Logo" width={'80px'}/>
                </div>
                <div className="col-4 col-md-4 p-1">
                <img src={process.env.PUBLIC_URL + '/images/image 5.jpg'} alt="Website Logo" width={'90px'}/>
                </div>
                <div className="col-4 col-md-4 p-1">
                <img src={process.env.PUBLIC_URL + '/images/image 6.jpg'} alt="Website Logo" width={'100px'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;

