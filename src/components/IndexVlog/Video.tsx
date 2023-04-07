import { Image } from "antd";
const Video = (props: any) => {
  return (
    <a href={props.link} className="text-color">
      <Image
        src={props.image}
        className="align-left float-left"
        preview={false}
        style={{ width: 587, height: 330, marginTop: 50 }}
      >
        Vlog
      </Image>
      <p
        className="opacity-75 text-color"
        style={{ fontSize: 40, fontWeight: 400, }}
      >
        {props.title}
      </p>
    </a>
  );
};

export default Video;
