import React from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import FbIcon from '../../assets/images/fb.png';
import InIcon from '../../assets/images/insta.png';
import MailIcon from '../../assets/images/email.png';
import MoneyLogo from '../../assets/images/MoneyMelaLOGO.png';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    let navigate = useNavigate();

    return (
        <div className="main-wrapper">
            <div className="head-bg">
                <Container>
                    <div className="head-wrap">
                        <div onClick={() => navigate('/')} className="head-logo c-pointer">
                            <img src={MoneyLogo} />
                        </div>
                        <div className="social-icon">
                            <div><img src={FbIcon} /></div>
                            <div><img src={InIcon} /></div>
                            <div><img src={MailIcon} /></div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="txt-wrap">
                <Container>
                    <h4 className="yellow-txt">About Us</h4>
                    <p className="fade-txt">Money Mela Games is the Real Money Gaming platform where users
                        have a chance to participate in familiar Trivia Game Shows and
                        Use their Skills and Knowledge to Earn Money!</p>
                    <p className="fade-txt">Our goal is to be India’s largest game show platform for users to
                        experience an array of game show formats in their preferred language.
                        We want our platform to engage a wide variety of audiences whether it
                        is hosting a Game show about a friend on their birthday, a family
                        reunion or at a corporate gathering. Our vision is to give people
                        access to an experience that has previously been reserved for very
                        few contestants on TV.</p>
                    <p className="fade-txt">While watching any Game Show did you think you knew the answer to the questions.
                        Have you sat in front of your TV and wished that you were on the hot-seat? </p>
                    <p><span className="bold-txt">Download Money Mela</span>&nbsp;
                        <span className="fade-txt">and You can be on the Hot-Seat EVERY DAY. </span>
                    </p>
                </Container>
            </div>
            <div className="footer-bg">
                <Container>
                    <div className="bottom-sec">
                        <img src={MoneyLogo} className="bot-logo" />
                        <div className="d-flex social-icon">
                            <div><img src={FbIcon} /></div>
                            <div><img src={InIcon} /></div>
                            <div><img src={MailIcon} /></div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div onClick={() => navigate('/termsandconditions')} className="c-pointer"><p className="fade-txt">&nbsp;Terms & Conditions |</p></div>
                            <div onClick={() => navigate('/privacypolicy')} className="c-pointer"><p className="fade-txt">&nbsp;Privacy Policy |</p></div>
                            <div onClick={() => navigate('/aboutus')} className="c-pointer"><p className="fade-txt">&nbsp;About Us</p></div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default AboutUs;