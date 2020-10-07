import Header from "./Header";
import Footer from "./Footer";

  
  const Layout = props => (
    <div className = "layoutStyle">
      <Header />
      {props.children}
      <Footer/>
      <style jsx>{`
        .layoutStyle {
          display:flex;
          flex-direction: column;
          min-height: 98vh;
        }
      `}</style>
    </div>
  );
  
  export default Layout;