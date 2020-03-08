import Layout from '../components/MyLayout';
import frontalImage from "../public/aboutfront.jpg"
import Splash from "../components/splash";


const imgStyle = {
  width:1000,
}

const contStyle = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
}

export default function About() {
  return (
    <Layout>
      <div style = {contStyle}>
      <Splash/>
      <p>Chris Kaysen has been shaping surfboards in San Clemente for 35 years. With 100,000 boards and counting, you can trust Chris to shape a surfboard to fit your exact needs...</p>
      </div>
    </Layout>
  );
}