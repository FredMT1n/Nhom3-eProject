import React from "react";
import "./App.css";
<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>

function Footer() {
    return ( 
        <div className="footer">
            <div className="footer-copyright">
                <div className="overlap-group">
                    <p className="copyright-by-name-s">
                        Copyright by Name -<br /> Số: 0xxxxxxxx9 - Ngày Cấp: 20/11/2023
                        <br />
                        Góp ý &amp; Khiếu nại: lienhe@xxxxxxx.com
                    </p>
                </div>
            </div>
            <div className="footer-about">
                <div className="text-wrapper">About us</div>
                <div className="div">Introduce</div>
                <div className="text-wrapper-2">Agent certification</div>
            </div>
            <div className="footer-contact">
                <div className="text-wrapper">Contact Info</div>
                <div className="div">Phone: 1900 xxxx</div>
                <div className="text-wrapper-2">Email: eyeonic@gmail.com</div>
                <div className="text-wrapper-3">Websize: eyeonic.com</div>
            </div>
            <div className="footer-policy">
                <div className="text-wrapper">Purcharse policy</div>
                <div className="div">Payments</div>
                <div className="text-wrapper-2">Warranty Policy</div>
                <div className="text-wrapper-3">Delivery policy</div>
                <div className="text-wrapper-4">Exchange policy</div>
            </div>
            <div className="footer-product">
                <div className="text-wrapper">All product</div>
                <div className="div">Glasses</div>
                <div className="text-wrapper-2">Lenses</div>
                <div className="text-wrapper-3">Sunglasses</div>
                <div className="text-wrapper-4">Accessory</div>
            </div>
            <div className="overlap">
                <div className="footer-banner">
                    <div className="overlap-2">
                        <div className="text-wrapper-5">Eyeonic</div>
                        <div className="text-wrapper-6">Warranty Policy</div>
                        <div className="text-wrapper-7">Free eye examination</div>
                        <div className="text-wrapper-8">Old meets new</div>
                    </div>
                </div>
                <div className="footer-icons">
                    <div className="facebook"><ion-icon name="logo-facebook"></ion-icon></div>
                    <div className="instagram"><ion-icon name="logo-instagram"></ion-icon></div>
                    <div className="twitter"><ion-icon name="logo-twitter"></ion-icon></div>
                </div>
            </div>
        </div>
     );
}

export default Footer;