
import Link from 'next/link';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import LogoVimeo from 'react-ionicons/lib/LogoVimeo';
import LogoYoutube from 'react-ionicons/lib/LogoYoutube';
function Footer(){
    return(
    <div className = "container">
        <div className = "threecontainer">
            <div className = "section">
                <div className = "title">Get Social</div>
                <div className = "socials">
                    <LogoInstagram onClick={()=>{window.location = "https://www.instagram.com/kaysensurfboards"}}color="white" fontSize="35px"/>
                    <LogoTwitter color="white" fontSize="35px"/>
                    <LogoVimeo color="white" fontSize="35px"/>
                    <LogoFacebook color="white" fontSize="35px"/>
                    <LogoYoutube color="white" fontSize="35px"/>
                </div>
            </div>
            <div className = "section">
                <div className = "title">Pages</div>
                <Link href = "/"><span className = "text">Home</span></Link>
                <Link href = "/about"><span className = "text">About</span></Link>
                <Link href = "/boards"><span className = "text">Boards</span></Link>
                <Link href = "/testimonials"><span className = "text">Testimonials</span></Link>
                <Link href = "/media"><span className = "text">Media</span></Link>
                <Link href = "/contact"><span className = "text">Contact</span></Link>
            </div>
            <div className = "section">
                <div className = "title">Contact</div>
                <div className = "text">Kaysen Surfboards</div>
                <div className = "text">Street Address</div>
                <div className = "text">Irvine, CA 92612</div>
                <div className = "text">Phone: 999.999.9999</div>
                <div className = "text">Send us a message <Link href = "/contact">HERE</Link></div>
            </div>
        </div>
        <p className = "Copyright">Copyright © 2020 www.kaysensurfboards.net</p>
    <style jsx>{`
        @font-face {
            font-family: 'BalooThambi';
            src:url('/fonts/BalooThambi2-Regular.ttf');
            
            }
        @font-face {
            font-family: 'BalooThambi-SemiBold';
            src:url('/fonts/BalooThambi2-SemiBold.ttf');
            }
        }
        .threecontainer{
            
            display:flex;
            flex-direction:row;
            width:100%;
        }
        .section{
            flex:1;
            display:flex;
            flex-direction:column;
            font-family: 'BalooThambi';
            margin:10px;
        }
        .title{
            color:white;
            font-size:20pt;
            margin:0px 0px 10px 0px;
        }
        .text{
            color:white;
            font-size:12pt;
            margin:0px;
        }
        .container{
            padding:10px;
            justify-content: flex-end;
            flex-direction: column;
            display:flex;
            background-color:black;
            bottom:0px;
        }
        .Copyright{
            font-family: 'BalooThambi';
            text-align: center;
            color:white;
        }
    `}</style>
    </div>
    );
}

export default Footer;