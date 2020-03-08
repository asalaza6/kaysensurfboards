import Link from 'next/link';

const linkStyle = {
  display: "inline-block",
  textDecoration: "none",
  fontSize: 18,
  
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
class Header extends React.Component {

  render(){
    return(
      <div style = {headerStyle}>
        <Link style = {blockStyle} href="/">
          <a style={linkStyle}>Home</a>
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
        </Link>
      </div>
    )
  }
}

export default Header;