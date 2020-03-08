import Link from 'next/link';

const linkStyle = {
  display: "inline-block",
  textDecoration: "none",
  fontSize: "3vw",
  
};
const headerStyle = {
  
  maxWidth:1000,
  margin: "auto",
  display:"flex",
  justifyContent:"space-between",
  padding:20,
}
const blockStyle = {
  
  flex:1,
  display: "inline-block",
}
function Header() {

    return(
      <div style = {headerStyle}>
      <Link  href="/">
        <a className ="link">Home</a>
      </Link>
      <Link href="/about">
        <a className ="link">About</a>
      </Link>
      <Link href="/testimonials">
        <a className ="link">Testimonials</a>
      </Link>
      <Link href="/media">
        <a className ="link">Media</a>
      </Link>
      <Link href="/contact">
        <a className ="link">Contact</a>
      </Link>
<style jsx>{`
        .link {
          text-decoration:none;
          font-size: 3vw;
        } @media (min-width: 850px){
          .link {
            font-size: 25px;
          }
        }
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
      <style jsx global>{`
        p {
          font-size: 20px;
        }
      `}</style>
    </div>
    )
}
/*<Link  href="/">
<a className ="asdf">Home</a>
</Link>
<Link href="/about">
<a style={linkStyle}>About</a>
</Link>
<Link href="/testimonials">
<a style={linkStyle}>Testimonials</a>
</Link>
<Link href="/media">
<a style={linkStyle}>Media</a>
</Link>
<Link href="/contact">
<a style={linkStyle}>Contact</a>
</Link>*/
export default Header;