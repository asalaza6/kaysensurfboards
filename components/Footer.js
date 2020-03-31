


function Footer(){
    return(
    <div className = "container">
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
        .container{
            bottom: 20px;
            justify-content: flex-end;
            flex-direction: column;
            display:flex;
            flex: 1;
        }
        .Copyright{
            font-family: 'BalooThambi';
            text-align: center;
        }
    `}</style>
    </div>
    );
}

export default Footer;