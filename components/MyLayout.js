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
          width:100%;
        }
        .layoutStyle {
          padding: 20px;
        }
      `}</style>
    </div>
  );
  
  export default Layout;