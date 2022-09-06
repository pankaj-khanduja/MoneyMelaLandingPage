import React from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import FbIcon from '../../assets/images/fb.png';
import InIcon from '../../assets/images/insta.png';
import MailIcon from '../../assets/images/email.png';
import BannerText from '../../assets/images/banrT.png';
import BannerMob from '../../assets/images/Bannercreative.png';
import BannerMos from '../../assets/images/How-to-downld-1.jpg';
import BannerMos2 from '../../assets/images/How-to-downld-2.jpg';
import BannerMos3 from '../../assets/images/How-to-downld-3.jpg';
import BannerMos4 from '../../assets/images/How-to-downld-4.jpg';
import BannerMos5 from '../../assets/images/How-to-downld-5.jpg';
import BannerMos6 from '../../assets/images/How-to-downld-6.jpg';
import AndroidImg from '../../assets/images/cta1.png';
import iOSImg from '../../assets/images/cta2.png';
import LifeImg from '../../assets/images/Icon50.png';
import LastShow from '../../assets/images/Melashows1.png';
import ClockShow from '../../assets/images/Melashows2.png';
import BrainShow from '../../assets/images/Melashows3.png';
import FingerShow from '../../assets/images/Melashows4.png';
import UpiImg from '../../assets/images/Iconupi.png';
import BankImg from '../../assets/images/Iconbank.png';
import SecureIcon from '../../assets/images/Icon6.png';
import TourIcon from '../../assets/images/Icon5.png';
import CustomerIcon from '../../assets/images/Icon4.png';
import PlayIcon from '../../assets/images/Icon3.png';
import InstantIcon from '../../assets/images/Icon2.png';
import BonusIcon from '../../assets/images/Icon1.png';
import Download1 from '../../assets/images/Howtodown1.png';
import RupeeIcon from '../../assets/images/rupee.png';
import MoneyLogo from '../../assets/images/MoneyMelaLOGO.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AlertIcon from '../../assets/images/danger.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: 'auto',
    backgroundColor:'#4e366f',
    border: '2px solid #4e366f',
    boxShadow: 24,
    p: 0,
};

