import MyLayout from "../components/MyLayout";
import Catalog from "../components/Catalog";
import Splash from "../components/splash";
export default function Index() {
  
  return (
    <MyLayout>
      <Splash/>
      <Catalog/>
    </MyLayout>
  );
}