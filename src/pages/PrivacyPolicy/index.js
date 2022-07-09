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

const PrivacyPolicy = () => {
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
                    <h4 className="yellow-txt">PRIVACY POLICY</h4>
                    <p className="fade-txt">At Money Mela, we know your privacy is very important to you, so please take the time to carefully read our privacy policy. Our policy is designed to help you understand the types of information that we collect,
                        how we use and share the information and how the information is protected.</p>
                    <p className="fade-txt">This privacy policy applies to all services of Money Mela that directly reference or link to this policy, but does not apply to services of Money Mela that have separate privacy policies that do not incorporate this policy.</p>
                    <p className="title-txt">1. INFORMATION WE COLLECT</p>
                    <p className="fade-txt">1.1. Information that you give us</p>
                    <p className="fade-txt">When you register for and use our services we collect the information that you give to us.
                        This may include information like:</p>
                    <ul>
                        <li className="fade-txt">Your name, email address, phone number, date of birth, country of residence, language, gender, and time zone;</li>
                        <li className="fade-txt">Security questions and answers;</li>
                        <li className="fade-txt">Information you provide in response to surveys about our Services;</li>
                        <li className="fade-txt">Information you provide when seeking help from us, such as your name, telephone number,
                            and records (including call recordings) of the issues you experience;</li>
                        <li className="fade-txt">Billing information, such as your name, payment card number, payment account details, and shipping address;</li>
                        <li className="fade-txt">Information that you provide by entering it into certain Service features. For example, when you want to post in a forum, you provide us with the content for the post. Likewise, when you use other features such as voice or text messaging, blogs, surveys, user-generated content, activity streams,
                            or social media, we may first collect the information you enter into the feature.</li>
                    </ul>
                    <p className="fade-txt">Please make sure that any personal details which you provide are accurate and current. We will send any important information relating to your Account to you using the contact information you provide (including Account security and privacy notices). You can check and update some of the information you have provided to us any time choosing the “Edit Profile”
                        option or email us at&nbsp;
                        <a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a>
                                    &nbsp;with your requisite changes.</p>
                    <p className="fade-txt">1.2. Information about your device</p>
                    <p className="fade-txt">When you use our services we may collect specific information about your device,
                        and across your devices, such as: </p>
                    <ul>
                        <li className="fade-txt">The product model, serial number, operating system, device settings, device performance, device and advertising identifiers, Internet service provider,
                            IP address and other unique personal or online identifiers;</li>
                        <li className="fade-txt">If you or your device experiences an error, we collect information about the error, the time the error occurred, the application or features being used, the state of the application when the error occurred,
                            and any communications or content provided at the time the error occurred;</li>
                        <li className="fade-txt">Account authentication tokens that avoid you having to log in repeatedly;</li>
                        <li className="fade-txt">Content and ads downloaded to your device for the online services that you access;</li>
                        <li className="fade-txt">With your consent, we may collect and process information about your precise location. When we have your location information, we use it to tailor our services for you and others,
                            like helping you establish friend relationships with other Money Mela users;</li>
                        <li className="fade-txt">Trophies, scores and rankings achieved online and offline;</li>
                        <li className="fade-txt">Information about the device you are using, any connected
                            peripherals and how you have configured them;</li>
                        <li className="fade-txt">Information about how you use the software installed on your device (which may include information about the use of the software offline), such as date and time of use, what games or music you play, what content you browse, share or download, what services you access and for how long,
                            including how often you use chat and other communication applications;</li>
                        <li className="fade-txt">The actions you take within games or apps published by Money Mela;</li>
                    </ul>
                    <p className="fade-txt">1.3. Information about your use of our services</p>
                    <p className="fade-txt">We collect information about your use of and interaction with our services. This could include:</p>
                    <ul>
                        <li className="fade-txt">Information about your gameplay, your online status, your service use history,
                            your connections and interactions with other users;</li>
                        <li className="fade-txt">The content you share, the date and time of your visit, information about the links you click,
                            pages you view, and advertising you interact with within our services;</li>
                        <li className="fade-txt">Inferences used to create a profile about preferences and characteristics, standard server log information,
                            and other information about how you use our services.</li>
                    </ul>
                    <p className="fade-txt">1.4. Your content</p>
                    <p className="fade-txt">Our services may allow you: </p>
                    <ul>
                        <li className="fade-txt">To create, upload or share content such as text, images, audio, video, your nickname and user icon,
                            or other content that you create or is licensed to you; </li>
                        <li className="fade-txt">When you use any of our services that include these or other similar capabilities we may collect your content
                            in accordance with our user agreements or terms of use and this policy.</li>
                    </ul>
                    <p className="fade-txt">1.5. Your purchases</p>
                    <p className="fade-txt">Some of our services allow you to make purchases. If you use any of our services to make a purchase, we may collect information about the purchase. This could include payment information, such as your credit card number, account authentication
                        information, and contact information like your billing and shipping address.</p>
                    <p className="fade-txt">1.6. Information from third party sources</p>
                    <p className="fade-txt">We may receive information, including the following, from third party sources and combine it with information we already directly collect from you.
                        We will handle the information in accordance with this Privacy Policy:</p>
                    <ul>
                        <li className="fade-txt">Game, social media, or other information,
                            from those third parties or services you link your Account with;</li>
                        <li className="fade-txt">Information from other users, for example if those users have given us access to their profiles and if you are one of their connections, or information about you is otherwise made accessible to us by them;</li>
                        <li className="fade-txt">Information from third-parties as appropriate given our relationship, for example from anti-fraud service providers we might obtain fraud risk scores; from law enforcement or partners, we might obtain IP addresses
                            and details of suspected unlawful or malicious activity;</li>
                        <li className="fade-txt">Card account update information provided by your bank to help keep your payment cards up to date on your Account. Following any update, we will continue to charge the applicable payment methods to any purchases you make unless you notify us otherwise.</li>
                    </ul>
                    <p className="title-txt">2. HOW WE COLLECT YOUR INFORMATION</p>
                    <p className="fade-txt">We and third parties use technologies described below to collect information to deliver our Services.</p>
                    <p className="fade-txt">2.1. Cookies and Similar Technologies</p>
                    <p className="fade-txt">Cookies are small text files stored on your Internet browser. We and our third-party partners use cookies and similar tracking technologies to help us understand things like what web pages, features, or ads you view and what games you play. This information helps us keep track of your shopping cart, measure the effectiveness of our advertising, make sure you don't see the same ad repeatedly, and otherwise enhance your experience. You can disable cookies, limit the types of cookies you allow, or set your browser to alert you when cookies are being sent. Please refer to guidance provided by your individual web browser if you'd like help in managing your cookie preferences.
                        We also offer cookie consent tools in certain regions to help you manage your cookies.</p>
                    <p className="fade-txt">We may use tracking pixels or clear GIFs to collect information about your use of our Services and your response to our marketing emails. We use Internet log files (which contain technical data such as your IP address) to monitor traffic on our Services, troubleshoot technical problems, detect and prevent fraud, and enforce our User Agreement. We currently do not respond to Do Not Track (DNT) signals. You may opt out of certain types of tracking on the web, including certain analytics and tailored advertising by changing the cookie
                        settings in your browser or via our consent tools, as applicable.</p>
                    <p className="fade-txt">We also use Analytics, Advertising, Anti-Cheat, and Anti-Fraud technologies in our Services. These technologies may utilize the same cookies or similar mechanisms as further described below.</p>
                    <p className="fade-txt">2.2. Analytics Technologies</p>
                    <p className="fade-txt">We use internal and third-party analytics technologies to collect information about how you use our Services, your computer or device and the health of our Services.</p>
                    <p className="fade-txt">For instance, we may collect and store data from your computer or device when you use our Services. This information includes technical and related information about your computer or device and operating and/or network systems (such as IP Address and device ID), information about your engagement with certain features, gameplay and usage statistics, system interactions and peripheral hardware. If you play a game offline without connecting to the Internet, this data will be stored on your device and transmitted to us when your device connects to the Internet. If you participate in online Services, we may also collect, use, store, transmit and publicly display your personal and/or statistical data regarding your game play (including scores, rankings and achievements),
                        or identify content that is created and shared by you with other players.</p>
                    <p className="fade-txt">Third-party analytics technologies integrated into our Services may combine the information they collect in connection with your use of our services with information they have independently collected over time and/or across different platforms.</p>
                    <p className="fade-txt">2.3. Ad Serving Technologies</p>
                    <p className="fade-txt">Some of our Services employ ad serving technologies that use cookies, clear GIFs, web beacons, tracking pixels, Software Development Kit, Application Program Interfaces, and other similar technologies to deliver offers and advertising to you within our services as well as on third-party platforms and sites, and to measure the performance of our advertising campaigns. Some of these technologies can sync or connect behavior across different websites, mobile apps and devices to tailor offers and advertising to your interests. For instance, you may be presented with an offer for a game we think you might enjoy. Or, if you express interest in a game, you may receive an advertisement later for that game or similar Services on our or third-party sites. Other in-game advertising technologies enable offers to be temporarily uploaded to your
                        game, web browser, or mobile device and later replaced while you are online.</p>
                    <p className="fade-txt">These technologies collect and use information so we can serve appropriate offers and advertising to you, to measure effectiveness and distribution of these offers and advertising, and to understand how users interact with our Services.
                        In addition to identifiers and certain information, this information may include:</p>
                    <ul>
                        <li className="fade-txt">Advertisements served and the location of the ad;</li>
                        <li className="fade-txt">Length of time an advertisement was visible;</li>
                        <li className="fade-txt">Domain type, IP address, size of the advertisement;</li>
                        <li className="fade-txt">Your interaction, if any, with the ad; and</li>
                        <li className="fade-txt">Advertisement response.</li>
                    </ul>
                    <p className="fade-txt">Third-party advertising companies may combine the information collected in the context of delivering an offer to you via our Services with other information they have independently collected over time and/or across different websites. Many of these
                        companies collect and use information pursuant to their own privacy policies.</p>
                    <p className="fade-txt">2.4. Anti-Cheat and Fraud Prevention Technologies</p>
                    <p className="fade-txt">We strive to provide a safe and fair gaming environment for all players. When you use our Services, we or third parties may use cookies and similar technologies and collect data about your machine or device, to create a machine "fingerprint" or "hash" of your machine components, for fraud prevention, security and authentication purposes. We may also monitor publicly-available information, third-party sites, and/or use anti-cheat technology within our Services, including automated anti-fraud and abuse algorithms. If you believe your access to our games and/or Services was blocked by this technology in error, please contact us on the details provided in the
                        “Contact Information” category which is at point 10 below of this policy.</p>
                    <p className="title-txt">3. HOW WE USE YOUR INFORMATION</p>
                    <p className="fade-txt">We will only use your information for certain specified reasons and only where we have a lawful basis to do so. The lawful bases we rely on depends on the type of relationship we have with you and how we interact with you. Further details about the purposes on which we process your Personal Information under these lawful bases are set out in the sections for Information that We Collect or Receive, Information Use,
                        Information Sharing and Transfers. They include the following:</p>
                    <ul>
                        <li className="fade-txt">Contract – to provide our products and services to you and fulfil our contractual relationship with you;</li>
                        <li className="fade-txt">Legitimate Interests – to fulfil our legitimate interests, or those of a third party in conducting and managing our business and our relationship with you as described in this Privacy Policy;</li>
                        <li className="fade-txt">Legal obligation – to meet our legal obligations under any applicable law;</li>
                        <li className="fade-txt">Consent – where you have provided us consent to process your Personal Information for a specific purpose.</li>
                    </ul>
                    <p className="title-txt">4.	HOW YOUR INFORMATION IS SHARED</p>
                    <p className="fade-txt">4.1. Authorized Third-Party Service Providers</p>
                    <p className="fade-txt">We may share some or all of the categories of your personal information, as identified above, with third-party service providers that provide services to us for a variety of business purposes, such as payment processing, customer service, email deployment, advertising and marketing (including counting ad impressions, verifying positioning and quality of ad impressions, ensuring compliance with industry standards and specifications, ad delivery, reporting, personalization, audience segmentation, and analytics), security and performance monitoring, maintaining or servicing accounts, processing or fulfilling orders and transactions,
                        information hosting, auditing, and information processing.</p>
                    <p className="fade-txt">4.2. Corporate Affiliates</p>
                    <p className="fade-txt">We sometimes share your information within our family of Money Mela companies.</p>
                    <p className="fade-txt">4.3. Legal Purposes</p>
                    <p className="fade-txt">We may share your information to comply with legal process, respond to claims or inquiries, enforce our terms, or protect and defend the rights,
                        property or personal safety of our operations, our users, or the public.</p>
                    <p className="fade-txt">4.4. Business Transfers</p>
                    <p className="fade-txt">We may share your information as part of a substantial corporate transaction, such as a sale or transfer of company assets,
                        a merger, consolidation, or as otherwise legally permitted.</p>
                    <p className="fade-txt">4.5. Other users and the public</p>
                    <p className="fade-txt">Some of our services allow you to share information and content with others or engage in public activities. When you decide to use these services, the information or content that you share, your nickname, your user icon, your online status, your country of residence, and your gameplay information may be visible to Money Mela and its trusted business partners, other Money Mela users, and in some cases the public. Please keep in mind, when you use these services, that the information and content that you choose to share can be read, collected, or used by others. You are fully responsible for
                        the information and content that you choose to share in these instances.</p>
                    <p className="fade-txt">4.6. When you access third-party services</p>
                    <p className="fade-txt">If you access third-party services such as third-party online gaming services and social media services through our services, these third-party services may be able to collect information about you, including information about your activity on our services, and they may notify your connections on the third-party services about your use of our services,
                        in accordance with their own privacy policies.</p>
                    <p className="fade-txt">4.7. Government Authorities</p>
                    <p className="fade-txt">We may share your information with police and other government authorities if we believe that it is reasonably necessary to comply with a law, regulation, or legal process, to detect, protect and enforce the safety of any person, their property or their rights, to address fraud and security and report criminal activity. The majority of the cases in which we have shared information with police and government authorities concern their investigations into stolen devices, unauthorized use of payment methods, or moderation purposes and safety of Money Mela and its users. In a small number of cases, we have also
                        provided information in response to anti-fraud or more serious criminal investigations.</p>
                    <p className="fade-txt">4.8. With your consent</p>
                    <p className="fade-txt">We may share information for any other purposes disclosed to you at the time we collect the information or pursuant to your consent.</p>
                    <p className="title-txt">5.	YOUR CHOICES AND RIGHTS</p>
                    <p className="fade-txt">We respect the rights you may have under any applicable law to request access to your personal data and where applicable, to request or to receive that information in a commonly used electronic format (or ask for this information
                        to be provided in that format to a third party where feasible).</p>
                    <p className="fade-txt">You may also have the right under any applicable law to request the correction or erasure of your personal information, to seek to object to the further processing under certain circumstances of your information or to request that the processing of specific information about you is restricted while we
                        verify or investigate your concerns about this information.</p>
                    <p className="title-txt">6.	INFORMATION RETENTION AND INFORMATION SECURITY</p>
                    <p className="fade-txt">Personal information will be retained only for so long as reasonably necessary for the purposes set out in this privacy policy, in accordance with applicable laws. We have implemented administrative, physical and technical security measures that are designed to protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration and destruction. You should understand though that, despite our efforts, no security can be guaranteed as impenetrable. Thus we cannot guarantee the security of your information at all times.
                        You should always be diligent when it comes to the protection of your personal information.</p>
                    <p className="fade-txt">Please note that information collected by third parties may not have the same security protections as information you submit to us, and we are not responsible for protecting the security of such information.</p>
                    <p className="title-txt">7. WEBSITES, MARKETING & ADVERTISING</p>
                    <p className="fade-txt">Each time you visit our websites or receive and interact with our marketing communications and advertising on our and third-party websites and services, we may automatically log your activity on web, emails, or advertising and marketing servers we control through cookies (small information files placed on a hard drive), web beacons, tracking pixels, browser configuration details (e.g. browser type, list of installed plugins and list of installed fonts), and embedded scripts (programming code that is
                        temporarily downloaded onto a device) and, website personalization settings.</p>
                    <p className="title-txt">8. DISCLAIMER</p>
                    <p className="fade-txt">We cannot ensure that all of your private communications and other personal information (including sensitive information like credit card information and bank account number)
                        will never be disclosed in ways not otherwise described in this Privacy Policy.</p>
                    <p className="fade-txt">Therefore, although we are committed to protecting your privacy, we do not promise, and you should not expect,
                        that your personal information will always remain private.</p>
                    <p className="fade-txt">As a user of the Site, you understand and agree that you assume all responsibility and risk for your use of the Site, the internet generally,
                        and the documents you post or access and for your conduct on and off the Site.</p>
                    <p className="title-txt">9.	CHANGES TO THIS POLICY</p>
                    <p className="fade-txt">We may update this privacy policy from time to time. When we update it, we will revise the "Last Updated" date above. If we make material changes in the way we collect, use, retain or share your personal information, we will notify you by sending you an email at the last email address that you provided us,
                        or by posting notice of the changes on the services covered by this privacy policy.</p>
                    <p className="title-txt">10. CONTACT INFORMATION</p>
                    <p className="fade-txt">If you have any questions or comments about this policy or our practices you can contact us:</p>
                    <p className="fade-txt">By email at: <a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a>
                                    </p>
                    <p className="fade-txt">By telephone on: +91–22-61447551</p>
                    <p className="fade-txt">By post at: 5, 2nd Floor, Plot-8, Kala Bhavan, Padmakar L Khandke Marg, Mathew Road, Opera House, Girgaon, Mumbai - 400004</p>
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

export default PrivacyPolicy;