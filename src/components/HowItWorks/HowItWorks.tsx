import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import firstcoin from "../../assets/how-it-works/CEX.png";
import secondcoin from "../../assets/how-it-works/DEX.png";
import tradetoearn from "../../assets/how-it-works/tradetoearn.png";
import tokens from "../../assets/how-it-works/tokens.png";
import indexxfortune from "../../assets/how-it-works/indexxfortune.png";
import finalsquare from "../../assets/how-it-works/finalsquare.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const { Text } = Typography;

const HowItWorks = () => {
  const navigate = useNavigate();

  const navigateUser = (path: any) => {
    window.localStorage.setItem("redirect", window.location.pathname);
    navigate(path);
  };

  return (
    <>
      <div className="scan-container how-it-works flex-direction-column">
        <Text
          className="card__title"
          style={{
            marginBottom: 100,
            color: "#5F5F5F",
            fontSize: "70px",
            lineHeight: "1em",
            marginTop: 50,
          }}
        >
          How it Works
        </Text>

        <div className="row">
          <div className="col-lg-4 text-center">
            <Link to="/indexx-exchange/how-it-works/centralized">
              <img src={firstcoin} alt="indexxcoin" />
            </Link>
            <br />
            <span className="employee_name">
              <strong
                onClick={() =>
                  navigateUser("/indexx-exchange/how-it-works/centralized")
                }
              >
                indexx
                <br />
                Centralized
              </strong>
            </span>
          </div>
          <div className="col-lg-4 text-center">
          <Link to="/indexx-exchange/how-it-works/decentralized">
              <img src={secondcoin} alt=""/>
              <br />
            </Link>
            <span className="employee_name">
              <strong
               onClick={() =>
                navigateUser("/indexx-exchange/how-it-works/decentralized")
              }
              >
                indexx
                <br />
                Decentralized
              </strong>
            </span>
          </div>
          <div className="col-lg-4 text-center">
            <Link to="/indexx-exchange/how-it-works/tradetoearn">
              <img src={tradetoearn} alt=""/>
              <br />
            </Link>

            <span
              className="employee_name"
              onClick={() =>
                navigateUser("/indexx-exchange/how-it-works/tradetoearn")
              }
            >
              <strong>
                indexx
                <br />
                Trade To Earn
              </strong>
            </span>
          </div>
          <div className="col-lg-4 text-center">
            <Link to={"/indexx-exchange/how-it-works/tokens"}>
              <img src={tokens} alt="indexxcoin" style={{ marginTop: 50 }} />
            </Link>

            <br />
            <span className="employee_name"  onClick={() =>
                navigateUser("/indexx-exchange/how-it-works/fortune")
              }>
              <strong>
                indexx
                <br /> Tokens
              </strong>
            </span>
          </div>
          <div className="col-lg-4 text-center">
            <Link to={"/indexx-exchange/how-it-works/fortune"}>
            <img
              src={indexxfortune}
              alt="indexxcoin"
              style={{ marginTop: 50 }}
            /></Link>
            <br />
            <span className="employee_name">
              <strong>
                {" "}
                indexx
                <br />
                Fortune
                <br />
              </strong>
            </span>
            <Text style={{ opacity: "50%", fontWeight: "400" }}>
              
            </Text>
          </div>
          <div className="col-lg-4 text-center">
            <img src={finalsquare} alt="indexxcoin" style={{ marginTop: 50 }} />
            <br />
            <span className="employee_name">
              <strong>
                indexx
                <br />
                Bank
                <br />
              </strong>
            </span>
            <Text style={{ opacity: "50%", fontWeight: "400" }}>
              (coming soon)
            </Text>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default HowItWorks;
