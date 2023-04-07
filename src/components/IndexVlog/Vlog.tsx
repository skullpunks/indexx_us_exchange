import { Image } from "antd";
import camera from "../../assets/arts/camera.png";
import image1 from "../../assets/arts/vlog/4a.jpg";
import image2 from "../../assets/arts/vlog/1A.jpg";
import image3 from "../../assets/arts/vlog/2A.jpg";
import image4 from "../../assets/arts/vlog/3A.jpg";
import image5 from "../../assets/arts/vlog/5a.jpg";
import image6 from "../../assets/arts/vlog/6A.jpg";
import image7 from "../../assets/arts/vlog/7A.jpg";
import image8 from "../../assets/arts/vlog/8A.jpg";
import "./IndexVlog.css";
import Footer from "../Footer/Footer";
import Video from "./Video";

const Vlog = () => {
  return (
    <>
      <div className="scan-container" style={{ marginLeft: 145, marginBottom: 300 }}>


        <div className="row">
          <div className="col " >
            <div >
              <Image
                
                src={camera}
                className="float-left "
                preview={false}
                style={{ width: 80, height: 52, marginTop: -35 }}
              >
                Vlog
              </Image>
              <span
                className="opacity-80 "
                style={{
                  paddingLeft: 30,
                  marginTop: 100,
                  paddingTop: 100,
                  fontWeight: 500,
                  fontSize: 60,
                }}
              >
                VLOG
              </span>
            </div>
            <div>
              <Video
                image={image1}

                title="Trade to Earn Premier"
                link="https://www.youtube.com/watch?v=kfbl3WqJy3E&ab_channel=IndexxAi"
              ></Video>
            </div>
            <div>
              <Video
                image={image3}
                title="Best crypto earning exchange"
                link="https://www.youtube.com/watch?v=NLcbpA7P5-Y"
              ></Video>
            </div>
            <div>
              <Video
                image={image6}
                title="Phoenix Token"
                link="https://www.youtube.com/watch?v=o-U3nXRap5o"
              ></Video>
            </div>
            <div>
              <Video
                image={image5}
                title="Widely used in Philipines"
                link="https://www.youtube.com/watch?v=HGO74iStTKY"
              ></Video>
            </div>
          </div>

          <div className="col" style={{marginLeft:-150}}>
            <div>
              <span className="opacity-0 " style={{ paddingLeft: 30, marginTop: 100, paddingTop: 100, fontWeight: 500, fontSize: 60, }}>
                VLOG
              </span>
            </div>
            <div>
              <Video
                image={image2}
                title="DEX and CEX in one"
                link="https://www.youtube.com/watch?v=OavICrKzPTE&t=1s"
              ></Video>
            </div>
            <div>
              <Video
                image={image4}
                title="Welcoming Philipines community"
                link="https://www.youtube.com/watch?v=svWXVNvgc3s"
              ></Video>
            </div>
            <div>
              <Video
                image={image7}
                title="Best way earning of crypto"
                link="https://www.youtube.com/watch?v=NLcbpA7P5-Y"
              ></Video>
            </div>
            <div>
              <Video
                image={image8}
                title="World's 1st Decentralized"
                link="https://www.youtube.com/watch?v=7PYqDX_zJkk"
              ></Video>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Vlog;
