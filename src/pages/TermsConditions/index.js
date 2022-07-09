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

const TermsConditions = () => {
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
                    <h4 className="yellow-txt">TERMS & CONDITIONS</h4>
                    <p className="fade-txt">These terms and conditions of use (“Terms of Use”) along with other policies available on our
                        platform forms a legally binding agreement between You and White Cheetah Entertainment &amp;
                        Technology Private Limited (“Money Mela”, “Our”, “We”, “Us”).</p>
                    <h5 className="title-txt">PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE PLAYING ANY MOBILE GAMES OR/AND USING THE Money Mela PLATFORM.</h5>
                    <p className="fade-txt">If You do not agree with any part of these Terms of Use or/and Privacy Policy, kindly refrain
                        from playing any Mobile Games or otherwise using Our services on the Platform.</p>
                    <p className="fade-txt">We have tried Our best to keep these Terms of Use as simple and short as possible. Nevertheless,
                        We realise that despite all Our efforts, this is a rather long document. For Your convenience, We
                        have summarised some of the key clauses and linked them to the relevant section. Bear in mind
                        that the summary highlights just the key aspect of the relevant section and not the entire section
                        itself. So please refer to the section itself to get the full picture.</p>
                    <ul>
                        <li className="fade-txt">You may only use Our web portal www.moneymela.co.in, partner websites,
                            mobile applications and other portals (collectively, the “Platform”) if You agree to abide by
                            the terms and conditions as laid down in this Agreement. To better understand the scope of
                            these Terms of Use, how they may be updated and the meaning of the various words used in
                            these Terms of Use please refer to the Introduction section of these Terms of Use.</li>
                        <li className="fade-txt">Only people of sound mind who are above 18 years of age may use this Platform.</li>
                        <li className="fade-txt">This Platform may not be used by residents of Assam, Nagaland, Orissa,
                            Sikkim, Meghalaya, Andhra Pradesh, Telangana. Further, there may be certain games that may be
                            restricted in some additional states. To understand more about who may use this platform
                            please refer to Our Eligibility section</li>
                        <li className="fade-txt">You may register on the Platform and add cash to Your account by
                            following the registration procedure laid down in the section on Nature and use of the
                            Platform.</li>
                        <li className="fade-txt">Please note that Your User Details will be accessible to other users on the Platform.</li>
                        <li className="fade-txt">The rules governing Your participation in the Contests available on Our
                            Platform are available at Our section on Participation. Further, each Mobile Game may be
                            subject to its own Game Rules and Code of Conduct. To understand Mobile Games better please
                            refer to Our section on Mobile Games.</li>
                        <li className="fade-txt">Please note that We have the sole discretion to determine the terms
                            applicable on any Contest including the Awards to be given in any Contest. Further, the Entry
                            Fee for any contest is non-refundable and may only be refunded under the circumstances
                            stated in Our Return, Refund and Cancellation policy.</li>
                        <li className="fade-txt">Winnings may be withdrawn by You from Your account, subject to the completion of
                            KYC verification and will be subject to TDS deductions.</li>
                        <li className="fade-txt">Only skill-based games are available on Our Platform. To understand more about the
                            nature of games offered on Our Platform please refer to the Games of skill section.</li>
                        <li className="fade-txt">We further request that You follow the precautions laid down in Our
                            Safety section while playing Mobile Games on Our Platform.</li>
                        <li className="fade-txt">While using the various communication channels provided on Our Platform You must
                            abide by rules stated in Our Community rules and code of conduct section.</li>
                        <li className="fade-txt">You may not use the Platform in ways stated in Our Restrictions section.
                            You will indemnify Us in the event We suffer any losses on account of Your use of Our Platform
                            or Your failure to abide by this Agreement.</li>
                        <li className="fade-txt">Circumstances under which Your access to the Platform or this
                            Agreement may be terminated are stated in the Termination section.</li>
                        <li className="fade-txt">Your use of this Platform is completely at Your own risk. We disclaim all warranties in relation to the Platform.
                            To understand more please refer to Our Disclaimer section.</li>
                        <li className="fade-txt">Any dispute between You and Us will be resolved by way of Arbitration which will be conducted in Mumbai by a sole arbitrator appointed by Us.
                            For further details refer to Our Governing law and dispute resolution section.</li>
                        <li className="fade-txt">For information about Our Referral program, please check the Money Mela App on IOS or Android</li>
                        <li className="fade-txt">If You have any complaints or grievances over any of the Services offered on the Platform, please contact us in the Contact Us section</li>
                        <li className="fade-txt">To know about our Anti-Money Laundering Policy, please click here</li>
                    </ul>
                    <h4 className="title-txt">Introduction</h4>
                    <p className="fade-txt">1.1. White Cheetah Entertainment & Technology Private Limited is an Indian company incorporated
                        under the Companies Act, 2013. Money Mela operates a mobile gaming portal in India, which
                        offers various skill and learning based digital games developed by Third-Party Game Developers
                        and other promotional and interactive features (collectively “Services”) through its web portal
                        www.moneymela.co.in, partner websites, mobile applications and other portals (collectively, the “Platform”).</p>
                    <p className="fade-txt">1.2. Capitalized terms used herein but not defined shall have the meanings ascribed to them under
                        section 1.9 (Definitions and Interpretation) of this Agreement.</p>
                    <p className="fade-txt">1.3. This Agreement shall apply to all Persons who visit the Platform, or create a player Account
                        including any contributors of content over the Platform, and/or any third party interacting with us, directly or indirectly in official capacity or having/intending to have business or commercial relationships with Money Mela, whatsoever (the “Users”, “You” or “Your”) as applicable.</p>
                    <p className="fade-txt">1.4. By registering on, browsing, downloading, using or accessing any part of the Platform or utilizing the Services, the Users agree to be bound by this Agreement.</p>
                    <p className="fade-txt">1.5. If at any time the User does not accept or agree to any terms of this Agreement, on a continuing basis in relation to any of the Services offered on the Platform, they should not access the Platform.</p>
                    <p className="fade-txt">1.6. We reserve the right to periodically review, update, change or replace any part of these Terms of Use or other terms of the Agreement as we may consider appropriate measures at our sole and absolute discretion</p>
                    <p className="fade-txt">1.7. Any changes to these Terms of Use will be posted on this page wherever appropriate. The Users must visit this page periodically for updates on the Terms of Use applicable to their use of the Platform.</p>
                    <p className="fade-txt">1.8. Any Users’ continued usage of the Platform after any such update, change, replacement or modification in the Agreement constitutes their valid consent to such changes.</p>
                    <p className="fade-txt">1.9. Definitions</p>
                    <p className="fade-txt">1.9.1. “Agreement” shall mean these Terms of Use, the Privacy Policy and any other rules or policies
                        available on the Platform including all other additional or modified terms and conditions and policies in relation to the
                        Platform or any current or future services that may be offered by Money Mela. This Agreement is published in accordance with the
                        provisions of Rule 3(1) of the Information Technology (Intermediary Guidelines) Rules, 2011. This Agreement is an electronic record generated by a computer system and does not require any physical or digital signatures.</p>
                    <p className="fade-txt">1.9.2. “Applicable Law” means all laws, statutes, common law, regulations, ordinances, codes, rules, guidelines, orders, permits, tariffs and approvals, including those relating to health and safety,
                        of any governmental authority or self-regulatory guideline that may apply to the Users or is related to the subject matter of this Agreement as applicable in the territory of India.</p>
                    <p className="fade-txt">1.9.3. “Contest” is a skill based competition offered by Money Mela on the Platform in which Users compete either in a tournament or 1v1 battle by playing the Mobile Games on the Platform. Contests can be either ‘paid’ or ‘free to play’.
                        Paid Contests require the Users to pay an Entry Fee for participation, whereas free to play Contests are open to all Users without any Entry-Fee.</p>
                    <p className="fade-txt">1.9.4. “Balance” is the credit (either in the form of cash or Money Mela Tokens) available in an Account and includes amount added by a User through Deposits or/and earned through Winnings by participating in Contests on the Platform.</p>
                    <p className="fade-txt">1.9.5. “Deposit” is the amount added by the User to his/her Account through his/her preferred payment mode (e-wallet, debit/credit cards, UPI/BHIM, net banking). The Deposit conversion ratio is INR. 1/- (Rupees One Only) = INR 1 (one).</p>
                    <p className="fade-txt">1.9.6. “Entry-Fee” refers to the fee which Users pay either in the form of cash Balance or Money Mela Tokens available in their Account to participate in a Contest on the Platform.</p>
                    <p className="fade-txt">1.9.7. “Mobile Games” refers to the digital games of skill available on the Platform developed by Money Mela or Third-Party Game Developers.</p>
                    <p className="fade-txt">1.9.8. “Person” shall mean any natural person, limited or unlimited liability company, corporation, partnership (whether limited or unlimited), proprietorship, Hindu undivided family, trust, union, association, government or any agency or
                        political subdivision thereof or any other entity that may be treated as a person under the Applicable Law.</p>
                    <p className="fade-txt">1.9.9. “Prize Money Pool” is the actual or projected amount that is to be distributed amongst the winner(s) of the Contest and is declared at the start of the Contest.</p>
                    <p className="fade-txt">1.9.10. “Sponsored Content” means content distinct from other regular editorial content provided by Money Mela, and displayed on the Platform in the form of audio, video, text and/or image
                        media which supports a third party’s brand message, promotional offers, discounts and/or views that are readily identifiable to belong to a third-party upfront through distinct and distinguishable font,
                        colour, display schemes and/or usage of disclaiming words (such as “Ad”, “Powered by”, “Sponsored by”, “With”, “Advertorial” and such other phrase of similar meaning).</p>
                    <p className="fade-txt">1.9.11. “Sponsored Content Partner” means a User engaged with Us for the display of Sponsored Content on the Platform.</p>
                    <p className="fade-txt">1.9.12. “Third Party Game Developer” refers to any Person (natural or juristic) whose Mobile Game is available on the Platform.</p>
                    <p className="fade-txt">1.9.13. “Money Mela Token” is an award in the form of Bonus Money, Game Tickets and Lifelines that may be given to any User at Money Mela’s sole discretion for participating on the Platform.</p>
                    <p className="fade-txt">1.9.14. “Winnings” are awards (either in the form of cash, Money Mela Tokens or promotional gifts) given to a User for winning or/and performing well in a particular Contest on the Platform.</p>
                    <p className="fade-txt">1.10. Interpretation</p>
                    <p className="fade-txt">1.10.1. Any reference to the singular includes a reference to the plural and vice versa, and any reference to one gender includes a reference to other gender(s), unless explicitly provided for.</p>
                    <p className="fade-txt">1.10.2. Headings and captions are used for convenience only and not for interpretation of the Agreement.</p>
                    <p className="fade-txt">1.10.3. Any reference to a natural Person shall, include his/her heirs, executors and permitted assignees and any reference to a juristic Person shall, include its affiliates, successors and permitted assignees, unless repugnant to the context.</p>
                    <p className="title-txt">Eligibility</p>
                    <p className="fade-txt">2.1. Any browsing, registering, downloading, using or accessing by any Person of any part of the Platform or utilization of any of the services offered by Money Mela will be deemed to constitute a legal contract between the User and Money Mela.</p>
                    <p className="fade-txt">2.2. A User may use the Platform if (a) it is a natural Person, as per any Applicable Law, regulation or generally accepted practices or guidelines applicable in the country of which User is a citizen, in which User is a resident or from where User
                        uses the Platform; or (b) it is a juristic Person, as per any Applicable Law, regulation or generally accepted industry practices and guidelines applicable in the country where User is registered, where User maintains its principal office or from where User uses the Platform.</p>
                    <p className="fade-txt">2.3. Any User who falls under Section 11 of the Indian Contract Act, 1872 including minors, persons of unsound mind and un-discharged insolvents etc. are not eligible to enter into this Agreement with Money Mela.</p>
                    <p className="fade-txt">2.4. The Platform should not be used, installed, or played by any Person under the age of 18 years.</p>
                    <p className="fade-txt">2.5. No Person, whether a Money Mela employee or not, who is involved in the development of Mobile Games or/and algorithms on the Platform can participate in any Mobile Games on the Platform, where such participation could alter, modify or unduly influence his/her performance on the Mobile Game, without express written permission of Money Mela and subject to such terms and conditions as Money Mela may seek to impose on such Person.</p>
                    <p className="fade-txt">2.6. The Mobile Games and the services available on the Platform are open only to Persons currently residing in India. Persons residing in the state of Assam, Nagaland, Orissa, Sikkim, Meghalaya, Andhra Pradesh, Telanagana (“Restricted States”) (Note: Requires discussion) are prohibited from participating in any Mobile Games on the Platform. Further, there may be certain games that may be restricted in some additional states. Please check the Special Rules/Terms of each Game to know more.</p>
                    <p className="fade-txt">2.7. Only those Users who have successfully registered on the Platform in the manner prescribed in section 3 (Nature and Use of the Platform), and who utilize the services of the Platform in accordance with the Agreement including these Terms of Use, shall be eligible to use the Platform.</p>
                    <p className="fade-txt">2.8. Certain services being provided on the Platform may be subject to additional conditions or rules applicable to a particular Mobile Game or Contest in that respect (“Game Terms”). Such Game Terms are deemed to be incorporated herein by reference. Users must agree to these Game Terms before playing any such Mobile Game or Contest on the Platform. To the extent that these Terms of Use are inconsistent with Game Terms, the Game Terms shall prevail.</p>
                    <p className="fade-txt">2.9. Money Mela reserves the right to terminate any User’s Account and/or deny access to the Platform if it is brought to Money Mela’s notice that a particular User has violated the Agreement including any of these Terms of Use.</p>
                    <p className="title-txt">Nature and use of the Platform</p>
                    <p className="fade-txt">3.1. Money Mela provides the Platform to You on which You can play Mobile Games either offered by Money Mela or independent Third Party Game Developers. The Platform is designed to provide You an in-app browsing experience through an embedded browser. These Mobile Games run online over the Platform and do not have to be separately downloaded or installed outside the Mobile Application.</p>
                    <p className="fade-txt">3.2. Registration  You may register by approving and agreeing to this Agreement and providing Your registered mobile phone number and other details as per our Privacy Policy on the Platform. You will be verified by Money Mela using a one-time password (“OTP”) system. Upon successfully verifying the OTP, an account will be created for You (“Account”).</p>
                    <p className="fade-txt">3.3. By registering for an Account, You represent, warrant and agree that:</p>
                    <p className="fade-txt">a) You fulfill the eligibility criteria as detailed in section 2 (Eligibility);</p>
                    <p className="fade-txt">b) You are using Your actual identity and the mobile phone number you have provided is registered in Your own name;</p>
                    <p className="fade-txt">c) You shall provide only true, accurate, current, and complete information about Yourself, including optional information such as Your profile photograph, cover photograph, user-id, biograph, audio status etc., on the Platform (“User Details”); </p>
                    <p className="fade-txt">d) You shall maintain and promptly update the User Details and other information that You provide on the Platform to keep it true, accurate, current, and complete.</p>
                    <p className="fade-txt">3.4. The Users acknowledge that their User Details will be accessible to other User on the Platform and shall be available for Money Mela to create promotional and interactive content over the Platform.</p>
                    <p className="fade-txt">3.5. Your Account is for Your personal use only. You shall not impersonate someone else. By creating an Account after providing a mobile phone number and verifying it using an OTP, You represent, warrant, and agree that You are authorized to use the Platform and will abide by the Agreement.</p>
                    <p className="fade-txt">3.6. Privacy</p>
                    <p className="fade-txt">a) Our privacy policy available at www.moneymela.co.in (“Privacy Policy”). It explains how we treat Your personal data and protect Your privacy when You use the Platform and our Services. By using the Platform, You agree that We can use Your data and other information according to the Privacy Policy.</p>
                    <p className="fade-txt">b) You are responsible for maintaining the confidentiality of passwords associated with any device You use to access the Platform. Accordingly, You are solely responsible for all activities that occur with Your device. If You become aware of any unauthorized use of Your device, You are required to notify the relevant authorities as soon as possible.</p>
                    <p className="fade-txt">3.7. Deposits</p>
                    <p className="fade-txt">a) In order to participate in certain Contests, the Users may be required to pay an Entry Fee in the form of cash. Users may add cash to their Account by using any of the payment modes available on the Platform.</p>
                    <p className="fade-txt">b) The Deposits may be used to participate in Contests in the manner provided under section 4 (Participation in Contests). There may be certain Contests which allow for payment of the Entry Fee in the form of Money Mela Tokens or may allow for part payment of the Entry Fee in the form of Money Mela Tokens and the remainder of the Entry Fee from the Deposit/Winnings.</p>
                    <p className="fade-txt">3.8. Each User is solely responsible for all activities that occur under their Account, including the use of any of the Services on the Platform.</p>
                    <p className="fade-txt">3.9. Money Mela grants such Users a non-transferrable, limited, non-exclusive and revocable privilege to register an Account on and use the Platform.</p>
                    <p className="fade-txt">3.10. If Money Mela identifies that the same User Details are being used under multiple accounts, then Money Mela at its sole discretion will terminate/deactivate the Account without the Users’ consent and any Deposit in the Account will not be refunded.</p>
                    <p className="fade-txt">3.11. Money Mela, at its sole and absolute discretion and without any notice to the Users, reserves the right to restrict, suspend or terminate any Account or access to the Platform temporarily or permanently to any User.</p>
                    <p className="fade-txt">3.12. Money Mela may, at its sole and absolute discretion restrict, change, suspend, or terminate any User’s access to all or any part of the Platform, including but not limited to:</p>
                    <p className="fade-txt">a) reject, move, or remove any material that may be submitted by the User;</p>
                    <p className="fade-txt">b) move or remove any content that is available on the Platform;</p>
                    <p className="fade-txt">c) deactivate or delete an Account and all related information and files on their Account;</p>
                    <p className="fade-txt">d) establish general practises and limits concerning use of the Platform and the services; and</p>
                    <p className="fade-txt">e) assign its rights and liabilities with respect to all Accounts hereunder, to any entity.</p>
                    <p className="fade-txt">3.13. Notwithstanding anything to the contrary herein, the Users acknowledge and agree that they shall have no ownership or other interest in their Account, and further acknowledge and agree that all rights in and to their Account are and shall forever be owned by and insure to the benefit of Money Mela.</p>
                    <p className="fade-txt">3.14. The Users also accepts to receive news, updates, offers/campaign related SMS, to the mobile phone number provided by the User, except when prohibited under Applicable Laws.</p>
                    <p className="fade-txt">3.15. Platform Fee Information</p>
                    <p className="fade-txt">a) Money Mela charges a Platform Fee from the User(s), for offering its e-platform for hosting of various games of skill & other content and providing the service to the Users to participate in those game formats or consume the content as offered.</p>
                    <p className="fade-txt">b) The Platform Fee for all the products/games is a fixed rake % of the Entry Fee and is between 0% and 33% and under extreme exceptional cases may go beyond this range.</p>
                    <p className="fade-txt">c) Money Mela, in accordance with the Terms & Conditions of the Bonus Program, may give a Discount in the Platform Fee and thus the Designated Amount shall be accordingly recovered from the User’s Cash Balances.</p>
                    <p className="fade-txt">d) This can be easily deduced from the entry fee and the total prize offered. Some examples are as under :-</p>
                    <p className="fade-txt">Platform Fee Examples</p>
                    <p className="fade-txt">Tournaments, Mela Shows</p>
                    <p className="fade-txt">For each user who joins a cash tournament, Money Mela Platform Fee is calculated as (1- Total Cash prize offered/(open slots x entry fee)) * Entry Fee</p>
                    <p className="title-txt">For example, in a 5 player tournament with an entry fee of  र100, and the total cash prizes on offer is ₹450.</p>
                    <p className="fade-txt">The Money Mela Platform Fee collected out of each user who is registering with ₹ 100 will be equal to (1 – ₹450/(₹100 x 5)) * ₹100 = ₹10</p>
                    <p className="fade-txt">The same calculation applies to tournaments hosted by Users, Pooled tournaments or Non-Guaranteed tournaments.</p>
                    <p className="fade-txt">Pooled Tournaments =  Tournaments/ Mela Shows where the Total winnings on offer increases with the number of slots filled in the tournament. However, the Platform Fee on each registration remains constant for any number of slots filled.</p>
                    <p className="fade-txt">Non-Guaranteed Tournaments = Tournaments which get cancelled and all entry fees refunded if the minimum number of users required did not join the tournament</p>
                    <p className="fade-txt">Mela Games - Head-2-Head</p>
                    <p className="fade-txt">For each successfully completed 2 player cash battle, Money Mela Platform Fee is calculated as (1- Total Cash prize offered/(2 x entry fee)) * Entry Fee</p>
                    <p className="fade-txt">For example, in a 2 player battle with an entry fee of ₹ 100, where the winner(s) gets ₹ 180.</p>
                    <p className="fade-txt">The Money Mela Platform Fee collected out of each user who is registering with ₹ 100 will be equal to (1 – ₹180/(₹100 x 2)) * ₹100 = ₹10</p>
                    <p className="fade-txt">Mela Games - Multiplayer, Mela Shows</p>
                    <p className="fade-txt">In the case of multiplayer battles where multiple players could win cash prizes, Total cash prize offered varies with the number of players participated in the battle</p>
                    <p className="fade-txt">Money Mela Platform Fee is calculated as (1- Total Cash prize offered per the number of players who participated/(number of players who participated x entry fee)) * Entry Fee</p>
                    <p className="fade-txt">For example, let’s take the case of a 5 player battle with ₹ 100 entry fee. When 3 players participate, if the total prize offered to all the winners in the battle is ₹ 270.</p>
                    <p className="fade-txt">Then Money Mela Platform Fee collected out of each who is participating with ₹ 100 will be equal to (1 – ₹270/(₹100 x 3)) * ₹100 = ₹10</p>
                    <p className="title-txt">Score Tournament, Win Tournament</p>
                    <p className="fade-txt">Score tournaments and win tournaments are both a kind of tournament where users pay a single entry fee to register. Players then compete with each other for a fixed time duration.  By the end, players are ranked on a leaderboard based on the format of the tournament.</p>
                    <p className="fade-txt">Cash Prizes are distributed to the winners based on their rank.</p>
                    <p className="fade-txt">Money Mela Platform Fee for such registrations is between 0% and 33% and under extreme exceptional cases may go beyond this range..</p>
                    <p className="fade-txt">Money Mela Platform Fee is subject to change as per Money Mela policy without prior notice.</p>
                    <p className="title-txt">Participation in contest</p>
                    <p className="fade-txt">4.1. The Users may use the Platform to participate in a variety of Contests available on the Platform.</p>
                    <p className="fade-txt">4.2. In order to participate in a Contest, each User may be required to pay an Entry Fee to the Platform which is deducted from the Balance available in the Account of the User. The payment of Entry Fee Users make to participate in the Contest(s) is inclusive of the Platform fee for access to the Money Mela Services charged by Us and User’s contribution towards Prize Money Pool.</p>
                    <p className="fade-txt">4.3. Each Contest has a predetermined limit on the number of Users that can participate and a specified time before which entries must be made. A Contest is deemed to be a valid Contest on the Platform, only if the requisite number of Users register for the Contest before the prescribed entry time.</p>
                    <p className="fade-txt">4.4. Any amount received by Money Mela as Entry Fee for participation in a Contest shall be non-refundable, except in the event that a Contest has been cancelled.</p>
                    <p className="fade-txt">4.5. Contests shall be announced by the Money Mela from time to time in any manner that is convenient to the Company, and Money Mela reserves the right to extend the participation and time limit for registration, cancel any Contest, and modify any terms, all with notice to the Users of the Platform.</p>
                    <p className="fade-txt">4.6. Winnings</p>
                    <p className="fade-txt">a) Awards for all Contests shall be declared at the time of registration and/or prize distribution in the specific rules applicable to such Contest. Awards may be in the form of Money Mela Tokens, cash or promotional gifts.</p>
                    <p className="fade-txt">b) Users are eligible to withdraw only Winnings Cash from his/her Account to his/her respective bank/wallet account once it is KYC (Know Your Customer) verified.</p>
                    <p className="fade-txt">c) KYC verification is mandatory as a proof of identity for making withdrawals from Your Account to Your bank/wallet account. KYC verification may be done through the Platform by providing certain details which shall be inclusive of providing your Name, Date of Birth, State, PAN number and uploading of PAN Card.</p>
                    <p className="fade-txt">d) Money Mela does not issue receipts for entries in the Contests. The entries are accounted for within the Account on the Platform. It is the responsibility of Money Mela to ensure that the entries are accurate and the Winnings are duly credited to his Account.</p>
                    <p className="fade-txt">e) Any tax/levies/duty etc., as applicable on material prizes, shall be paid by the winner of the game. Based on TDS (tax deducted at source) Rules for any sort of game winning in India, 31.2% TDS should be deducted on any winning above Rs.10,000/- in a single game.</p>
                    <p className="fade-txt">4.7. Return, Refund and Cancellation</p>
                    <p className="fade-txt">a) In the event that there is an error in the Services provided by us, we may refund the Entry Fee, provided the reasons are genuine and proved after investigation by Money Mela.</p>
                    <p className="fade-txt">b) Please read the rules of each Mobile Game and Contest before participating.</p>
                    <p className="fade-txt">c) We do not cancel registrations once entered, however, in case of exceptional circumstances wherein the fault may lie with the payment gateway or from Our side, We will cancel your participation on request and refund the Entry Fee to You within a reasonable amount of time.</p>
                    <p className="fade-txt">d) In case we cancel your participation in any Mobile Game or Contest as a result of this, We  will return Your Entry Fee to You within a reasonable amount of time for You to redeem the same by playing other Contests on Money Mela.</p>
                    <p className="fade-txt">e) We will try Our best to create the best user experience for You. If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payments made through a payment gateway, payment refunds will be made to the same account.</p>
                    <p className="fade-txt">4.8. Users must use any money in their Account within 365 days. Money Mela shall have the right to directly forfeit any such unused amount after 365 (three hundred and sixty five) days.  The idle Balance amount lying in your account may be withdrawn only in exceptional circumstances, determined on a case to case basis on the sole discretion of Money Mela.</p>
                    <p className="fade-txt">4.9. Bonus Program- Terms & Conditions</p>
                    <p className="fade-txt">4.9.1. As part of its Business Promotion strategy, Money Mela may run a Bonus Cash Promotion which is a Cash Discount Program whereby the User is allowed to accumulate cash discount eligibility points (referred to as ‘Bonus Cash’) in a separate wallet referred to as ‘Bonus Wallet’.</p>
                    <p className="fade-txt">4.9.2. Such Bonus Cash is granted as per various business promotion strategies that may be run by Money Mela from time to time and the same is not subject to withdrawal.</p>
                    <p className="fade-txt">4.9.3. The Bonus Cash is subject to control by Money Mela and the Company is free to put such restrictions on its availability, utilisation, inherent discount benefits, time validity, etc. as it may decide from time to time.</p>
                    <p className="fade-txt">4.9.4. Money Mela may allow upfront Cash Discount from the Platform Fee in lieu of the accumulated Bonus Cash in accordance with the conversion ratio as the Company may be decided from time to time for each Contest.</p>
                    <p className="fade-txt">4.9.5. All Bonus Cash credited in the User account shall be valid for a period of 90 days from the date of credit. If the Bonus Cash is not utilized by the User over a period of 90 days or if the User is inactive on Money Mela for a period of 90 days, unutilised Bonus Cash shall be automatically expired by Money Mela.</p>
                    <p className="fade-txt">4.9.6. In the event of termination or blocking of a User’s account, any Bonus Cash granted to the user until such time shall expire immediately and the User shall not have any right or claim in respect of the Bonus Cash.</p>
                    <p className="title-txt">Mobile Games</p>
                    <p className="fade-txt">5.1. The Platform is operated and designed to provide You an in-app browsing experience through an embedded browser. The Platform is per se a platform which offers Services and hosts Mobile Games by Third Party Game Developers. The Platform does not host, display or transmit any content owned by third parties on its servers, unless We either have a licence or are not prohibited under the Applicable Laws, to do the same.</p>
                    <p className="fade-txt">5.1.2. The Mobile Games will have their own rules and code of conduct (“Game Rules”) which shall be adhered to by all Users at all times.</p>
                    <p className="fade-txt">5.1.3. When You play a Mobile Game, You agree and acknowledge that the Platform does not create and/or broadcast any content on its own accord and Money Mela is not responsible or liable for the content or accuracy of the Mobile Game, including copyrights, that may be accessed by You through the Platform.</p>
                    <p className="title-txt">Games of skill</p>
                    <p className="fade-txt">6.1. The User/Participant use of the Money Mela site and software is also subject to laws of the state in which the user resides and from which he/she accesses the Money Mela site, as well as the laws enacted by the Union of India. Residents physically located outside India and in the states of Assam, Telangana, Nagaland and Orissa (“the Excluded States”) are ineligible to open a User Account on Money Mela.</p>
                    <p className="fade-txt">6.2. Users seeking to participate in games of skill, offered by Money Mela from the Excluded States would be ineligible for prizes offered by Money Mela, at its sole discretion or the judicial/government authority through an order/decree/judgement/direction may add additional states in the Excluded States. In such a case, the Users/participants from these states shall be ineligible to participate in the online games/tournaments where participation fee is charged and prizes are offered.</p>
                    <p className="fade-txt">6.3. Any credit/winning amount of such a User/participant, available in the User Account with Money Mela shall not be usable, till the time judiciary/government authority expressly allows the Money Mela site to offer its online game(s) in the Excluded States.</p>
                    <p className="fade-txt">6.4. The User/Participant agrees that Money Mela shall not be held liable if laws applicable to the User/Participant restricts or prohibits his/her participation.</p>
                    <p className="fade-txt">6.5. Money Mela makes no representations or warranties, implicit or explicit, as to the User’s legal right to participate nor shall any person affiliated, or claiming affiliation with the User/Participant have authority to make any such representations or warranties.</p>
                    <p className="fade-txt">6.6. Money Mela is a skill-based Gaming Platform i.e. skill game which is clearly defined in the recently passed by an Act of Government of Nagaland under The Nagaland Prohibition of Gambling and Promotion and Regulation of Online Games of Skill Act, 2015 (Act No. 3 of 2016) and The Nagaland Prohibition of Gambling and Promotion and Regulation of Online Games of Skill Rules, 2016 in which Skill Game and allow to run/operate of this type of skill games.</p>
                    <p className="fade-txt">As per Section 2(3) of The Nagaland Prohibition of Gambling and Promotion and Regulation of Online Games of Skill Act, the definition of “Games of Skill” is reproduced as under,</p>
                    <p className="fade-txt">“Games of Skill” shall include all such games where there is preponderance of skill over chance, including where the skill relates to strategizing the manner of placing wagers or placing bets or where the skill lies in team selection or selection of virtual stocks based on analyses or where skill relates to the manner in which the moves are made, whether through deployment of physical or mental skill or acumen”.</p>
                    <p className="fade-txt">Explanation: For the purpose of this Act-</p>
                    <p className="fade-txt">All Games provided in Schedule A of this Act shall fall under the category of “Games of Skill”,</p>
                    <p className="fade-txt">‘Games’ which have been declared or determined to be ‘games of skill’ by India or International courts or other statutes, or games where there are domestic and international competitions and tournaments, or games which can be determined to be ‘games of skill’ shall further be entitled to be included in Schedule A,</p>
                    <p className="fade-txt">Games of skill may be (a) Card based and (b) action/virtual sports /adventure/ mystery and (c) calculation/Strategy/quiz based.”</p>
                    <p className="fade-txt">6.7. Furthermore, the Supreme Court of India in the case of State of Andhra Pradesh v. K Satyanarayana (AIR 1968 SC 825) and KR Lakshmanan v. State of Tamil Nadu (AIR 1996 SC 1153) wherein the Hon’ble Court has clearly distinguished between the ratio of a Game of Skill and a Game of Chance and has imbibed that the dominant element of a skill of a person can supersede the element of chance which negates it from the act of gambling. The judgement is reproduced as hereunder:</p>
                    <p className="fade-txt">“A game of skill, on the other hand- although the element of chance necessarily cannot be eliminated is one in which success depends principally upon the superior knowledge, training attention, experience and adroitness of the player. Golf, chess and even Rummy are considered to be games of skill. The Courts have reasoned that there are few games, if any, which consists purely of chance or skill, and as such games of chance is one in which the element of chance predominates over the element of skill, and a game of skill is one in which the element of skill predominates over the element of chance. It is dominant element – “skill” or “chance” – which determines the character of the game”.</p>
                    <p className="title-txt">Safety precaution and responsible gaming</p>
                    <p className="fade-txt">7.1. Money Mela suggests that Users adopt a balanced approach while engaging with any of the Mobile Games on the Platform and safeguard themselves against any adverse effects. If played responsibly, Mobile Games (like other forms of sports) aim to encourage Users to develop their mental prowess, hand-eye coordination, competitiveness and encourage teamwork.</p>
                    <p className="fade-txt">7.2. You should take certain standard health and safety precautions while playing any Mobile Game, including taking adequate breaks, sitting at a reasonable distance from the screen, playing in a well-lit environment, and avoiding playing when tired, drowsy, intoxicated or under the influence of drugs Avoid playing without breaks over long periods of time as this could affect Your performance and could negatively impact hand-eye coordination, balance, and multi-tasking ability.</p>
                    <p className="fade-txt">7.3. The Platform or the Mobile Games offered on the Platform may contain flashing lights, realistic images, patterns and simulations which may cause certain side effects. If Your hands, wrists, arms, eyes or other parts of Your body become tired or sore while playing, or if You feel symptoms such as tingling, numbness, burning or stiffness, stop and rest before playing again. If You continue to have any of these above symptoms, please stop playing IMMEDIATELY and consult a doctor.</p>
                    <p className="fade-txt">7.4. If You play any Mobile Games on the Platform, give Yourself plenty of room to play and always be aware of Your surroundings. While playing any Mobile Game You may be moving around the play area and using Your hands to control gameplay. You must ensure that You are not near other people, objects, stairs, balconies, windows, walls, furniture or other objects that may pose a danger to You or could be damaged during the play. Never handle sharp or dangerous objects while playing any Mobile Game on the Platform.</p>
                    <p className="fade-txt">7.5. It is Your responsibility to control Your surroundings and movements at all times when playing the game to ensure that You don’t injure Yourself, any other persons, damage any property etc. Any playing of the Mobile Games is at Your own risk and Money Mela shall not be liable for any death or injury  resulting from Your use of the Platform.</p>
                    <p className="fade-txt">7.6. You agree that Your use of the Platform and to play the Mobile Games is at Your own risk, and it is Your responsibility to maintain such health, liability, hazard, personal injury, medical, life, and other insurance policies as You deem reasonably necessary for any injuries that You may incur while using the Platform.</p>
                    <p className="fade-txt">7.7. You hereby agree that if the terms of this Agreement are not adhered by You, Money Mela will be irreparably damaged, and therefore You agree that the Platform shall be entitled, without bond, other security, proof of damages, to appropriate equitable remedies with respect to any breach of this Agreement, in addition to any other remedies available under Applicable Law.</p>
                    <p className="title-txt">Community rules and code of conduct</p>
                    <p className="fade-txt">8.1. Money Mela may provide Users with different communication channels such as forums, live audio sessions, live audio chat with other players participating in any Contest, community groups, chat-rooms or chat areas (“Communication Facilities”) designed to enable You to communicate with other Users on the Platform.</p>
                    <p className="fade-txt">8.2. Money Mela only provides Users with the technical environment for an exchange of information. Money Mela does not initiate, select the receiver and/or modify any information exchanges between the Users through the Communication Facilities. Further, Money Mela has no obligation to and does not monitor these Communication Facilities except when required to do so under the provisions of Applicable Law</p>
                    <p className="fade-txt">8.3. The User may use the Communication Facilities as made available to them by the Platform. Money Mela may provide certain additional features or Communication Facilities to a select group of Users at its sole discretion. The Users do not have the right to claim any Communication Facilities on the Platform.</p>
                    <p className="fade-txt">8.4. Money Mela may enable audio sessions and live chat-rooms on the Platform for the Users from time-to-time. These sessions or/and chat rooms will be conducted by other users to (i) organize training; (ii) provide tips to play Mobile Games; (iii) provide educational content; or (iv) conduct other interactive sessions on the Platform. The sessions or/and chat rooms may have an open entry or may be restricted to a limited number of Users at Money Mela’s sole discretion. Users might be required to pay an ‘Access fee’ to participate in any of these live sessions or/and chat rooms hosted by Money Mela on the Platform. The ‘Access Fee’ shall be subject to levy of applicable Goods & Services Tax and the Fee collected shall be inclusive thereof.</p>
                    <p className="fade-txt">8.5. You understand that, by using these Communication Facilities, You may be exposed to communications (including in written, verbal, electronic, digital, machine-readable or other form) that You might find objectionable. You understand that any content sent or appearing through the Communication Facilities is the sole responsibility of the User(s) transmitting such content and Money Mela is not liable for any content posted on the Communication Channels.</p>
                    <p className="fade-txt">8.6. All Users of the Money Mela Platform must comply with Applicable Law at all times while using the Services of Platform, including our Community Guidelines (refer to Annexure III for more details) and Communication Facilities and must not publish or distribute any content which: (a) violates an Applicable Law, goes against common decency, or breaches the general terms and conditions of the Agreement; or (b) violates any trademarks, patents, utility or design patterns, copyrights, trade secrets, or other proprietary rights of third parties; or (c) impersonate any real person, including without limitation Money Mela or any other Money Mela agent or employee; or (d) is obscene, racist, violent, pornographic, of adult content, or otherwise threatening to the development of children and adolescents, or of a detrimental nature; or (e) is of an abusive, harassing, threatening or defamatory nature; or (f) seeks to unlawfully obtain login information or access to Accounts belonging to other Users; (g) contains personal data of third parties without their explicit consent; or (h) seek to collect, misuse, or disseminate any other User’s content or non-public personal information; or (i) is commercial, in particular promotional, in nature; (j) encourages or promotes gambling or money-laundering.</p>
                    <p className="fade-txt">8.7. All Users of the platform of Money Mela shall read and fully understand our Community Guidelines before posting any content on our platform.  By accepting the Terms and Use, the Users agree and acknowledge that they have read and fully understood the terms of the Community Guidelines.  Money Mela has a right to take appropriate and strict actions against any User violating such Community Guidelines.</p>
                    <p className="fade-txt">8.8. Under no circumstances will Money Mela or its third-party providers shall be liable for any errors, objections or omissions in any content or for any loss or damages of any kind incurred as a result of the content posted on its Platform.</p>
                    <p className="title-txt">Restrictions on your use of the Platform</p>
                    <p className="fade-txt">9.1. You will not use the Platform, or any content provided thereof for any purpose that is illegal, unlawful or prohibited by this Agreement or under Applicable Law.</p>
                    <p className="fade-txt">9.2. You will not use the Platform, or any content provided thereof:</p>
                    <p className="fade-txt">9.2.1. to host, display, upload, modify, publish, transmit, update or share any information that belongs to another Person and to which the User does not have any right to; </p>
                    <p className="fade-txt">9.2.2. is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another’s privacy, hateful, or racially, ethnically objectionable, disparaging,</p>
                    <p className="fade-txt">9.2.3. that is relating to or encourages money laundering or gambling, or is otherwise unlawful in any manner whatsoever;</p>
                    <p className="fade-txt">9.2.4. that harms minors in any way;</p>
                    <p className="fade-txt">9.2.5. that infringes any patent, trademark, copyright or other proprietary rights; violates any Applicable Law for the time being in force;</p>
                    <p className="fade-txt">9.2.6. that deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</p>
                    <p className="fade-txt">9.2.7. which impersonates another Person; contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of the Platform or  any other computer resource;</p>
                    <p className="fade-txt">9.2.8. that threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation; threatens public health or safety; promotion of cigarettes or any other tobacco products or consumption of intoxicant including alcohol and Electronic Nicotine Delivery System (ENDS) and like products that enable nicotine delivery except for the purpose & in the manner and to the extent, as may be approved under the Drugs and Cosmetics Act, 1940 and Rules made thereunder; threatens critical information infrastructure.</p>
                    <p className="fade-txt">9.3. You will not redistribute, sublicense, rent, publish, sell, assign, lease, market, transfer, or otherwise make the Platform or any component or content thereof, available to third parties without the permission of Money Mela.</p>
                    <p className="fade-txt">9.4. You will not circumvent or disable any digital rights management, usage rules, or other security features of the Platform; remove, alter, or obscure any proprietary notices (including copyright notices) on any portion of the Platform; and not use the Platform in a manner that threatens the integrity, performance, or availability of the Platform.</p>
                    <p className="fade-txt">9.5. You will not attempt to or engage in any activity that may:</p>
                    <p className="fade-txt">9.5.1. reverse engineer, decompile or otherwise extract the source code related to the Platform or any part thereof;</p>
                    <p className="fade-txt">9.5.2. use any robot, spider, retrieval application, or other device to retrieve or index any portion of the Platform or content thereof;</p>
                    <p className="fade-txt">9.5.3. collect information about Users for any purpose;</p>
                    <p className="fade-txt">9.5.4. create any Account by automated means or under false or fraudulent pretences for using the Platform;</p>
                    <p className="fade-txt">9.5.5. transmit any viruses, worms, defects, trojan horses, or any items of a destructive nature through the Platform;</p>
                    <p className="fade-txt">9.5.6. use the Platform in any manner that could damage, disable, overburden, or impair, or undertake any action which is harmful or potentially harmful to, any of the servers, networks, computer systems or resources connected to any of the servers connected, directly or indirectly to the Platform, or interfere with any other Users’ use and enjoyment of the Platform;</p>
                    <p className="fade-txt">9.5.7. carry out any denial of service (DoS, DDoS) or any other harmful attacks on the Platform or; disrupt or place unreasonable burdens or excessive loads on, or interfere with or attempt to make, or attempt any unauthorized access to the Platform or any part of the Platform or any User of the Platform;</p>
                    <p className="fade-txt">9.5.8. forge headers or otherwise manipulate identifiers to disguise the origin of any content transmitted through the Platform; and/or</p>
                    <p className="fade-txt">9.5.9. obtain any materials or information through any means not intentionally made available, in the opinion of Money Mela, through the Platform.</p>
                    <p className="fade-txt">9.6. You will not impersonate another Person or impersonate, guide or host on behalf of, or falsely state or otherwise misrepresent Your affiliation with any Person or entity, including, but not limited to Our officials, employees, agents, partners, affiliates, dealers and franchisees.</p>
                    <p className="fade-txt">9.7. If We detect any activity from Your User Account that is fraudulent, suspected to be defrauding the Platform, or if You are found colluding or participating in any kind of fraudulent activity on the Platform in any manner, then You shall be debarred from participating in any Contest available on the Platform.</p>
                    <p className="fade-txt">9.8. We reserve the right to deactivate or delete Your Account and all related information on it and forfeit related Balances and/or take any other appropriate action, at our sole and absolute discretion, in the event of any fraudulent, illegal or suspicious activities from Your Account on the Platform.</p>
                    <p className="fade-txt">9.9. Any deductions or forfeiture of Balances made from Your Account shall be made at Our sole and absolute discretion and shall not result in any liability on Money Mela whatsoever. We may choose to provide a right of appeal to the User after deleting, closing or forfeiting the balances in his/her Account. However, such right shall be provided at the sole and absolute discretion of Money Mela and the User shall not claim such right or any other recourse from Money Mela.</p>
                    <p className="fade-txt">9.10. Indemnification: You shall defend, indemnify and hold Money Mela, and its officers, directors, employees, representatives and agents harmless from and against any claims, actions, demands, liabilities, judgments, and settlements, including without limitation, reasonable legal fee that may result from or alleged to result from (a) Your use of the Platform or any content thereof, including Mobile Game; or (b) Your breach of any rules, regulations and/or orders under any applicable law.</p>
                    <p className="fade-txt">9.11. You are also responsible for any breach of Your obligations under the Agreement and/or for the consequences of any such breach.</p>
                    <p className="title-txt">Termination</p>
                    <p className="fade-txt">10.1. Your access to the Platform may be terminated if:</p>
                    <p className="fade-txt">10.1.1. You voluntarily uninstall the Platform from Your device;</p>
                    <p className="fade-txt">10.1.2. You knowingly or unknowingly cause direct or indirect breach, as ascertained by Money Mela, of these Terms of Use or Privacy Policy as a whole or in part; or</p>
                    <p className="fade-txt">10.1.3. You do not pay the requisite fee, if any, should Money Mela charge for use of the App.</p>
                    <p className="fade-txt">10.2. We may have to terminate Your access to the Platform if:</p>
                    <p className="fade-txt">10.2.1. We are required to do so by law (for example, where the access to and/or provision of the Platform to You becomes unlawful). In the event of the same You shall be able to withdraw amounts of the Winnings only;</p>
                    <p className="fade-txt">10.2.2. The third-party Person, if any, with whom We offered the Platform to You has terminated its relationship with Us or ceased to offer the related services to Us or to You;</p>
                    <p className="fade-txt">10.2.3. The provision of Platform to You, is no longer commercially viable or feasible for Us; or</p>
                    <p className="fade-txt">10.2.4. You are an infringer of this Agreement.</p>
                    <p className="fade-txt">10.3. We may terminate this Agreement at any time, with or without notice and may disable Your access to the Platform and/or bar You from any future use of the Platform.</p>
                    <p className="fade-txt">10.4. You may terminate this Agreement at any time by terminating Your access to the Platform. However, certain obligations of Yours under this Agreement shall continue to prevail even on such termination.</p>
                    <p className="fade-txt">10.5. When this Agreement comes to an end, all of the legal rights, obligations and liabilities that You and Money Mela have benefited from, been subject to (or which have accrued over time whilst the Agreement has been in force) or which are expressed to continue indefinitely, shall be unaffected by this cessation, and shall continue to apply to such rights, obligations and liabilities indefinitely.</p>
                    <p className="title-txt">Disclaimers</p>
                    <p className="fade-txt">11.1. No warranties: The Contents provided through the Platform may include technical inaccuracies or typographical errors. Money Mela may make changes or improvements to the Platform at any time. The Contents or any information available on the Platform is provided “as is” and “as available” and without warranties of any kind either expressed or implied, to the fullest extent permissible pursuant to Applicable Laws, including but not limited to:</p>
                    <p className="fade-txt">11.1.1. any implied warranty or merchantability, fitness for a particular purpose;</p>
                    <p className="fade-txt">11.1.2. that the contents of the Platform will be uninterrupted or error-free;</p>
                    <p className="fade-txt">11.1.3. that defects, if any on the Platform will be corrected;</p>
                    <p className="fade-txt">11.1.4. the Platform being constantly available or available at all;</p>
                    <p className="fade-txt">11.1.5. installation or uninstallation choices in relation to the Platform being successfully executed in all cases;</p>
                    <p className="fade-txt">11.1.6. Your personal ability to use the Platform;</p>
                    <p className="fade-txt">11.1.7. Your satisfaction with the use of the Platform;</p>
                    <p className="fade-txt">11.1.8. the accuracy of the data provided by the Platform;</p>
                    <p className="fade-txt">11.1.9. the security and privacy of Your data;</p>
                    <p className="fade-txt">11.1.10. that all bugs or errors in relation to the Platform will be corrected;</p>
                    <p className="fade-txt">11.1.11. that the Platform will be compatible with all devices and all networks;</p>
                    <p className="fade-txt">11.1.12. that the Platform is fit for a particular purpose or use;</p>
                    <p className="fade-txt">11.1.3. that the Platform and the contents thereof are accessible in every location; or</p>
                    <p className="fade-txt">11.1.4. that the Platform and the contents would be perpetually secure and not prone to breaches of security anywhere in the world.</p>
                    <p className="fade-txt">11.2. Money Mela, its officers, directors, employees, affiliates and agents and any other service provider(s) responsible for providing access to the Platform in connection with this Agreement will not be liable for any acts or omissions, including of a third party Person, and including those vendors participating in Money Mela’ offerings made to You, or for any unauthorized interception of data or breaches of this Agreement attributable in part to the acts or omissions of third parties Persons, or for damages that result from the operation systems, equipment, facilities or services provided by third parties Persons that are interconnected with Money Mela.</p>
                    <p className="fade-txt">11.3. The Platform may include links to other mobile applications and/or websites (some of which may be automated search results) which may contain materials that are objectionable, unlawful, or inaccurate. We do not endorse or support these links or the products and services they provide; these links are provided for Your convenience only. We are not responsible or liable for the content or accuracy of such links.</p>
                    <p className="fade-txt">11.4. We may stop provision of the Platform (or any part thereof), permanently or temporarily, to You or to Users generally or may modify or change the nature of the Platform and/or these Terms of Use at Our sole discretion, without any prior notice to You. Your use of the Platform following any such modification constitutes Your deemed acceptance to be bound by the Agreement (or as it may be modified).</p>
                    <p className="fade-txt">11.5. You agree that You are responsible for all data charges You incur through use of the Platform.</p>
                    <p className="fade-txt">11.6. Sponsored Content:</p>
                    <p className="fade-txt">11.6.1. You agree and acknowledge that Money Mela may, pursuant to its engagement with certain Sponsored Content Partners, place certain Sponsored Content on, about, or in conjunction with the other content within the Platform. The manner, mode and extent of display of such Sponsored Content is subject to change without a specific notice to You.</p>
                    <p className="fade-txt">11.6.2. The content displayed on the Platform is for Your non-commercial and personal use. However, Sponsored Content Partners may use the Platform to display their respective Sponsored Content for commercial purposes. You are not allowed to copy, reproduce, alter, modify, create derivative works of, or publicly display any content displayed on the Platform.</p>
                    <p className="fade-txt">11.7. Limitation of liability: Your use of the Platform, or any content, including Mobile Game, available thereof is entirely at Your own option and risk and We shall be held harmless and not be liable for any direct, indirect, incidental, consequential, special, exemplary, punitive, monetary or any other damages, fees, fines, penalties or liabilities whatsoever arising out of or relating to Your use of the Platform or any content thereof, including Mobile Game. To the maximum extent permitted by Applicable Law, Our total liability to You for any damages (regardless of the foundation for the action) shall not exceed in the aggregate the Balance in your Account.</p>
                    <p className="fade-txt">11.8. You may terminate Your access to the Platform if You are not satisfied with the Platform or any Mobile Games.</p>
                    <p className="fade-txt">11.9. Force Majeure: Money Mela shall not be liable for any damages whatsoever arising out of Force Majeure Event or other similar circumstances, directly or indirectly to the Users as a result of playing Mobile Games or using the services offered by Money Mela on the Platform. A Force Majeure Event is a real or potential labour disputes, governmental actions, war or threat of war, sabotage, civil unrest, demonstrations, fire, storm, flooding, explosion, earthquake, provisions or limitations of materials or resources, inability to obtain the relevant authorization, accident, and defect in electricity or telecommunication network that affects the Company’s ability to offer the services or/and the Mobile Games on the Platform. Force majeure or other event beyond Money Mela’s control hindering, delaying or complicating the maintenance of the Platform entitles Money Mela to suspend or limit the Platform until further notice.</p>
                    <p className="title-txt">Governing law and dispute resolution</p>
                    <p className="fade-txt">12.1. The Platform may be controlled and operated through any country and will be subject to the laws of that state in which they are controlled and operated by the User. If You use the Platform from any location, then, You are responsible for compliance with the local laws applicable to You.</p>
                    <p className="fade-txt">12.2. All or any disputes arising out of or touching upon or in relation to this Agreement including the interpretation and validity of the terms thereof and the respective rights and obligations of the parties shall be settled through arbitration. The arbitration shall be governed by the Arbitration & Conciliation Act, 1996 (India) or any statutory amendments/modifications thereto for the time being in force.</p>
                    <p className="fade-txt">12.3. The arbitration proceedings shall be held at Mumbai by a sole arbitrator who shall be appointed by Money Mela and whose decision shall be final and binding upon all the parties.</p>
                    <p className="fade-txt">12.4. Subject to the arbitration clause, the courts at Mumbai alone shall have the jurisdiction. The language of the arbitration proceedings shall be in English.</p>
                    <p className="fade-txt">12.5. You and Money Mela agree that any cause of action arising out of Your use of the Platform must be commenced within 3 (three) months after the cause of action accrues or You become aware of the facts giving rise to the cause of action, whichever is later. Otherwise, such cause of action shall be permanently barred.</p>
                    <p className="title-txt">Grievances </p>
                    <p className="fade-txt">In accordance with the Information Technology Act 2000 and rules made thereunder, you can address your concerns regarding data safety, privacy, and the Platform usage concerns including complaints You have against other users on the Platform. We will resolve these issues raised by You within 60 (thirty) days from receiving them. You may contact the Grievance Officer at the following coordinates: </p>
                    <p className="fade-txt">Name: M/s White Cheetah Entertainment & Technology Pvt. Ltd.</p>
                    <p className="fade-txt">Address: 5, 2nd Floor, Plot-8, Kala Bhavan, Padmakar L Khande Marg, Mathew Road, Opera House, Girgaon, Mumbai, Maharashtra, India - 400004</p>
                    <p className="fade-txt">Office Hours: 10:00am - 6:30pm</p>
                    <p className="fade-txt">Email: <a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a></p>
                    <p className="title-txt">Compliances </p>
                    <p className="fade-txt">We ensure your compliance that the games offered on our platform comply with applicable gaming laws. You may contact the Compliance Officer at the following coordinates:</p>
                    <p className="fade-txt">Name: M/s White Cheetah Entertainment & Technology Pvt. Ltd.</p>
                    <p className="fade-txt">Address: 5, 2nd Floor, Plot-8, Kala Bhavan, Padmakar L Khande Marg, Mathew Road, Opera House, Girgaon, Mumbai, Maharashtra, India - 400004</p>
                    <p className="fade-txt">Office Hours: 10:00am - 6:30pm</p>
                    <p className="fade-txt">Email: <a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a></p>
                    <p className="title-txt">Referral program</p>
                    <p className="fade-txt">1. Money Mela may offer referral programs (“Referral Program”) on the Platform to allow all its Users to receive certain rewards in the form of Money Mela Tokens or cash (“Rewards”) for each player that they refer to play on the Platform.</p>
                    <p className="fade-txt">2. All active Users of the Platform are eligible to participate in the Referral Program except in cases where an Account has been suspended or has otherwise been disallowed by Money Mela from participation in the Referral Program.</p>
                    <p className="fade-txt">3. Only ‘successful referrals’ will be counted and eligible to receive the Rewards. A successful referral is an event in which a new User will register on the Platform and complete the sign-up by clicking on the referral link of the referrer or by putting the referrer’s unique referral code. Further, additional milestones completed by the new User (referee), Money Mela may decide to offer additional Rewards to the referrer. Money Mela reserves the right to modify, add or remove any additional milestones and/ or any additional linked Rewards.</p>
                    <p><span className="fade-txt">4.&nbsp;</span><span className="bold-txt">Criteria to use the Rewards &nbsp;</span><span className="fade-txt">–&nbsp; The User will be able to use only a certain percentage of the cumulative Rewards (as permitted by Money Mela from time to time) reflecting in his/her Account to join any of the upcoming tournaments on the Platform.</span></p>
                    <span className="d-flex"><p className="fade-txt">5.&nbsp;</p><p className="bold-txt">Additional terms applicable to all Referral Programs</p></span>
                    <ol className="ms-5">
                        <li className="fade-txt">The nature and value of Rewards to be credited will be based on the Referral Program offered by Money Mela at any given point in time to an individual User.</li>
                        <li className="fade-txt">Referral links will be generated from each User’s Account on the Platform.</li>
                        <li className="fade-txt">Rewards and their types are subject to change at Money Mela’s discretion without notice.</li>
                        <li className="fade-txt">Users found to have been committing fraud will be blocked from the Money Mela platform.</li>
                        <li className="fade-txt">The reward amount/type is based on the applicable reward on the day a user’s referral signs up on the platform.</li>
                        <li className="fade-txt">A user can refer up to 100 friends per week.</li>
                        <li className="fade-txt">Money Mela reserves the right to change rules and regulations without notice.</li>
                        <li className="fade-txt">Please contact Customer Support in case of further queries.The nature and value of Rewards to be credited will be based on the Referral Program offered by Money Mela at any given point in time to an individual User.</li>
                    </ol>
                    <span className="d-flex"><p className="fade-txt">6.&nbsp;</p><p className="bold-txt">Disqualification from Referral Programs</p></span>
                    <ol className="ms-5">
                        <li className="fade-txt">Users will not receive credit for referring to themselves by creating multiple Accounts.</li>
                        <li className="fade-txt">Money Mela reserves the right, in its sole discretion, to suspend or disqualify an Account from the Referral Program or nullify the referral Rewards.</li>
                    </ol>
                    <p><span className="fade-txt">7.&nbsp;</span><span className="bold-txt">Taxes&nbsp;</span><span className="fade-txt">–&nbsp;The Users are responsible for paying any and all taxes or commissions related to the Rewards earned by them through the Referral Programs on the Platform.
                        We reserve the right to withhold taxes as appropriate and as required under Applicable Laws.</span></p>
                    <p className="title-txt">Overview of the differences of Quiz Games:</p>
                    <p className="fade-txt">Quiz Game is a form of game or mind sport in which players attempt to answer correctly about a variety of subjects. If a player answers wins, winnings will be credited to their wallet.</p>
                    <p className="fade-txt">Quiz Game has 4 types of quiz modes (tournament-style) i.e. Level based quiz game, Time based quiz game, Difficulty based quiz game and Simple Quiz Version. Simple quiz version will have the ability to be accessed and played on demand by the user, where as the other 3 quiz modes, Level based quiz game, Time based quiz game and Difficulty based quiz game, will be played at scheduled times and will not have a limit on the number of players that can join.</p>
                    <p className="title-txt">1. Level Based Game</p>
                    <p className="fade-txt">In level based quiz games players try to give correct answers for question levels and based on the speed and correctness of their answer they will move to the next level. A certain percentage of the players will be eliminated depending on the number of points they got in that level. If the answer is correct the player will bank the winning amount assigned from the winning pool amount for that level and move to the next level and if the answer is wrong he/she will be eliminated from the game. The points will be determined first whether the answer is correct or not and second by the speed at which the users answer the question. The final round of the game will have a leaderboard style distribution where the points from the round will be used as the basis for the leaderboard and distributed according to a predetermined prize distribution. The final round question is also likely to be a bit harder and the admin panel should have a separate section for it.</p>
                    <p className="title-txt">1.1. How to Decide the Winner? </p>
                    <ul>
                        <li className="fade-txt">If there are 10 players competing for the specific question in tournament and all have given correct answer then 20% (as decided from the admin) of players will be eliminated by:</li>
                        <ul className="sq-list">
                            <li className="fade-txt">Time taken to answer the question. Players who have taken more time to answer the question will be eliminated first.</li>
                            <li className="fade-txt">Time will be recorded to 3 decimal places i.e. seconds to milliseconds and milliseconds to microseconds.</li>
                            <li className="fade-txt">If players have answered the question correctly with exactly the same time then, less time taken by the player in the previous question moves ahead in the tournament. (or for a tie in the first round, earlier registration moves forward)</li>
                        </ul>
                        <li className="fade-txt">The above process repeats for all the questions included in the tournament.</li>
                        <li className="fade-txt">If in case the scenario occurs where more than 20% of players have answered incorrectly, they will also be eliminated from the tournament.</li>
                        <li className="fade-txt">If all the players have answered the question correctly then the slowest to answer the question will eliminate first.</li>
                        <li className="fade-txt">If there are 10 questions in the tournament and all players are eliminated within 5 questions then the tournament will end and winnings will be distributed as per rankings.</li>
                    </ul>
                    <p className="title-txt">2. Time Based Quiz</p>
                    <p className="fade-txt">In a time based quiz game, the player will be able to choose the number of seconds they can answer the question in from a set of pre decided options, for example 2s, 3s, 5s, 8s & 10s. Lesser the seconds - higher the point earning, if the answer is correct and no users will be eliminated. The prize distribution will be Leaderboard style.</p>
                    <p className="title-txt">3. Difficulty Based Quiz</p>
                    <p className="fade-txt">In a difficulty based quiz game, players will be able to select the question difficulty i.e. low, mid or high difficulty for specific categories/areas of topics, such as math, science, sports. Which means the users will have two decisions. One to select the category and second to decide the difficulty level in that category. and that question will be locked after. So theoretically a user can answer all questions from one category. This game is probably better in landscape.
                        The harder the difficulty of the questions the more points a user will earn for answering the questions.</p>
                    <p className="title-txt">4. 50/50 Lifeline:</p>
                    <p className="fade-txt">There will be a 50/50 lifeline, which will eliminate two answer options from the four answer options for a user that can be used in Level based quiz game, Time based quiz game, Difficulty based quiz game. This will be separate and purchasable before the game from our app and then when the user enters the game it should recognize how many lifelines the user has in their account. There will be a limitation on the number of lifelines, for which questions that can be used in the game. This should be variable for us in the Admin Panel to be able to control these factors. Examples of the categories are listed below.</p>
                    <ol>
                        <li className="fade-txt">Max number of lifelines will be determined by number of questions, so 5 questions 1 lifeline, 10 questions 2 lifelines etc.</li>
                        <li className="fade-txt">Level Based: There will be a limit to the question number that the lifeline can be used, so for instance the lifeline can only be used for the first two questions for a 5 questions quiz, until question 4 for a 7 question quiz. </li>
                    </ol>
                    <p className="title-txt">5. Gameplay (Also refer to Game flow Diagram for detailed Game Flow):</p>
                    <ul>
                        <li className="fade-txt">Player will able to play below types of quiz modules:</li>
                        <ul className="sq-list">
                            <li className="fade-txt">Level Based quiz game Modules</li>
                            <li className="fade-txt">Time Based quiz game Modules</li>
                            <li className="fade-txt">Difficulty Based quiz game Modules</li>
                        </ul>
                    </ul>
                    <p className="title-txt">5.1 Level Based quiz game Modules:</p>
                    <ul>
                        <li className="fade-txt">Players will be able to join a tournament which will have multiple users.</li>
                        <li className="fade-txt">Players will be able to answer any number of  questions (as decided by the admin from the admin panel) with 4 answer options. </li>
                        <li className="fade-txt">Players will only be able to register between the given time which is decided by admin from the admin panel. We have considered that player will not able to register to the tournament once it is started</li>
                        <li className="fade-txt">For Ex: If the tournament start time is 12:00 PM then players will only be able to register till 11:59 AM. </li>
                        <li className="fade-txt">Once a player is registered in the tournament they won't be able to leave the tournament and won't get their entry fees back.</li>
                        <li className="fade-txt">Once the tournament starts the player will be able to answer the first question/level. If the selected answer is correct he/she will move to the next question/level. If in case the answer is incorrect he/she will be eliminated from the tournament.  </li>
                        <li className="fade-txt">Players will be able to view the leaderboard only if the game is completed.</li>
                        <li className="fade-txt">If a player quits the game in between or gets disconnected without getting the question wrong, they will lose all their winnings.</li>
                        <li className="fade-txt">Winnings will be credited to the player's account for correct answers ONLY if the player gets an answer incorrect or upon game completion.</li>
                        <li className="fade-txt">Player will able to answer below types of questions:</li>
                        <ul className="sq-list">
                            <li className="fade-txt">Normal question with single option selection</li>
                            <li className="fade-txt">Arrange option in sequential order correctly</li>
                        </ul>
                        <li className="fade-txt">Players will be able to view the leaderboard once the tournament is completed.</li>
                        <li className="fade-txt">Players will be able to quit the game anytime as per their preference, but quitting in the middle of the game will result in the loss of the entry fees and any winnings.</li>
                    </ul>
                    <p className="title-txt">5.2 Time Based quiz game Modules:</p>
                    <ul>
                        <li className="fade-txt">Players will be able to join a tournament which will have multiple users.</li>
                        <li className="fade-txt">Players will only be able to register between the given time which is decided by the admin panel. We have considered that player will not able to register to the tournament once it is started</li>
                        <li className="fade-txt">For Ex: If the tournament start time is 12:00 PM then players will only be able to register till 11:59 AM.</li>
                        <li className="fade-txt">Once a player is registered in the tournament they won't be able to leave the tournament and won't get their entry fees back.</li>
                        <li className="fade-txt">In a time based quiz module, players will be able to choose the number of seconds I.e. 2,3,5,8 (as decided from the admin panel) to answer the question.</li>
                        <li className="fade-txt">For Ex: If a player has selected 2 seconds to answer the question he/she will receive 1000 as winning points if answer is correct and if player has selected 5 seconds he/she will receive 450 winning points as decided by admin panel</li>
                        <li className="fade-txt">If a player fails to answer in the selected time option, the player will receive lesser points, which will be preset from the back end.</li>
                        <li className="fade-txt">Price distribution will be as per the leaderboard ranking of the points and as per winner position selected by an Admin.</li>
                        <li className="fade-txt">Player will able to answer below types of questions:</li>
                        <ul className="sq-list">
                            <li className="fade-txt">Normal question with single option selection</li>
                            <li className="fade-txt">Arrange option in sequential order correctly.</li>
                        </ul>
                        <li className="fade-txt">Players will be able to view the leaderboard once the tournament is completed.</li>
                        <li className="fade-txt">Players will be able to quit the game anytime as per their preference, but quitting in the middle of the game will result in the loss of the entry fees and any winnings.</li>
                    </ul>
                    <p className="title-txt">5.3 Difficulty Based quiz game Modules:</p>
                    <ul>
                        <li className="fade-txt">Players will be able to join a tournament which will have multiple users.</li>
                        <li className="fade-txt">Players will only be able to register between the given time which is decided by the admin panel. We have considered that players will not be able to register to the tournament once it has started.</li>
                        <li className="fade-txt">For Ex: If the tournament start time is 12:00 PM then players will only be able to register till 11:59 AM. </li>
                        <li className="fade-txt">Once a player is registered in the tournament they won't be able to leave the tournament and won't get their entry fees back.</li>
                        <li className="fade-txt">In a difficulty based quiz module, players will be able to answer questions for different categories as decided from the admin panel.</li>
                        <li className="fade-txt">Player will be able to select any one difficulty level i.e. easy, medium and difficult question for a particular category he/she will be able to earn more points for a higher difficult question compared to a lower difficulty question answer.</li>
                        <li className="fade-txt">For Ex: If a player has selected sports as a category and has given the correct answer for a higher difficulty question he/she will receive more points as decided by the admin from back end.</li>
                        <li className="fade-txt">Player will able to answer below types of questions:</li>
                        <ul className="sq-list">
                            <li className="fade-txt">Normal question with single option selection</li>
                            <li className="fade-txt">Arrange option in sequential order correctly</li>
                        </ul>
                        <li className="fade-txt">Players will be able to view the leaderboard once the tournament is completed.</li>
                        <li className="fade-txt">Price distribution will be as per the leader-board ranking of the points and as per winner position selected by an Admin.</li>
                        <li className="fade-txt">Players will be able to view the leaderboard once the tournament is completed.</li>
                        <li className="fade-txt">Players will be able to quit the game anytime as per their preference, but quitting in the middle of the game will result in the loss of the entry fees and any winnings.</li>
                    </ul>
                    <p className="title-txt">6. Other Considerations</p>
                    <p className="fade-txt">6.1. Users can participate in a Contest with other Users without any restriction on participation, unless specified otherwise in the Rules or the Agreement. Users can participate by choosing any of the upcoming Contests which will be linked to any of the current or upcoming real-world events.</p>
                    <p className="fade-txt">6.2. Users will not be offered the opportunity or option to auto-complete or auto-fill their teams and/or responses within the Contest.</p>
                    <p className="fade-txt">6.3. We shall ensure that all Contests offered to the Users participating inMoney Mela Super Team are competitive and incorporate principles of fair-play.Money Mela is committed to ensuring the utmost levels of fairness and competitiveness in itsMoney Mela SuperTeam/MPL Fantasy.</p>
                    <p className="fade-txt">6.4. By participating in this Contest(s), each Participant acknowledges and agrees that he/she is participating in a game of skill.</p>
                    <p className="fade-txt">Collusion is strictly forbidden on Money Mela. In case we detect that You and other users are playing games and tournaments forming a team it will result in cancellation of accounts of You and all such players who participated in forming a team. By accepting this Term, you accept that
                        You will not participate in forming a team, or by communicating with other players. In case You are found to be involved in such activities, We also reserve the right to freeze funds in Your Money Mela account and investigate further to ascertain the extent of undue benefit derived by You and such others and to cancel and close Your account without any communication with You.</p>
                    <p className="fade-txt">6.5. Should we at any time have reasonable ground to suspect that You have or are using fraudulent means which are in violation of the Terms of Use herein, that You have or are using multiple IDs which is in breach of the Terms of Use, We have the right to debar You, suspend Your account, prohibit Your access to the Website and withhold any prizes that You may have won, you hereby acknowledge and agree to the same.</p>
                    <p className="fade-txt">6.6 Collusion, use of External Player Assistance tools/ HUD’s, Running Automatic players (Bots), Chip–Dumping or any other Fraudulent behaviour is not allowed.</p>
                    <p className="title-txt">Special Terms for Money Mela Audio Content</p>
                    <p className="title-txt">Annexure I</p>
                    <p className="fade-txt">Money Mela provides a personalized pay-per-access service that allows our users / you to access certain audio, visual, audio-visual content including but not limited to podcasts, interviews, talk shows, chat shows, training videos, tutorials etc. (“Money Mela Content”) streamed over the Internet and accessible via the Money Mela mobile application on your smart phones with necessary hardware and
                        software requirements for accessing the Money Mela Content (“Money Mela Content-ready device”).</p>
                    <p className="fade-txt">These Terms of Use govern your use of our service in this regard. As used in these Terms of Use, “Money Mela Content service”, “our service” or “the service” means the personalized service provided by Money Mela for discovering and accessing Money Mela Content, including all features and functionalities, recommendations and reviews, the mobile-application, and user interfaces, as well as
                        all content and software associated with our service.</p>
                    <p className="bold-txt">1. Access</p>
                    <p className="fade-txt">1.1. Your access to theMoney Mela Content service is dependent upon payment of the designated fee (“access fee”) which shall be deducted from your Deposit Wallet.  We may charge appropriate goods and service taxes on the access fee in addition to the access fee. In case your Deposit Wallet does
                        not have sufficient balance to meet the access fee, you shall be prompted to top up your Deposit Wallet and once topped up, you will be given access to the Money Mela Content on payment of the access fee. To use the Money Mela Content service you must have Internet access and a Money Mela Content-ready device.</p>
                    <p className="bold-txt">2. Free Trials</p>
                    <p className="fade-txt">2.1. We may offer some Money Mela Content free of cost and such Money Mela Content may be accessed on the Money Mela Content-ready device without any deductions from your Deposit Wallet.</p>
                    <p className="bold-txt">3. Subscription</p>
                    <p className="fade-txt">3.1. We reserve the right to offer the Money Mela Content on a subscription model or any alternate model of payment and access at our sole discretion.</p>
                    <p className="bold-txt">4. Money Mela Content Service</p>
                    <p className="fade-txt">4.1. You must be 18 years of age, or the age of majority in your province, territory or country, to access the Money Mela Content service. Minors may not access or use the Money Mela Content service.</p>
                    <p className="fade-txt">4.2. The Money Mela Content service and any content accessed through the service are for your personal and non-commercial use only and may not be shared with anyone. While accessing the Money Mela Content after paying the relevant access fee we grant you a limited, non-exclusive, non-transferable right to access the Money Mela Content service and access Money Mela Content. Except for the foregoing, no right, title or interest shall be transferred to you. You agree not to use the service for broadcasting, public performances, sharing over any channels etc.</p>
                    <p className="fade-txt">4.3. You may access the Money Mela Content only within India and we reserve the right to place any geographic restrictions on access to such content depending upon licensing conditions or having regard to local laws.  The content that may be available for you to access will vary by geographic location and will change from time to time. CertainMoney Mela Content may be available for live streaming and shall not be available on theMoney Mela Content-ready device once the live-stream is over. Such content shall have to be accessed at designated streaming times according to the schedule available on theMoney Mela platform and we shall not be responsible for any loss in content warranted by a delay in accessing the said content.</p>
                    <p className="fade-txt">4.4. The Money Mela Content service, including the content library, is regularly updated. In addition, we may continually test various aspects of our service, including our website, user interfaces, promotional features and availability of Money Mela Content.</p>
                    <p className="fade-txt">4.5. Unless otherwise specified, payment of access fee for a particularMoney Mela Content entitles you to access it only once and any repeat access of the same content shall require you to pay the access fee again. We may at our sole discretion offer content that is available for temporary download and offline access on your Money Mela Content-ready device
                        (“Offline Content”). Such Offline Content once downloaded onto your Money Mela Content-ready device may be accessed as many times as you wish without requiring payment of additional access fees. Limitations apply, including restrictions on the number of Offline Content per account, storage limitations of yourMoney Mela account and / or your Money Mela Content-ready device, the maximum number ofMoney Mela Content-ready devices that can contain Offline Titles per account, the time period within which you will need to begin accessing Offline Titles and how long the Offline Titles will remain accessible. As Money Mela Content is not available outside India, Offline Titles may also not be playable in countries outside India even though they were originally accessed, downloaded and stored while the user was in India.</p>
                    <p className="fade-txt">4.6. You agree to use the Money Mela Content service, including all features and functionalities associated therewith, in accordance with all applicable laws, rules and regulations, or other restrictions on use of the service or content therein. You agree not to archive, reproduce, distribute, modify, display, perform, publish, license, create derivative works from, offer for sale, or use (except as explicitly authorized in these Terms of Use) content and information contained on or obtained from or through the Money Mela Content service. You also agree not to: circumvent, remove, alter, deactivate, degrade or thwart any of the content protections in theMoney Mela Content service;
                        use any robot, spider, scraper or other automated means to access theMoney Mela Content service; decompile, reverse engineer or disassemble any software or other products or processes accessible through the Money Mela Content service; insert any code or product or manipulate the content of the Money Mela Content service in any way; or use any data mining, data gathering or extraction method. In addition, you agree not to upload, post, e-mail or otherwise send or transmit any material designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment associated with the Money Mela Content service, including any software viruses or any other computer code, files or programs. We may terminate or restrict your use of our service if you violate these Terms of Use or are engaged in illegal or fraudulent use of the service.</p>
                    <p className="fade-txt">4.7. The quality of the audio or display of the Money Mela Content may vary from device to device, and may be affected by a variety of factors, such as your location, the bandwidth available through and/or speed of your Internet connection. Certain enhanced audio and video capabilities are subject to your Internet service and device capabilities. Not all content may be available on enhanced audio or video capabilities and default audio and video settings on cellular networks will exclude such enhanced capabilities. You are responsible for all Internet access charges. Please check with your Internet provider for information on possible Internet data usage charges. The time it takes to stream the Money Mela Content once access to such content is granted will vary based on a number of factors, including your location, available bandwidth at the time,
                        the content you have selected and the configuration of your Money Mela Content-ready device.</p>
                    <p className="fade-txt">4.8. Money Mela platform software is developed by, or for, White Cheetah Entertainment & Technology and is designed to enable use of Money Mela services including Money Mela Content services through Money Mela Content-ready devices. This software may vary by device and medium, and functionalities and features may also differ between devices. You acknowledge that the use of the service may require third party software that is subject to third party licenses. You agree that you may automatically receive updated versions of theMoney Mela application and related third-party software.</p>
                    <p className="fade-txt">5. Passwords and Account Access. The user who created the Money Mela account and is charged the access fee for the Money Mela Content (the “Account Owner”) has access and control over the Money Mela account and the Money Mela Content-ready devices that are used to access our service and is responsible for any activity that occurs through the Money Mela account. To maintain control over the account and to prevent anyone from accessing the account (which would include information on viewing history for the account), the Account Owner should maintain control over the Money Mela Content-ready devices that are used to access the service and not reveal the password or details of the payment methods associated with the Deposit Wallet of the account to anyone.</p>
                    <p className="fade-txt">6. You are responsible for updating and maintaining the accuracy of the information you provide to us relating to your account. We can terminate your account or place your account on hold in order to protect you,  Money Mela or our partners from identity theft or other fraudulent activity.</p>
                    <p className="fade-txt">7. Warranties and Limitations on Liability. The Money Mela Content service is provided “as is” and without warranty or condition. In particular, our service may not be uninterrupted or error-free. You waive all special, indirect and consequential damages against us. These terms will not limit any non-waivable warranties or consumer protection rights that you may be entitled to under the laws of your country of residence.</p>
                    <p className="bold-txt">8. Miscellaneous</p>
                    <p className="fade-txt">8.1. Governing Law. These Terms of Use shall be governed by and construed in accordance with the laws of India.</p>
                    <p className="fade-txt">8.2. Unsolicited Materials. We do not accept unsolicited materials or ideas for Money Mela Content and we are not responsible for the similarity of any of its content or programming in any media to materials or ideas transmitted to us.</p>
                    <p className="fade-txt">8.3. Customer Support. To find more information about our service and its features or if you need assistance with your account, please visit our website moneymela.co.in. In the event of any conflict between these Terms of Use and information provided by Customer Support or other portions of our website, these Terms of Use will prevail.</p>
                    <p className="fade-txt">8.4. Survival. If any provision or provisions of these Terms of Use shall be held to be invalid, illegal, or unenforceable, the validity, legality and enforceability of the remaining provisions shall remain in full force and effect.</p>
                    <p className="fade-txt">8.5. Changes to Terms of Use and Assignment. We may, from time to time, change these Terms of Use. We will notify you at least 30 days before such changes apply to you. We may assign or transfer our agreement with you including our associated rights and obligations at any time and you agree to cooperate with us in connection with such an assignment or transfer.</p>
                    <p className="fade-txt">8.6. Electronic Communications. We will send you information relating to your account (e.g. payment authorizations, invoices, changes in password or debits to Deposit Wallets, balance short-fall in payment of access fee, confirmation messages, notices) in electronic form only, for example via emails to your email address provided during registration.</p>
                    <p className="title-txt">Terms for content providers (the Licensors)</p>
                    <p className="title-txt">Annexure II</p>
                    <p className="title-txt">Standard Content Licensing Agreement</p>
                    <p className="fade-txt">By hosting content on Money Mela audio shows you (the “Licensor”) agree to be bound by the terms of this Standard Content Licensing Agreement.</p>
                    <p className="bold-txt">WHEREAS</p>
                    <p className="fade-txt">1. The Licensor, owns the underlying intellectual property including the copyright in the content more specifically described in Schedule I (the “Content”).</p>
                    <p className="fade-txt">2. The Licensee, a company incorporated under the laws of India operates a mobile application and associated website which offers games and audio-visual / video / audio content through online streaming on its platform (the “Money Mela”).</p>
                    <p className="fade-txt">3. The Licensor agrees to licence the right to use the Content to the Licensee and all underlying intellectual property in such Content including copyrights if any in accordance with the terms and conditions set forth herein and the Licensee agrees to accept the licence on the terms and conditions set forth herein.</p>
                    <p><span className="bold-txt">NOW THEREFORE,&nbsp;</span><span className="fade-txt">the parties, upon negotiations, agree as follows:</span></p>
                    <p className="title-txt">1. Granting of Licence</p>
                    <p className="fade-txt">1. The Content</p>
                    <p className="fade-txt">1.1.1. Upon the terms and conditions hereinafter set forth, the Licensor hereby grants to the Licensee and the Licensee hereby accepts the right to use the Content in India.</p>
                    <p className="fade-txt">1.1.2 The Licensor shall have the sole and exclusive ownership of the Content, including all improvements, updates, derivative products and intellectual property rights thereof, whether such improvements, updates, derivative products and intellectual property rights are made by the Licensor or the Licensee. The rights and obligations under this paragraph shall survive the termination of this Agreement.</p>
                    <p className="fade-txt">1.2. Scope</p>
                    <p className="fade-txt">1.2.1. The right to use the Content granted by the Licensor to the Licensee is effective only for the business operation of the Money Mela platform by the Licensee.
                        The Licensor agrees that the Licensee may use the Content on any other website or
                        media pursuant to the purpose of the licence and to enable the Licensee to fully utilize the underlying intellectual properties granted in respect of the Content as far as such use relates to the Money Mela platform.</p>
                    <p className="fade-txt">1.2.2. The right to use the Content granted by the Licensor to the Licensee is effective only in India.</p>
                    <p className="fade-txt">1.2.3. The licence provided by the Licensor is exclusive to the Licensee in India and the Licensor shall not licence the Content to any third-party during the term of this Agreement without the consent of the Licensee irrespective of the scope of this licence.</p>
                    <p className="fade-txt">1.2.4. The Licensor acknowledges and agrees that the Licensor shall provide the Content for access, viewing, listening etc. on the Money Mela platform to its users and may permit its users to download the said Content for offline access, viewing, listening etc. on the Money Mela platform (“Access”).</p>
                    <p className="title-txt">2. Terms of Payment</p>
                    <p className="fade-txt">The Licensee agrees to pay the Licensor licence fees amounting to INR … per unique Access by the Licensee’s users on the Money Mela platform.  For avoidance of doubts, it is clarified that; if the licensed Content is accessed multiple times from the same device or multiple devices associated with the same user account, the Licensor and the Licensee shall treat the same as a single (1) unique Access and licence fees shall be payable only once in respect of such Access.</p>
                    <p className="fade-txt">The Licensee shall pay the licence fees for each audio show as conducted by the licensor after providing the Licensor with details of the number of unique Access during such period in the manner detailed out in Schedule II. </p>
                    <p className="fade-txt">The Licensor shall have to raise a tax invoice on the Licensee to enable the Licensee to pay the licence fee.</p>
                    <p className="fade-txt">The Licensor acknowledges that the Licensee may deduct appropriate income taxes at source as per applicable laws.</p>
                    <p className="fade-txt">Any and all indirect taxes including goods and service taxes shall be borne by the Licensor and the same shall be accounted for in the tax invoice raised by the Licensor on the Licensee.</p>
                    <p className="title-txt">3. Intellectual Property and Confidentiality</p>
                    <p className="fade-txt">3.1. The Licensee shall use its reasonable effort to protect and maintain the confidentiality of any and all data and information from the Licensor marked as or known by the Licensee to be confidential (collectively, the “Confidential Information”). Upon termination of this Agreement, the Licensee shall return any Confidential Information to the Licensor or destroy it itself, delete any Confidential Information from any electronic devices and cease to use such Confidential Information as required by the Licensor. The Licensee shall not disclose, grant or
                        transfer any Confidential Information to any third party without the Licensor’s written consent.</p>
                    <p className="fade-txt">3.2. Both parties agree that this Clause 3 shall survive the invalidity, amendment, cancellation, termination or unenforceability of this Agreement.</p>
                    <p className="title-txt">4. Representations and Warranties</p>
                    <p className="fade-txt">4.1. The Licensor represents and warrants as follows:</p>
                    <p className="fade-txt">4.1.1. It has the exclusive ownership of the Content including all underlying intellectual property therein and is not bound by any obligations under law or under contract which prevent it from entering into this Agreement or licensing the Content to the Licensee having regard to the scope of the licence.</p>
                    <p className="fade-txt">4.1.2. The Content does not contain any material that is in any way illegal, offensive, against public morality or order, or may hurt the sentiments of any group of people, or is disparaging or defamatory of any person or groups of persons.</p>
                    <p className="fade-txt">4.1.3. The execution and performance of this Agreement by it are within its power and it has taken all necessary actions and obtained all necessary consents or approvals by third parties or government agencies to enter into this Agreement and perform this Agreement. The execution and performance of this Agreement by it do not violate the laws and contracts binding upon or influencing it; and</p>
                    <p className="fade-txt">4.1.4. Upon execution, this Agreement will constitute a legal, valid and binding obligation of the Licensor enforceable against the Licensor in accordance with its terms.</p>
                    <p className="fade-txt">4.2. The Licensee represents and warrants as follows:</p>
                    <p className="fade-txt">4.2.1. It is a company duly incorporated in India and validly existing under the laws of India;</p>
                    <p className="fade-txt">4.2.2. The execution and performance of this Agreement by it are within its corporate power and business scope. It has taken all necessary actions and obtained all necessary consents or approvals by third parties or government agencies. The execution and performance of this Agreement by it do not violate the laws and contracts binding upon or influencing it; and</p>
                    <p className="fade-txt">4.2.3. Upon execution, this Agreement will constitute a legal, valid and binding obligation of the Licensee enforceable against the Licensee in accordance with its terms.</p>
                    <p className="title-txt">5. Licensor’s Ownership and Protection of Licensor’s Rights</p>
                    <p className="fade-txt">5.1. The Licensee agrees, during the term of this Agreement and thereafter, it shall not challenge the ownership and other rights of the Licensor in the Content.</p>
                    <p className="fade-txt">5.2. The Licensee agrees to provide necessary assistance to the Licensor to protect the Licensor’s rights with respect to the Content and inform the Licensee of any infringement by any third party in writing if it becomes aware of or has knowledge of such infringement.</p>
                    <p className="fade-txt">5.3. The Licensee agrees that it shall use the Copyright only in accordance with this Agreement and shall not use the Copyright in any manner that could be deemed by the Licensor to be fraudulent, misleading or otherwise harmful to the Copyright or the reputation of the Licensor.</p>
                    <p className="title-txt">6. Indemnity</p>
                    <p className="fade-txt">6.1. The Licensor hereby indemnifies the Licensee against any and all third-party claims without limitation arising out of breach of any of the representations and warranties of the Licensor pursuant to clause 4.</p>
                    <p className="fade-txt">6.2. The Licensee shall have the right to withhold any sums due to the Licensee including the licence fees to meet any liabilities including legal costs incurred or likely to be incurred by the Licensee arising out of a claim by any third party resulting from a breach of the representations and warranties of the Licensor pursuant to clause 4.</p>
                    <p className="title-txt">7. Effective Date and Term</p>
                    <p className="fade-txt">7.1. This Agreement shall be executed and become effective as of the date first set forth above. The term of this Agreement is one (1) year unless terminated earlier pursuant to this Agreement.</p>
                    <p className="fade-txt">7.2. This Agreement may be extended automatically for one year upon its expiration (including the expiration of any extended term) unless the Licensor prior to the expiration hereof gives written notice not to extend this Agreement.</p>
                    <p className="title-txt">8. Termination</p>
                    <p className="fade-txt">8.1. This Agreement shall terminate on the date of expiration or the date of the expiration of extended terms when the Licensor notifies the Licensee in writing not to extend this Agreement.</p>
                    <p className="fade-txt">8.2. Without prejudice to any legal or other rights or remedies of the party who asks for termination of this Agreement, any party has the right to terminate this Agreement immediately with written notice to the other party in the event the other party materially breaches this
                        Agreement including but not limited to Clause 3, 4 or 5 of this Agreement and fails to cure such breach within 30 days from the date the breaching party receives the written notice of its breach from the non-breaching party.</p>
                    <p className="fade-txt">8.3. During the term of this Agreement, the Licensor as well as the Licensee may terminate this Agreement at any time by providing thirty (30) days’ written notice to the other party.</p>
                    <p className="fade-txt">8.4. Clauses 1.1.2, 3, 5, 6 and 11 shall survive the termination or expiration of this Agreement.</p>
                    <p className="title-txt">9. Effect of Termination or Expiration</p>
                    <p className="fade-txt">Upon and after the expiration or termination of this Agreement, all rights granted to the Licensee hereunder shall forthwith revert to the Licensor, which shall be free to licence the right to use the Content to others and the Licensee cease any further direct or indirect use of the Content.</p>
                    <p className="title-txt">10. Force Majeure</p>
                    <p className="fade-txt">10.1. Force Majeure, which includes but not limited to acts of governments, acts of nature, fires, explosions, typhoons, floods, earthquakes, tides, lightning or war, means any unforeseen event that is beyond the party’s reasonable control
                        and cannot be prevented with reasonable care of the affected party. However, any insufficiency of creditworthiness, capital or financing shall not be regarded as an event beyond the party’s reasonable control. The party affected by Force Majeure and seeking exemption from performing the obligations under this Agreement shall inform the other party of such exemption and any action taken by it in performing this Agreement.</p>
                    <p className="fade-txt">10.2. In the event that the affected party is delayed in or prevented from performing its obligations under this Agreement by Force Majeure, and only to the extent of such delay and prevention, the affected party shall not be liable for obligations under this Agreement. The affected party shall take appropriate measures to minimize or remove the effects of Force Majeure and attempt to resume the
                        performance of the obligations that were delayed or prevented by the event of Force Majeure. Once the event of Force Majeure is removed, both parties agree to resume the performance of this Agreement using their best efforts.</p>
                    <p className="title-txt">11. Settlement of Disputes</p>
                    <p className="fade-txt">Any dispute arising in connection with the interpretation and performance of the provisions of this Agreement shall be resolved by the parties in good faith through negotiations. In case no resolution can be reached by the Parties within thirty (30) days after either party makes a request for a dispute resolution through negotiations, either party may refer such dispute to adjudication through
                        arbitration under the applicable laws. The dispute shall be referred to a sole arbitrator appointed in accordance with applicable laws.</p>
                    <p className="title-txt">12. Notices</p>
                    <p className="fade-txt">Notices or other communications required to be given by any party pursuant to this Agreement shall be emailed to Money Mela at admin@moneymelagames.com and to the Licensor by the email as provided to the Money Mela</p>
                    <p className="title-txt">13. Assignment and Sublicense</p>
                    <p className="fade-txt">13.1. The rights and obligations licensed by the Licensor to the Licensee pursuant to this Agreement shall not be assigned, pledged or sublicensed without the prior written consent of the Licensor.</p>
                    <p className="fade-txt">13.2. The Licensor hereby agrees that it shall not transfer the rights and obligations under this Agreement to any third party without the prior written consent of the Licensee.</p>
                    <p className="title-txt">14. Applicable Law</p>
                    <p className="fade-txt">The validity, performance and interpretation of this Agreement shall be governed by the laws of India.</p>
                    <p className="title-txt">15. Amendment or Supplement</p>
                    <p className="fade-txt">The parties may amend or supplement this Agreement by written agreement. The amendments or supplements to this Agreement duly executed by both parties shall form an integral part of this Agreement and shall have the same legal effect as this Agreement.</p>
                    <p className="title-txt">16. Severability</p>
                    <p className="fade-txt">If any provision of this Agreement is judged to be invalid or unenforceable because it is inconsistent with applicable laws, such invalidity or unenforceability shall be only with respect to such laws, and the validity, legality and enforceability of
                        the other provisions hereof shall not be affected.</p>
                    <p className="title-txt">17. Appendices and Schedules</p>
                    <p className="fade-txt">The Appendices and Schedules to in this Agreement shall form an integral part of this Agreement and shall have the same legal effect as this Agreement.</p>
                    <p className="title-txt">Schedule I</p>
                    <p className="fade-txt">Description of Content</p>
                    <p className="fade-txt">Content as provided on Money Mela audio shows from time to time.</p>
                    <p className="title-txt">Schedule II</p>
                    <p className="fade-txt">Payment Mechanism</p>
                    <p className="fade-txt">The Licensor will be shown the number of unique access received by the licensor for an audio show as well as the commensurate license fee payable to the licensor.
                        The same will be credited to the Linked Wallet Details of Licensor onMoney Mela platform</p>
                    <p className="fade-txt">Frequency of Payments… per audio show</p>
                    <p className="fade-txt">DISCLAIMER: Unless otherwise explicitly specified, Money Mela is not affiliated in any way to and claims no association, in any capacity whatsoever, with any sports governing bodies and leagues, including, but not limited to the Board of
                        Control for Cricket in India (BCCI) or the Indian Premier League (IPL).</p>
                    <p className="title-txt">Anti-Money Laundering Policy</p>
                    <p className="fade-txt">This Anti-Money Laundering Policy (“AML Policy”) is testimony to the Company’s commitments against money laundering, financing of terrorism, and related illegal activities. It describes the Company’s policies and procedures instituted in an attempt to ensure that the Services offered by the Company are not being used by the Users to facilitate commission of any criminal offences or violating any Applicable Laws, including but not limited the Prevention of Money Laundering Act 2002 and the Unlawful Activities Prevention Act 1967. Although under the said laws, the Company does not qualify as an entity obligated to follow the procedures prescribed herein, the Company has prepared this AML Policy to ensure transparency in the activities conducted from the Account and to prevent money
                        laundering and other illegal activities over the Platform in consonance with the spirit of law.</p>
                    <p className="fade-txt">This AML Policy applies uniformly to any User desirous of availing the Services or otherwise using or benefitting from the use of the Platform and should be read as a part of the Terms of Use. It is imperative that You read this AML Policy before using the Platform or submitting any personal information. By using the Platform, You are expressly consenting to be bound by the Terms of Use and consequently this AML Policy.</p>
                    <p className="title-txt">Definitions</p>
                    <p className="fade-txt">1.1. “Beneficial Owner” means: In case of companies, the natural person who has ownership of over 25% (twenty five per cent) of the shares; is entitled to over 25% (twenty five percent) of the profits; or has the power, directly or indirectly, to appoint or elect more than half of the board of directors of such company, as the case maybe. In case of partnership firms/limited liability partnerships, the natural person who has ownership of over 15% (fifteen per cent) of the capital; or is
                        entitled to over 15% (fifteen per cent) of the profits of such firm, as the case maybe;</p>
                    <p className="fade-txt">1.2. “Identification Document(s)” refers to: (i) Permanent Account Number (PAN) card; (ii) Passport; (iii) Driving License; (iv) Government issued identity cards; or (v) such other document as may be notified by the Company from time to time;</p>
                    <p className="fade-txt">“Regulated Entity” shall mean banks, financial institutions or intermediaries who are mandated by law to maintain records under the provisions of the Prevention of Money-laundering (Maintenance of Records of the Nature and Value of Transactions, the Procedure and Manner of Maintaining and Time for Furnishing Information and Verification and Maintenance of Records of the Identity of the Clients of the Banking Companies, Financial Institutions and Intermediaries) Rules, 2005 (“Verification Rules”).</p>
                    <p className="fade-txt">1.3. “Suspicious Transactions” refers to the following activities, whether attempted or executed: </p>
                    <p className="fade-txt">(i) Terrorist financing: transactions which to a Person acting in good faith appear to have been done in order to collect funds, in full or in part, by any terrorist or related organization, or in order to carry out any of the activities relating to terrorism, or terrorist acts;</p>
                    <p className="fade-txt">(ii) Unusually Complex: transactions which to a Person acting in good faith appear to have been structured in a manner of unusual or unjustified complexity;</p>
                    <p className="fade-txt">(iii) Mala-fide Purpose:  transactions which to a Person acting in good faith appear to have not been transacted for bona-fide purpose or do not have a sound economic rationale.</p>
                    <p className="fade-txt">(iv) Money Laundering: transactions which to a Person acting in good faith appear to involve proceeds of any offence listed in the Schedule to the Prevention of Money Laundering Act, 2002. </p>
                    <p className="fade-txt">1.4. The capitalized terms used herein, but not defined, shall have the meaning given to our terms of use available at (“Terms of Use”).</p>
                    <p className="fade-txt">2. AML Policy Is Part Of Our Terms – This AML Policy is a part of and incorporated within, and is to be read along with the Terms of Use (the “Terms of Use”).</p>
                    <p className="fade-txt">3. Policy Changes – The Company may change and update this AML Policy from time to time. Such changes may be made without prior notice, but any changes will only apply to activities and information going forward, and not on a retroactive basis. You are encouraged to review this AML Policy whenever you access the Platform. </p>
                    <p className="fade-txt">4. Your Obligations</p>
                    <p className="fade-txt">4.1. You acknowledge that it is Your duty to ensure compliance with the terms and conditions described in this AML Policy and accord Your consent to not using the Services and the Platform in any manner which results in committing/attempting to commit any criminal offences.</p>
                    <p className="fade-txt">4.2. You must ensure that any personal information and/or Identification Documents submitted by You belong to You.</p>
                    <p className="fade-txt">4.3. You must update any information provided by You basis your Identification Documents within 30 (thirty) days of any change or modification thereof.</p>
                    <p className="fade-txt">4.4. In case You are acting on behalf of a juridical person, You must identify the Beneficial Owner and also assist in verification of the identity of such Beneficial Owner and any individual who purports to act on behalf of such juridical person.</p>
                    <p className="fade-txt">5. Purpose of this Policy – In order to mitigate its risks relating to money laundering and other illegal activities, the Company intends to put in place this policy which has the following elements:</p>
                    <p className="fade-txt">(i) Customer Acceptance and Verification Terms;</p>
                    <p className="fade-txt">(ii) Risk Management Procedure; and</p>
                    <p className="fade-txt">(iii) Transaction Monitoring Terms</p>
                    <p className="fade-txt">6. Customer Acceptance and Verification Terms</p>
                    <p className="fade-txt">6.1. The Money Mela Platform may only be used by Persons who fulfill our eligibility criteria as laid down in our Terms of Use. Users may further partake any Services offered by this Platform only after registering themselves on the Platform in accordance with the procedure stated in our Terms of Use. </p>
                    <p className="fade-txt">6.2. Money may be deposited or withdrawn from the concerned Money Mela Account by a User only by means of an account maintained with a Regulated Entity. It is clarified that only those Users whose accounts with the Regulated Entity have been verified by the Regulated Entities in accordance with the Verifications Rules may deposit or withdraw money from theirMoney Mela Account.</p>
                    <p className="fade-txt">6.3. Users are further required to undergo a KYC verification process when they withdraw winnings for the first time from their Account as provided in the Terms of Use. For the purposes of such KYC verification of any User’s identity, the Company will rely on appropriate third-party service providers to authenticate the Identification Documents and other incidental details provided by the User. Users must ensure that they have adhered to the KYC requirements applicable to them with such third-party service providers (including payment partners) on the Platform.</p>
                    <p className="fade-txt">6.4. Notwithstanding the foregoing, Money Mela reserves the right to seek further information from the Users, including Identification Documents.</p>
                    <p className="fade-txt">6.5. The Company may, in its sole discretion, refuse to open any new Account, terminate existing Account or refuse to process any transactions on the Platforms if it is unable to ensure Your compliance with this AML Policy, either due to non-cooperation by the User or due to the details provided by the User being found unreliable or unverifiable to the Company’s satisfaction.</p>
                    <p className="fade-txt">7. Risk Management Procedure </p>
                    <p className="fade-txt">7.1. The Company may categorize its Users including You into low, medium or high-risk categories, after undertaking an appropriate risk assessment of each User based on the following factors (including without limitation):</p>
                    <p className="fade-txt">(i) Sufficiency and adequacy of identification information submitted by the User;</p>
                    <p className="fade-txt">(ii) User’s social and/or financial status;</p>
                    <p className="fade-txt">(iii) Nature of User’s business/vocational activities; or</p>
                    <p className="fade-txt">(iv) Guidance notes circulated by various governmental and inter-governmental organizations.</p>
                    <p className="fade-txt">7.2. You acknowledge that in order to maintain the integrity of the risk management procedure, the Company will keep Your risk categorization and any data related thereto confidential. You will not be entitled to seek disclosure of Your risk categorization. However, the Company may disclose the User’s risk categorization data to the competent enforcement authority if it finds that a particular User has executed or is likely to execute any Suspicious Transaction.</p>
                    <p className="fade-txt">8. Transaction Monitoring Terms</p>
                    <p className="fade-txt">8.1. All transactions executed and/or attempted to be executed from the Account are regularly monitored by the Company, both manually and through use of software-based algorithms, in order to promptly identify and highlight certain kinds of transaction including without limitation, the following kinds of transactions:</p>
                    <p className="fade-txt">(i) High value transactions of such amounts as may be specified by Money Mela from time to time or as may be required under Applicable Law;</p>
                    <p className="fade-txt">(ii) Low value but repetitive transaction of such amounts as may be specified by Money Mela from time to time or as may be required under Applicable Law; and</p>
                    <p className="fade-txt">(iii) Suspicious Transactions.</p>
                    <p className="fade-txt">8.2. The Company may, from time to time, undertake necessary investigation in order to identify and examine transactions inconsistent with any User’s risk profile (determined in accordance with Clause 7 (Risk Management Procedure) above), sophistication, and expected usage pattern. </p>
                    <p className="fade-txt">8.3. The extent of monitoring shall depend on various factors including upon each User’s risk profile.</p>
                    <p className="fade-txt">8.4. The Company may, from time to time, undertake necessary investigation in order to identify and examine transactions inconsistent with any User’s risk profile (determined in accordance with Clause 7 (Risk Management Procedure) above), sophistication, and expected usage pattern. </p>
                    <p className="fade-txt">9. Maintenance of Records – The Company shall maintain and preserve the following: </p>
                    <p className="fade-txt">(i) Records of all transactions executed on the Platform, for a period of at least 3 (three) years from the date of each transaction.</p>
                    <p className="fade-txt">(ii) Records of all transactions identified under Clause 8 (Transaction Monitoring Terms) above for a period of at least 3 (three) years, including but not limited to the information about the nature, value and parties to such transactions, and their date of remittance.</p>
                    <p className="fade-txt">(iii) Identification records of Users during the subsistence of and for a period of at least 3 (three) years from the date of termination of such Account.</p>
                    <p className="fade-txt">(iv) Records of any communication or interaction between with Money Mela (and its employees, agents, staff or affiliates) with any third party in official capacity or having/intending to have business or commercial relationships withMoney Mela directly or indirectly , in any form whether oral or written, for all purposes as deemed fit by Money Mela.</p>
                    <p className="fade-txt">10. Compliance, Disclosure, and Notices</p>
                    <p className="fade-txt">10.1. The Company may share, from time to time, information regarding transactions identified under Clause 8 (Transaction Monitoring Terms), identification information of such Users, or any other information mandated under the Applicable Law, with the appropriate enforcement authorities.</p>
                    <p className="fade-txt">10.2. In order to improve the integrity and transparency of transactions on the Platform, You are encouraged to report any information You are privy to or become privy to in the future regarding any Suspicious Transactions or transactions You have find or have reason to believe are dubious in nature, to our Grievance Officer by writing to them
                     at&nbsp;<a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a>
                     &nbsp;and 5, 2nd Floor, Plot-8, Kala Bhavan, Padmakar L Khande Marg, Opera House, Girgaon, Mumbai, Maharashtra, India - 400004</p>
                    <p className="fade-txt">10.3. In order to ensure compliance with this AML Policy and/or the Applicable Law, the Company may be required to send You notices from time to time. All such notices will be sent to such address as provided by You under Clause 6 (Customer Acceptance and Verification Terms) of this AML Policy. Where You are required to share any information according to the procedures contained in this AML Policy, such communication may be made by You electronically 
                    by sending an email to&nbsp;<a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a></p>
                    <p className="fade-txt">10.4. You may also contact us at the following address: 5, 2nd Floor, Plot-8, Kala Bhavan, Padmakar L Khande Marg, Opera House, Girgaon, Mumbai, Maharashtra, India - 400004</p>
                    <p className="title-txt">Annexure III</p>
                    <p className="title-txt">COMMUNITY GUIDELINES</p>
                    <p className="fade-txt">We at Money Mela, as a platform, constantly strive to ensure that we are a safe and authentic medium to explore various skills, learning based digital games and range of content in the form of audio, video, text and/or image media etc. We are an ethics driven community and we are committed to create a safe and open environment for everyone.</p>
                    <p className="fade-txt">The guidelines set out below provide a general guidance and overview of what is allowed and what is not allowed on our platform (Community Guidelines), and applies to anything hosted, commented, communicated on our platform (hereinafter, referred to as content). We have created these Community Guidelines in order to ensure that you help us to grow and protect the values that form the foundation of our community atMoney Mela. By using theMoney Mela app, you agree to these Community Guidelines and our ‘Terms of Use’.
                        Our Community Guidelines reflect our principles and a common code of conduct for our platform. These Community Guidelines apply to all users with an account on the Money Mela app or who are hosted on the Money Mela app and to all content shared on Money Mela app. </p>
                    <p className="fade-txt">We ensure that any violation of these Community Guidelines, either reported to us, or noted by us, shall be taken very seriously, reviewed by an internal team at Money Mela and appropriate actions shall be taken and may result into deleting such content, disabling/deleting of accounts, and other restrictions as deemed appropriate, or may even be reported to legal authorities if required. We also recognize that some content that would normally be removed per our Community Guidelines may be valuable to the public and we
                        do recognize certain exceptions under specific circumstances, as described in the sections below.  We follow a transparent and fair process to review content on the Money Mela App to ensure that at no point of time there is any violation of Community Guidelines.  Any action or decision taken by Money Mela for violation of the Community Guidelines shall be at the sole discretion of Money Mela.</p>
                    <p className="fade-txt">At the outset, please note that any content including any communication / interaction of the following nature is prohibited and may warrant action from Money Mela.</p>
                    {/* Box */}
                    <p className="fade-txt">Details of each of the aforementioned items have been explained and set out below.  Please refer to the details set out in each such paragraph relating to specific acts and read the same carefully in order to understand what each such prohibition entails.</p>
                    <p className="fade-txt">Please note that we have tried to draft our Community Guidelines as detailed as possible, however this is not an exhaustive list of policies and every content, if reported, shall be analysed based on the parameters mentioned in these guidelines that may be indirectly or directly violating these guidelines. User and host discretion are warranted to ensure that apart from the examples listed below, no content shall be posted that may violate these guidelines.</p>
                    <p className="fade-txt">We update our Community Guidelines from time to time to ensure that we act as a safe platform.</p>
                    <p className="fade-txt">We urge you that if you find content that violates this Community Guidelines, please report it.</p>
                    <p className="title-txt">I. NUDITY AND SEXUAL CONTENT POLICY</p>
                    <p className="fade-txt">Sexually explicit or gratifying content (including pornography) is prohibited on the Money Mela app, including any animated content of such nature. Such content is illegal in certain jurisdictions and may warrant sharing of non-consensual images or may be hurtful to cultural sentiments.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Genitals, breasts, female nipples, or buttocks;</li>
                        <li className="fade-txt">Pornography such as sexual acts, genitals, or fetishes including paedophilic content;</li>
                        <li className="fade-txt">Masturbation or fondling of genitals, breasts, or buttocks;</li>
                        <li className="fade-txt">Using or displaying sex toys;</li>
                        <li className="fade-txt">Wardrobe accidents or nude photos;</li>
                        <li className="fade-txt">Violent, graphic, or humiliating sexual fetish content;</li>
                        <li className="fade-txt">Nudity or partial nudity;</li>
                        <li className="fade-txt">Explicit or implied depiction of sex acts; sexual arousal;</li>
                        <li className="fade-txt">Animated sex acts, pornography, or fetish content;</li>
                        <li className="fade-txt">Commission or incitement of Non-consensual sex acts or unwanted sexualization;</li>
                        <li className="fade-txt">Bestiality or promotion of bestiality;</li>
                        <li className="fade-txt">Incest or promotion of incest;</li>
                        <li className="fade-txt">Any sexual content involving minors;</li>
                        <li className="fade-txt">Commission, promotion, or glorification of sexual solicitation or sexual objectification;</li>
                        <li className="fade-txt">Sexual activities such as penetration, non-penetrative sex, or oral sex;</li>
                        <li className="fade-txt">Clips extracted from non-pornographic films, shows, or other content in order to isolate sexual content;</li>
                        <li className="fade-txt">Groping, public masturbation, voyeurism, predatory exhibitionism or any other content that depicts someone in a sexualized manner without their consent;</li>
                        <li className="fade-txt">Provocative dancing that is focused on the dancer’s genitals, buttocks, nipples, or breasts;</li>
                        <li className="fade-txt">Content that sexualizes rape in any form, or content that aggregates clips of dramatized rape scenes;</li>
                        <li className="fade-txt">Content using otherwise everyday objects or scenarios, such as injections or eating, for the purpose of sexual gratification;</li>
                        <li className="fade-txt">Video game content which has been developed or modified for sexual gratification, or focuses on themes of unwanted sexualization.</li>
                        <li className="fade-txt">Exceptions: Restrictions on the display of sexual activity may be relaxed only by Money Mela specifically for content posted for educational purposes.</li>
                        <li className="title-txt">II. MINOR SAFETY</li>
                        <li className="fade-txt">Users and hosts on the Money Mela app are required to meet minimum age requirements for use of the Money Mela app (as stipulated in our Terms of Use).
                            We have a zero tolerance for predatory behaviour towards minors. We do not allow content that depicts or disseminates child abuse, child nudity, or sexual exploitation of children.</li>
                    </ul>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">The private parts of minors;</li>
                        <li className="fade-txt">Sexual exploitation of minors;</li>
                        <li className="fade-txt">Sexual activities such as penetration, non-penetrative sex, or oral sex involving minors;</li>
                        <li className="fade-txt">Sexual arousal involving minors;</li>
                        <li className="fade-txt">Sexual fetish involving minors;</li>
                        <li className="fade-txt">Minors consuming, possessing, or suspected of consuming alcoholic beverages, drugs, or tobacco;</li>
                        <li className="fade-txt">Physical or psychological abuse involving minors i.e., deliberately inflicting injury on a minor’s body or
                            berating a child with threats of either physical or sexual violence or via bully tactics;</li>
                        <li className="fade-txt">Engagement of a minor in a sexually explicit conversation;</li>
                        <li className="fade-txt">Incentivization or blackmailing a child to transmit sexually explicit material;</li>
                        <li className="fade-txt">Encouragement, instruction, or justification of grooming behaviour wherein an adult builds an emotional relationship with a minor to
                            gain their trust for the purposes of sexual abuse, sexual exploitation, or sexual trafficking;</li>
                        <li className="fade-txt">Erotic dances involving minors; </li>
                        <li className="fade-txt">Content that contains sexual or erotic language involving minors;</li>
                        <li className="fade-txt">Vulgar language not appropriate for younger audiences or use of sexually explicit language or excessive profanity.</li>
                    </ul>
                    <p className="title-txt">III. INTELLECTUAL PROPERTY</p>
                    <p className="fade-txt">We as a platform encourage everyone to create and share original content that does not infringe any intellectual property rights of anyone else. </p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Content that violates or infringes someone else’s copyrights, trademarks, or other intellectual property rights;</li>
                        <li className="fade-txt">Plagiarism of other content;</li>
                        <li className="fade-txt">Plagiarism of other user profiles by copying profile elements of other user.</li>
                    </ul>
                    <p className="title-txt">IV. HARMFUL OR DANGEROUS CONTENT POLICY</p>
                    <p className="fade-txt">We do not allow content that encourages dangerous or illegal activities that risk serious physical harm or death.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Challenges that pose an imminent risk of physical injury or emotional abuse;</li>
                        <li className="fade-txt">Pranks that lead victims to fear imminent serious physical danger, or that create serious emotional distress;</li>
                        <li className="fade-txt">Instructing or showing viewers how to perform activities meant to kill or maim others;</li>
                        <li className="fade-txt">Abuse of or giving instructions on how to create hard drugs such as cocaine or opioids. Hard drugs are defined as drugs that can (mostly) lead to physical addiction;</li>
                        <li className="fade-txt">Eating disorders, praising, glorifying, or encouraging viewers to imitate anorexia or other eating disorders such as abnormal or disturbed eating habits which negatively affect a person’s health (including eating non-food items);</li>
                        <li className="fade-txt">Promoting or glorifying violent tragedies;</li>
                        <li className="fade-txt">Showing viewers how to steal money or tangible goods;</li>
                        <li className="fade-txt">Demonstrating how to use computers or information technology with the intent to steal credentials, compromise personal data or cause serious harm to others such as (but not limited to) hacking into social media accounts;</li>
                        <li className="fade-txt">Content which claims that harmful substances or treatments can have health benefits.</li>
                    </ul>
                    <p className="fade-txt">Exception – We might allow videos that depict dangerous acts if they’re meant to be educational, documentary, scientific, or artistic, which shall be the sole discretion of Money Mela.</p>
                    <p className="title-txt">V. VIOLENT AND GRAPHIC CONTENT</p>
                    <p className="fade-txt">We do not allow content that is excessively gruesome or shocking, especially that promotes or glorifies violence or suffering or content intended to shock or disgust viewers or inciting others to commit violent acts.
                        If you believe anyone is in imminent danger, you should reach out to your legal authorities to report the situation immediately.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Inciting others to commit violent acts against individuals or a defined group of people;</li>
                        <li className="fade-txt">Fights involving minors;</li>
                        <li className="fade-txt">Footage, audio, or imagery involving road accidents, natural disasters, war aftermath, terrorist attack aftermath, street fights, physical attacks, sexual assaults, immolation, torture, corpses, protests or riots, robberies, medical procedures, or other such scenarios with the intent to shock or disgust viewers;</li>
                        <li className="fade-txt">Physical violence or accidental deaths of people;</li>
                        <li className="fade-txt">Dismembered, mutilated, charred, or burned human or animal remains;</li>
                        <li className="fade-txt">Gory content  in which an open wound or injury is the core focus;</li>
                        <li className="fade-txt">Footage or imagery showing bodily fluids, such as blood or vomit, with the intent to shock or disgust viewers.</li>
                        <li className="fade-txt">Content where there is infliction of unnecessary suffering or harm deliberately causing an animal distress or animal cruelty;</li>
                        <li className="fade-txt">Content where animals are encouraged or coerced to fight by humans</li>
                        <li className="fade-txt">Dramatized or fictional footage of anything listed above where the viewer is not provided with enough context to determine that the footage is dramatized or fictional;</li>
                        <li className="fade-txt">Footage of corpses with massive injuries, such as severed limbs;</li>
                        <li className="fade-txt">Encouraging others to go to a particular place to commit violence, to perform violence at a particular time, or to target individuals or groups with violence;</li>
                        <li className="fade-txt">Footage of violent crimes such as robberies or rape being committed  that provide no education or explanation to viewers.;</li>
                        <li className="fade-txt">Animal hunting.</li>
                    </ul>
                    <p className="fade-txt">Exceptions: We might allow content that depict the above mentioned acts if they are a part of staged or professional fighting, traditional martial arts,
                        or fighting in a fictional setting,  which shall be the sole discretion of Money Mela.</p>
                    <p className="title-txt">VI. DANGEROUS INDIVIDUALS AND ORGANIZATIONS</p>
                    <p className="fade-txt">We do not promote any content intended to praise, promote, or aid violent organizations such as criminal organizations or terrorist organizations or individuals belonging to such organizations are not allowed to use Money Mela app for any purpose.  We define dangerous individuals and organizations
                        as those that commit crimes or cause other types of severe harm. The types of groups and crimes include, but are not limited to: hate groups, violent extremist organizations, homicide, human trafficking, organ trafficking, arms trafficking, drug trafficking, kidnapping, extortion, blackmailing, money laundering, fraud, cybercrime. We do not allow dangerous individuals or organizations to use our platform to promote terrorism, crime, or other types of behaviour that could cause harm. </p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Content produced by violent criminal or terrorist organizations or dangerous individuals;</li>
                        <li className="fade-txt">Content praising or memorializing prominent terrorist or criminal figures in order to encourage others to carry out acts of violence;</li>
                        <li className="fade-txt">Content praising or justifying violent acts carried out by violent criminal or terrorist organizations or dangerous individuals;</li>
                        <li className="fade-txt">Content aimed at recruiting new members to violent criminal or terrorist organizations;</li>
                        <li className="fade-txt">Content depicting hostages or posted with the intent to solicit, threaten, or intimidate on behalf of a violent criminal or terrorist organization or dangerous individuals;</li>
                        <li className="fade-txt">Content that depicts the insignia, logos, or symbols, uniforms, gestures, portraits, or other objects meant to represent violent criminal or terrorist organizations;</li>
                        <li className="fade-txt">Content that praises, glorifies, or supports dangerous individuals and/or organizations;</li>
                        <li className="fade-txt">Raw and unmodified reuploads of content created by terrorist or criminal organizations;</li>
                        <li className="fade-txt">Celebrating terrorist leaders or their crimes in songs or memorials;</li>
                        <li className="fade-txt">Celebrating terrorist or criminal organizations or dangerous individuals in songs or memorials;</li>
                        <li className="fade-txt">Content directing users to sites that espouse terrorist ideology, are used to disseminate prohibited content, or are used for recruitment;</li>
                        <li className="fade-txt">Video game content which has been developed or modified to glorify a violent event, its perpetrators, or support violent criminal or terrorist organizations or dangerous individuals;</li>
                    </ul>
                    <p className="fade-txt">Exceptions: We might allow content that depict the above mentioned acts if such content is posted for an educational, documentary, scientific purpose, please ensure to provide
                        enough information in the video or audio itself so viewers understand the context, which shall be the sole discretion of Money Mela. Graphic or controversial footage with sufficient context may be subject to warning screens.</p>
                    <p className="title-txt">VII. SUICIDE, SELF-HARM, AND DANGEROUS ACTS</p>
                    <p className="fade-txt">We do not promote participation in activities that could lead to harm. We also do not permit users to encourage others to take
                        part in dangerous activities. We do not allow content that promotes self-harm or suicide. However, users should not be afraid to speak openly about the topics of mental health or self-harm.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Promoting or glorifying suicide, suicidal tendencies or content that might encourage participation in similar actions;</li>
                        <li className="fade-txt">Providing instructions on how to self-harm or die by suicide;</li>
                        <li className="fade-txt">Graphic images of self harm, self inflicted wounds;</li>
                        <li className="fade-txt">Attempts of suicide or content featuring a person committing or intending to commit acts that are likely to lead to self-inflicted death;</li>
                        <li className="fade-txt">Suicide challenges;</li>
                        <li className="fade-txt">Inappropriate use of dangerous tools;</li>
                    </ul>
                    <p className="fade-txt">Exceptions: Content that provides support, resources, or coping mechanisms for those going through suicidal ideation</p>
                    <p className="fade-txt">We as a community encourage users who are struggling with thoughts of self-harm or suicide, or contemplating suicide, to
                        immediately contact legal authorities or a suicide prevention hotline. Being a responsible company, Money Mela may also report risky behaviour to relevant authorities, helplines & third party experts and block your access.</p>
                    <p className="title-txt">VIII. HATE SPEECH, SLURS AND HATEFUL IDEOLOGIES</p>
                    <p className="fade-txt">We do not tolerate content or any communication between users that attacks or incites violence against an individual or a group of individuals on the basis of certain attributes.
                        We do not allow content any communication between users that includes hate speech, content promoting violence or hatred against individuals or groups based on any of the following attributes: age, caste, disability, ethnicity, gender identity and expression, nationality, race, immigration status, religion, sex/gender, sexual orientation, victims of a major violent event and their kin, veteran status, immigration status. </p>
                    <p className="fade-txt">Hate speech is content that directly or indirectly attacks, threatens, incite violence against, or dehumanizes an individual or a group of individuals on the basis of the attributes mentioned above.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Encourage violence against individuals or groups based on any of the attributes noted above;</li>
                        <li className="fade-txt">Incite hatred against individuals or groups based on any of the attributes noted above;</li>
                        <li className="fade-txt">Actions/words that invokes non-consensual slurs which constitute as derogatory terms that are intended to disparage an ethnicity, race, or any other attributes listed above;</li>
                        <li className="fade-txt">Actions/words that dehumanizes or incites violence or hatred against individuals or groups, based on the attributes listed above;</li>
                        <li className="fade-txt">Action/words that promotes any hateful ideologies by talking positively about or displaying logos, symbols, flags, slogans, uniforms, salutes, gestures, portraits,
                            illustrations, or names of individuals related to these ideologies;</li>
                        <li className="fade-txt">Music or lyrics that promote hateful ideologies;</li>
                        <li className="fade-txt">Content that threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or
                            prevents investigation of any offence or is insulting any other nation.</li>
                    </ul>
                    <p className="title-txt">IX. HARASSMENT AND BULLYING</p>
                    <p className="fade-txt">We deeply understand the psychological distress that abusive content can have on individuals, and we do not tolerate abusive content or behaviour on our platform. Users should feel safe to express themselves responsibly without fear of being shamed,
                        humiliated, bullied, or harassed. Content that threatens individuals is not allowed on the Money Mela app. We also do not allow content that targets an individual with prolonged or malicious insults based on intrinsic attributes, including their group status or physical traits. </p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Content uploaded with the intent to shame, deceive or insult a minor;;</li>
                        <li className="fade-txt">violent threats, sexual harassment, disparaging statements regarding appearance, intellect, personality traits, and hygiene;</li>
                        <li className="fade-txt">Content that threatens an individual with violence;</li>
                        <li className="fade-txt">Content that wishes death, serious disease, physical, or other harm on an individual;</li>
                        <li className="fade-txt">Content that incites violence or coordinated harassment;</li>
                        <li className="fade-txt">Content that sexually harasses a user by disparaging their sexual activities or attempting to make unwanted sexual contact;</li>
                        <li className="fade-txt">Content that praises violent tragedies and disparages their victims</li>
                        <li className="fade-txt">Content that uses the comment or react feature of Money Mela app to create abusive content targeting other users;</li>
                        <li className="fade-txt">Repeatedly showing pictures of someone and then making disparaging or hurtful statements;</li>
                        <li className="fade-txt">Accounts dedicated entirely to focusing on maliciously insulting an identifiable individual;</li>
                        <li className="fade-txt">Threatening someone’s physical safety;</li>
                        <li className="fade-txt">Posting an individual’s non public personal identifying information like a phone number, home address, or email to direct abusive attention or traffic toward them;</li>
                        <li className="fade-txt">Directing malicious abuse to identifiable individuals through in-game voice chat or messages during a stream;</li>
                        <li className="fade-txt">Stalking or attempting to blackmail users;</li>
                        <li className="fade-txt">Zooming in on prolongedly focused emphasis on the breasts, buttocks or genital area of an identifiable individual for the purposes of degrading, objectifying, or sexualizing;</li>
                        <li className="fade-txt">Video game content which has been developed or modified to promote violence or hatred against an individual with the attributes noted above.</li>
                    </ul>
                    <p className="fade-txt">Exceptions: We may allow content that includes harassment and steps to cope with harassment if the primary purpose is educational such as harassment education and awareness, documentary,
                        scientific, or artistic in nature. This is based on the sole discretion of Money Mela.</p>
                    <p className="title-txt">X. INTEGRITY AND AUTHENTICITY</p>
                    <p className="fade-txt">We do not allow content that is intended to deceive or mislead any of our users including. activities such as spamming, impersonation, and disinformation campaigns:</p>
                    <p className="fade-txt">1. Spam</p>
                    <p className="fade-txt">We don’t allow content where the main purpose is to directly or indirectly allude users to leaveMoney Mela app for another website.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Video Spam: Content that is excessively posted, repetitive, or untargeted and does one or more of the following, promises viewers they’ll
                            see something but instead directs them off site, gets clicks, views, or traffic off Money Mela app by promising viewers that they will make money fast, sends audiences to sites that spread malware, try to gather personal information, or other sites that have a negative impact and content with misleading show names which do not match the content;</li>
                        <li className="fade-txt">Any direct monetary transfer between the users outside the Money Mela app;</li>
                        <li className="fade-txt">Any direct or indirect transfers between users for the purpose of gaining any unfair or undue advantage on the Money Mela app via settlement with modes outside the Money Mela app;</li>
                        <li className="fade-txt">Any non-monetary fake transfer (including gifts) between users for the purpose of gaining any unfair or undue advantage on the Money Mela app;</li>
                        <li className="fade-txt">Using the title, thumbnails, description, or tags to trick users into believing the content is something it is not;</li>
                        <li className="fade-txt">Manipulated Media: Content that has been technically manipulated or doctored in a way that misleads users (beyond clips taken out of context) and may pose a serious risk;</li>
                        <li className="fade-txt">Content that advances false claims related to the technical eligibility requirements for current political candidates and sitting elected government officials to serve in office;</li>
                        <li className="fade-txt">Hurtful and unsolicited comments;</li>
                        <li className="fade-txt">Comments with links to counterfeit stores;</li>
                        <li className="fade-txt">Operate multiple Money Mela accounts under false or fraudulent pretences, including
                            coordinated attempts to manufacture inauthentic activity, distribute commercial spam, or otherwise coordinate a scaled violation of Money Mela policies.</li>
                    </ul>
                    <p className="fade-txt">2. Impersonation</p>
                    <p className="fade-txt">We do not allow users to impersonate other individuals or organizations in order to deceive the public. When we confirm reports of impersonation, we remove the violating accounts. </p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">As another person or organization by using someone else’s name, biographical details, or profile picture in a misleading manner;</li>
                        <li className="fade-txt">Using someone else’s real name, user name, image, brand, logo, or other personal information;</li>
                        <li className="fade-txt">Setting up a user account using the name and image of a person, and then pretending that person is posting content or comments.</li>
                    </ul>
                    <p className="fade-txt">Exception – We do allow exceptions for parody, commentary, or fan accounts, as long as the account does not mislead others with regard to its identity or purpose on the Money Mela app.  Any such exception shall be at the sole discretion of Money Mela.</p>
                    <p className="fade-txt">3. Misleading information</p>
                    <p className="fade-txt">We do not permit misinformation that could cause harm to our community or the larger public. While we encourage our users to have respectful conversations about the subjects that matter to them, we remove misinformation that could cause harm to an individual’s health or wider public safety.
                        We also remove content distributed by disinformation campaigns.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Misinformation meant to incite fear, hate, or prejudice;</li>
                        <li className="fade-txt">Misinformation that may cause harm to an individual’s health, such as misleading information about medical treatments;</li>
                        <li className="fade-txt">Hoaxes, phishing attempts, or manipulated content meant to cause harm;</li>
                        <li className="fade-txt">Content that misleads community members about elections or other civic processes.</li>
                    </ul>
                    <p className="title-txt">XI. ILLEGAL ACTIVITIES AND REGULATED GOODS</p>
                    <p className="fade-txt">We prohibit the trade, sale, promotion, and use of certain regulated goods, as well as the depiction or promotion of criminal activities. Some content may be removed if it relates to activities or goods that are illegal or regulated in the majority of the region or world, even if the activities or goods in question are legal in the jurisdiction of posting. Criminal activities include acts
                        punishable by law, including theft, assault, human exploitation, and other harmful behaviour.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Promotion of criminal activities;</li>
                        <li className="fade-txt">Content that promotes acts of physical harm, such as assaulting or kidnapping;</li>
                        <li className="fade-txt">Content that risks the safety of others;</li>
                        <li className="fade-txt">Content that promotes human exploitation or wildlife trafficking;</li>
                        <li className="fade-txt">Content that offers the purchase, sale, or trade of unlawfully acquired goods;</li>
                        <li className="fade-txt">Content that provides instructions on how to conduct criminal activities;</li>
                        <li className="fade-txt">Depiction, trade, or promotion of firearms, ammunition, firearm accessories, or explosive weapons or instructions on process to manufacture those weapons;</li>
                        <li className="fade-txt">Content that offers, sells, trades, or solicits firearms, accessories, ammunition, explosive weapons, or instructions on how to manufacture them;</li>
                        <li className="fade-txt">Use or trade of drugs or other controlled substances;</li>
                        <li className="fade-txt">Content that displays drugs, drug consumption, or encourages others to make, use, or trade drugs or other controlled substances;</li>
                        <li className="fade-txt">Content that sells, offers, trades, or solicits, provides information on how to buy drugs or other controlled substances;</li>
                        <li className="fade-txt">Content that violates any law for the time being in force</li>
                    </ul>
                    <p className="fade-txt">Exception – We may provide  exceptions to content that displays firearms or other types of weapons in the following scenarios: in a fictional setting, as part of a museum’s collection, carried by a police officer, in a military parade, or used in a safe and controlled environment such as a shooting range.  We may allow exceptions for content that provides value to the public, such as educational, scientific, artistic,
                        and newsworthy content. Any such exception shall be at the sole discretion of Money Mela.</p>
                    <p className="title-txt">XII. FRAUDS AND SCAMS</p>
                    <p className="fade-txt">We do not permit anyone to exploit our platform to harm others, which includes schemes to defraud individuals or steal assets.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Content that promotes phishing;</li>
                        <li className="fade-txt">Content that promotes any schemes;</li>
                        <li className="fade-txt">Content that promotes fixed betting, get-rich-quick schemes, or any other types of scams;</li>
                        <li className="fade-txt">Content relating or encouraging money laundering or gambling</li>
                        <li className="fade-txt">Not adhering to commitments or fulfilling agreements made by or entered into by the users, including non payment of
                            rewards to users as promised during using theMoney Mela app while live streaming content.</li>
                    </ul>
                    <p className="title-txt">XIII. INFRINGEMENT OF OTHERS’ PRIVACY</p>
                    <p className="fade-txt">Revealing or threatening to reveal personally identifiable information can cause serious emotional distress and lead to real-world harm.  If someone posts your personal information without your consent, please feel free to report a privacy breach complaint by providing your uniquely identifiable information such as image or voice, full name,
                        financial information, contact information, other personally identifiable information.</p>
                    <p className="red-txt">do not post/stream any content depicting the following :</p>
                    <ul>
                        <li className="fade-txt">Content that reveals or threatens to reveal personally identifiable information, including but not limited to residential address, private email address,
                            private phone number, bank statement, social security number, or passport number;</li>
                        <li className="fade-txt">Threats to reveal sexual imagery or non-consensual intimate imagery;</li>
                        <li className="fade-txt">Use personal information gathered on an app to have personal conversation with users on another app or any communication medium.</li>
                    </ul>
                    <p className="title-txt">XIV. THREATS TO PLATFORM SECURITY</p>
                    <p className="fade-txt">In addition to the content and behaviour outlined above, our policies prohibit activities that undermine the Money Mela service:</p>
                    <ul>
                        <li className="fade-txt">Do not hack the Money Mela app, or associated networks, or bypass its measures to restrict users’ access;</li>
                        <li className="fade-txt">Do not distribute files that contain viruses, Trojan horses, worms, logic bombs, or other materials that are malicious or harmful;</li>
                        <li className="fade-txt">Do not use automated scripts to collect information from Money Mela.</li>
                        <li className="fade-txt">Do not post any content or indulge in communications with users to provide tips and encouraging ways to hack the Money Mela app or engage in any other activities
                            that threaten or compromise the platform security of Money Mela app.</li>
                    </ul>
                    <p className="title-txt">XV. ENCOURAGING TERMS OF SERVICE VIOLATIONS</p>
                    <p className="fade-txt">If you post or stream any content that encourages other users to violate our Terms of Service, the content may be removed, your account may be penalized,
                        and in some cases your account may be terminated.</p>
                    <p className="title-txt">XVI. LINKS IN YOUR CONTENT</p>
                    <p className="fade-txt">Links that send users to websites featuring content that violates our Community Guidelines are not allowed on Money Mela. Don’t post
                        links in your content on Money Mela if they fit any of the descriptions noted below.</p>
                    <ul>
                        <li className="fade-txt">Links to pornography;</li>
                        <li className="fade-txt">Links to websites or apps that install malware;</li>
                        <li className="fade-txt">Links to websites or apps phishing for a user’s login credentials, financial information, etc.</li>
                        <li className="fade-txt">Links to websites that seek to raise funds or recruit for terrorist organizations;</li>
                        <li className="fade-txt">Links to sites containing Child Sexual Abuse Imagery (CSAI).</li>
                    </ul>
                    <p className="title-txt">ACTIONS THAT WILL BE TAKEN IF YOU POST ANY CONTENT THAT VIOLATES THE COMMUNITY GUIDELINES</p>
                    <p className="fade-txt">If you see something that you think may violate our Community Guidelines, please help us by reporting the 
                    same to our Contact Support on&nbsp;<a class="mailto" href="mailto:support@moneymelagames.com">support@moneymelagames.com</a>. We will review these reports internally and will work as quickly and as efficiently as possible to remove content that does not meet our Community Guidelines, or take actions appropriate for such content after review. Please help us by providing as much information as possible, such as links, usernames, and descriptions of the content, so we can find and review it effectively.</p>
                    <p className="fade-txt">We take genuine intellectual property infringement complaints very seriously. If you come across any content that you feel may be infringing any intellectual property, please report to us at the earliest and we shall review such complaints as quickly as possible.  While doing so, we request you to provide us as much information as possible such as the reason why you feel the content infringes any intellectual property.</p>
                    <p className="fade-txt">We may work with law enforcement whenever necessary, including when we believe that there’s risk of physical harm or threat to public safety.</p>
                    <p className="fade-txt">For more information, please read our terms and conditions (Terms of Use) available on the Money Mela App.</p>
                    <p className="fade-txt">We would like to thank you for helping us as we strive to be one of the best and compliant communities.</p>
                    <p className="fade-txt">The Money Mela Team</p>
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

export default TermsConditions;