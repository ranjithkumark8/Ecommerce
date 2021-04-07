import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_contact footer_subDivisions">
                <ul>
                    <li>T: +44 (0)1239 612 469</li>
                    <li>E: HI@HIUTDENIM.CO.UK</li>
                    <li>CUSTOMER SERVICE</li>
                    <li>TERMS & CONDITIONS</li>
                    <li>GIFT VOUCHER</li>
                </ul>
            </div>
            <div className="footer_social footer_subDivisions">
                <ul>
                    <li>FACEBOOK</li>
                    <li>INSTAGRAM</li>
                    <li>TWITTER</li>
                    <li>PINTEREST</li>
                    <li>MEDIUM</li>
                </ul>
            </div>
            <div className="footer_instructions footer_subDivisions">
                <ul>
                    <li>HOW TO WASH</li>
                    <li>REPAIRS</li>
                    <li>FAQ</li>
                    <li>STOCKISTS</li>
                    <li>NO WASH CLUB</li>
                </ul>
            </div>
        </div>
    )
}
