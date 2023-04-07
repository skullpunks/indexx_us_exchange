import { Image } from "antd";

import t2e from "../../assets/how-it-works/howfortune.svg";
import Footer from "../Footer/Footer";

const HowFortuneDaily = () => {


  return (
    <>
      <div className="scan-container how-it-works flex-direction-column">
        <Image
          preview={false}
          src={t2e}
          className="rounded mx-auto d-block"
          
        ></Image>
     
      </div>

      <Footer></Footer>
    </>
  );
};

export default HowFortuneDaily;
