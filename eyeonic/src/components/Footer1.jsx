import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pin, LogoIonic, Call, Send } from 'react-ionicons'

const Footer1 = () => {
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
                  <span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="/"><Call color={'#00000'}  title={'call'} height="30px" width="30px" />
                <span className="text">+2 392 3929 210</span></a></li>
                <li><a href="/"><Send color={'#00000'}  title={'send'} height="30px" width="30px" />
                <span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input type="text" className="form-control rounded-left" placeholder="Enter email address" />
                <button type="submit" className="form-control submit rounded-right"><span className="sr-only">Submit</span><Send color={'#00000'}  title={'send'} height="30px" width="30px" /></button>
              </div>
            </form>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading d-flex align-items-center"><span className="icon d-flex align-items-center justify-content-center"><i className="ion-ios-list-box" /></span>Latest News</h2>
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
            <h2 className="footer-heading d-flex align-items-center"><span className="icon d-flex align-items-center justify-content-center"><i className="ion-ios-document" /></span>Information</h2>
            <ul className="list-unstyled">
              <li><a href="/" className="py-1 d-block">About</a></li>
              <li><a href="/" className="py-1 d-block">Products</a></li>
              <li><a href="/" className="py-1 d-block">Blog</a></li>
              <li><a href="/" className="py-1 d-block">Contact</a></li>
              <li><a href="/" className="py-1 d-block">Help &amp; Support</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading d-flex align-items-center"><span className="icon d-flex align-items-center justify-content-center"><i className="ion-logo-instagram" /></span>Instagram</h2>
            <div className="block-24">
              <div className="row no-gutters">
                <div className="col-4 col-md-4 p-1">
                  <div className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></div>
                </div>
                <div className="col-4 col-md-4 p-1">
                  <div className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></div>
                </div>
                <div className="col-4 col-md-4 p-1">
                  <div className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></div>
                </div>
                <div className="col-4 col-md-4 p-1">
                  <div className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></div>
                </div>
                <div className="col-4 col-md-4 p-1">
                  <div className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></div>
                </div>
                <div className="col-4 col-md-4 p-1">
                  <div className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }}></div>
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