const Landing = () => {
    let navigate = useNavigate();
   
      const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const downloadslider = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
   

    const downloadsliderd = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const Testimonialresponsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className="main-wrapper">
            <div className="head-bg">
                <Container>
                    <div className="head-wrap">
                        <div className="head-logo">
                            <img src={MoneyLogo} />
                        </div>
                        <div className="social-icon">
                            <div><a href="https://www.facebook.com/moneymela"><img src={FbIcon} /></a></div>
                            <div><a href="https://www.instagram.com/moneymela.india/"><img src={InIcon} /></a></div>
                            <div><a href="mailto:admin@moneymelagames.com"><img src={MailIcon} /></a></div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="banner-top-bg">
                <Container>
                    <div>
                        <img src={BannerText} className="banr-title" />
                        <img src={BannerMob} />
                    </div>
                </Container>
            </div>
            <div className="yellow-bg">
                <Container>
                    <div className="title-sec">
                        <h4 >Download & get</h4>
                        <div className="d-flex">
                            <span><img src={RupeeIcon} /></span>
                            <h3>8 real cash</h3>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="app-img">
                        <a href="https://firebasestorage.googleapis.com/v0/b/money-mela.appspot.com/o/app-releaseNewServer.apk?alt=media&token=8eacf636-80e9-43d3-a6ac-1a5751e69541">
                                {/* https://drive.google.com/file/d/1bZbduYX2CfMSIl-tp1GPVi3uXRK0Zbrd/view?usp=sharing */}
                                <img onClick={handleOpen} src={AndroidImg} />
                            </a>
                        </div>
                        <div className="app-img">
                            <img src={iOSImg} />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="show-wrap">
                <Container>
                    <h4 className="yellow-txt">Games</h4>
                    <Col sm={10} className="m-auto">
                        <Row>
                            <Col sm={12} md={6}>
                                <img src={LastShow} className="show-img" />
                                <div className="show-txt">
                                    <h5>last one standing</h5>
                                    <p className="fade-txt">Can you Beat Every Level and be the LAST 1 STANDING?</p>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <img src={ClockShow} className="show-img" />
                                <div className="show-txt">
                                    <h5>Beat the clock</h5>
                                    <p className="fade-txt">A Race Against Time, Can you BEAT THE CLOCK?</p>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <img src={BrainShow} className="show-img" />
                                <div className="show-txt">
                                    <h5>how big is your brain</h5>
                                    <p className="fade-txt">Think You're the Smartest Person in the Room? Come and Find
                                        Out HOW BIG IS YOUR BRAIN?</p>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <img src={FingerShow} className="show-img" />
                                <div className="show-txt">
                                    <h5>fastest finger first</h5>
                                    <p className="fade-txt">A Race Against Your Opponent. WHOSE FINGERS are the FASTEST?</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={10} className="m-auto">
                        {/* <div className="life-box">
                            <h5 className="yellow-txt">lifelines</h5>
                            <img src={LifeImg} />
                            <p className="fade-txt">Use A Lifeline, Double your Chances of WINNING</p>
                        </div> */}
                    </Col>
                </Container>
            </div>
            <div className="dark-purp-bg">
                <Container>
                    <Col sm={10} className="m-auto">
                        <div className="yellow-banner">
                            <h4>Get Your Money Instantly !</h4>
                            <Col sm={7} className="m-auto">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <div className="d-block">
                                            <img src={UpiImg} />
                                            <h5>UPI</h5>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className="d-block">
                                            <img src={BankImg} />
                                            <h5>Bank Transfer</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                        <div className="img-wrap">
                            <h5 className="yellow-txt">why choose money mela</h5>
                            <Row>
                                <Col sm={12} md={4}>
                                    <div className="icon-bg">
                                        <img src={SecureIcon} />
                                    </div>
                                    <h6>100% Legal & Secure</h6>
                                </Col>
                                <Col sm={12} md={4}>
                                    <div className="icon-bg">
                                        <img src={TourIcon} />
                                    </div>
                                    <h6>24/7 Tournaments</h6>
                                </Col>
                                <Col sm={12} md={4}>
                                    <div className="icon-bg">
                                        <img src={CustomerIcon} />
                                    </div>
                                    <h6>24/7 Customer Support</h6>
                                </Col>
                                <Col sm={12} md={4}>
                                    <div className="icon-bg">
                                        <img src={PlayIcon} />
                                    </div>
                                    <h6>Only Real Players</h6>
                                </Col>
                                <Col sm={12} md={4}>
                                    <div className="icon-bg">
                                        <img src={InstantIcon} />
                                    </div>
                                    <h6>Instant Withdrawls</h6>
                                </Col>
                                <Col sm={12} md={4}>
                                    <div className="icon-bg">
                                        <img src={BonusIcon} />
                                    </div>
                                    <h6>Use More Bonus Cash</h6>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Container>
            </div>
            <Container>
                <div className="download-caros">
                    <h4 className="yellow-txt">how to download</h4>
                    <Container>
                    <div className="testimonial-caros new_class_p">
                        {/* <div className="t-quote"></div> */}
                        {/* <h4 className="yellow-txt">testimonials</h4> */}
                        <Carousel
                            swipeable={true}
                            draggable={false}
                            showDots={true}
                            responsive={downloadsliderd}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            customTransition="all 1.2s ease 0s"
                            transitionDuration={1000}
                            containerClass="carousel-container carousel-list"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            slidesToSlide="1"
                            arrows={true}
                        >

                            
                            <img className="silder_image2" src={BannerMos} />
                          
                            
                            <img className="silder_image2" src={BannerMos2} />
                            
                           
                            <img className="silder_image2" src={BannerMos3} />
                           
                           
                            <img className="silder_image2" src={BannerMos4} />
                            
                            
                            <img className="silder_image2" src={BannerMos5} />
                           
                            
                            <img className="silder_image2" src={BannerMos6} />
                            
                            
                        </Carousel>
                        {/* <div className="b-quote"></div> */}
                    </div>
                </Container>
                    {/* <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        customTransition="all 1.2s ease 0s"
                        transitionDuration={1000}
                        containerClass="carousel-container carousel-list"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        slidesToSlide="1"
                        arrows={true}
                    >

                        <div className="caros-card ">
                            <img src={Download1} />
                        </div>
                        <div className="caros-card ">
                            <img src={Download1} />
                        </div>
                        <div className="caros-card ">
                            <img src={Download1} />
                        </div>
                    </Carousel> */}
                </div>
            </Container>
            <div className="dark-purp-bg">
                <Container>
                    <div className="testimonial-caros">
                        <div className="t-quote"></div>
                        <h4 className="yellow-txt">testimonials</h4>
                        <Carousel
                            swipeable={true}
                            draggable={false}
                            showDots={true}
                            responsive={Testimonialresponsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            customTransition="all 1.2s ease 0s"
                            transitionDuration={1000}
                            containerClass="carousel-container carousel-list"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            slidesToSlide="1"
                            arrows={false}
                        >

                            <div className="caros-card ">
                                <p className="fade-txt">
                                The questions and games types were easy and made me feel comfortable. Quick Visibility of rewards got the competitive juices flowing!
                                </p>
                                <h6 className="client-txt"><span>Vishal Mukherjee,</span> Mumbai</h6>
                            </div>
                            <div className="caros-card ">
                                <p className="fade-txt">
                                I downloaded Money Mela after seeing an ad for it. The questions were very fun and easy to answer. I’ve been playing since May 2022 and have already withdrawn money many times!
                                </p>
                                <h6 className="client-txt"><span>Aditya Gupta,</span> Hyderabad</h6>
                            </div>
                            <div className="caros-card ">
                                <p className="fade-txt">
                                My friend made me download the Money Mela App. I loved the different quizzes which were more fun than the regular quiz apps. Last 1 Standing is my favourite game and I would ask others to try it also!
                                </p>
                                <h6 className="client-txt"><span>Dinesh Mishra,</span> Mumbai</h6>
                            </div>
                        </Carousel>
                        <div className="b-quote"></div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="faq-wrap">
                    <h4 className="yellow-txt">faq</h4>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>1. Is Money Mela Safe?</Accordion.Header>
                            <Accordion.Body>
                                <p className="fade-txt">Yes Money Mela is 100% safe and legal. All transactions are
                                    facilitated via our Payment Partner RazorPay’s Platform.
                                    We also provide 24/7 Customer Service so feel free to
                                    contact us at <a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a> and we will solve your
                                    problems promptly.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>2. What are Game Shows?</Accordion.Header>
                            <Accordion.Body>
                                <p className="fade-txt">Our Game Shows are Trivia based Skill Game Tournaments that
                                    last between 3 to 5 minutes and  Each has its own format (See Mela Shows above).
                                    You have to Answer a Set of Simple Questions and Use Your Skill to
                                    Earn CASH & PRIZES.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>3. Do I need prior knowledge to participate?</Accordion.Header>
                            <Accordion.Body>
                                <p className="fade-txt">No. Most of Our Questions are EASY that ANYONE can Answer.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>4. I have a referral code, Where can I use it?</Accordion.Header>
                            <Accordion.Body>
                                <p className="fade-txt">Click the Download Link & follow the Install Process. During the Sign Up process,
                                    You will have to Enter the Referral Code on the “Tell Us About Yourself” page.
                                    You and Your Friend will Earn a REAL CASH Reward After your Sign Up is Completed.</p>

                                <p className="fade-txt">If you are having issues with the process please
                                    contact us at <a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a> and we will solve your problems promptly.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>5. What is REAL CASH?</Accordion.Header>
                            <Accordion.Body>
                                <p className="fade-txt">REAL CASH is Deposit Cash, which means it is 100% Usable for ANY Tournament.
                                    Which means you can PLAY & WIN & WITHDRAW on MONEY MELA with 0 Deposit.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>6. What is a Lifeline?</Accordion.Header>
                            <Accordion.Body>
                                <p className="fade-txt">The 50% Lifeline allows You to Half the Answer Options. It can be purchased
                                    in the Money Mela App from the Shop, can be used in ALL Mela Shows & it
                                    Increases your Chances of Winning!!</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
            <div className="footer-bg">
                <Container>
                    <div className="bottom-sec">
                        <img src={MoneyLogo} className="bot-logo" />
                        <div className="d-flex social-icon">
                            <div><a href="https://www.facebook.com/moneymela"><img  src={FbIcon} /></a></div>
                            <div><a href="https://www.instagram.com/moneymela.india/"><img src={InIcon} /></a></div>
                            <div><a href="mailto:admin@moneymelagames.com"><img src={MailIcon} /></a></div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div onClick={() => navigate('/termsandconditions')} className="c-pointer"><p className="fade-txt">&nbsp;Terms & Conditions |</p></div>
                            <div onClick={() => navigate('/privacypolicy')} className="c-pointer"><p className="fade-txt">&nbsp;Privacy Policy |</p></div>
                            <div onClick={() => navigate('/aboutus')} className="c-pointer"><p className="fade-txt">&nbsp;About Us</p></div>
                        </div>
                    </div>
                </Container>
            </div>

            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Container>
                    <div className="testimonial-caros">
                        <div className="t-quote"></div>
                        {/* <h4 className="yellow-txt">testimonials</h4> */}
                        <Carousel
                            swipeable={true}
                            draggable={false}
                            showDots={true}
                            responsive={downloadslider}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            customTransition="all 1.2s ease 0s"
                            transitionDuration={1000}
                            containerClass="carousel-container carousel-list"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            slidesToSlide="1"
                            arrows={true}
                        >

                            
                            <img className="silder_image" src={BannerMos} />
                          
                            
                            <img className="silder_image" src={BannerMos2} />
                            
                           
                            <img className="silder_image" src={BannerMos3} />
                           
                           
                            <img className="silder_image" src={BannerMos4} />
                            
                            
                            <img className="silder_image" src={BannerMos5} />
                           
                            
                            <img className="silder_image" src={BannerMos6} />
                            
                            
                        </Carousel>
                        <div className="b-quote"></div>
                    </div>
                </Container>
                    </Box>
                </Modal>
            </div>

        </div>
    );
}

export default Landing;