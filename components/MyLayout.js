import Header from "./Header";
import Footer from "./Footer";

  
  const Layout = props => (
    <div className = "layoutStyle">
      <Header />
      <div className = "padding"></div>
      {props.children}
      <Footer/>
      <style jsx>{`
        .padding {
          height:10vh;
          margin: 20px;
          width:100%;
        }
        .layoutStyle {S
          min-height:100vh;
        }
      `}</style>
    </div>
  );
  
  export default Layout;