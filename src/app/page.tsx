import Footer from "./Footer";
import Header from "./Header";
import Desktop from "./layouts/Desktop";
import Mobile from "./layouts/Mobile";
import Tablet from "./layouts/Tablet";

export default function Home() {
  return (
    <div className="bg-[#212121] min-h-screen font-inter text-white">
      <Header />
      <Mobile />
      <Tablet />
      <Desktop />
      <div id="divider" className="w-full h-[2px] bg-[#717171]"></div>
      <Footer />
    </div>
  );
}
