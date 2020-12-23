import Header from "./Header";
import Footer from "./Footer";

  
  const Layout = props => (
    <div className = "layoutStyle">
      <Header />
      {props.children}
      <Footer/>
      <style jsx global>{`
        .layoutStyle {
          display:flex;
          flex-direction: column;
          margin: 0px;
          height: 100vh;
          justify-content:space-between;
        }
      `}</style>
    </div>
  );
  
  export default Layout;