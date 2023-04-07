import { Image, Button } from "antd";
import { Typography } from "antd";

import sc1 from "../../assets/how-it-works/sc1.png";
import sc2 from "../../assets/how-it-works/sc2.png";
import sc3 from "../../assets/how-it-works/sc3.png";
import sc4 from "../../assets/how-it-works/sc4.png";
import sc6 from "../../assets/how-it-works/sc6.png";
import sc7 from "../../assets/how-it-works/sc7.png";
import firstcoin from "../../assets/how-it-works/DEX.png";
import Footer from "../Footer/Footer";
import { baseDEXURL } from "../../services/api";

const { Text } = Typography;

const HowCentralized = () => {
  


  return (
    <>
      <div className="scan-container how-it-works flex-direction-column">
        <Image
          preview={false}
          src={firstcoin}
          className="rounded mx-auto d-block"
          style={{ width: "100px", paddingTop: 40, display: "flex" }}
        ></Image>
        <Text
          className="card__title"
          style={{
            marginBottom: 100,
            color: "#5F5F5F",
            fontSize: "70px",
            lineHeight: "1em",
          }}
        >
          Decentralized{" "}
        </Text>
        <br />

        <div className="container">
          <div className="text-left justify-center ">
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              It is a marketplace where users can exchange/trade any crypto
              currency without signup on the exchange platform. All the users
              crypto currencies are stored in a non-custodial manner without the
              need for an intermediary to facilitate the transfer and custody of
              funds.
            </Text>
            <br />
            <br />
            <br />

            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 2,
              }}
            >
              Steps for Buy(Currently only supported Fiat is USD):
            </Text>

            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              <br />
              <br />
              1.Choose the Crypto you want Sell with USD <br />
              <Image
                preview={false}
                src={sc1}
                style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
              ></Image>
            </Text>

            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              <br />
              <br />
              2. Add the required details like wallet address <br />
              <Image
                preview={false}
                src={sc2}
                style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
              ></Image>
            </Text>

            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              <br />
              <br />
              3.Click on create an Exchange and then pay USD <br />
              <Image
                preview={false}
                src={sc3}
                style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
              ></Image>
            </Text>
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              <br />
              <br />
              4. Once the USD payment is over the exchange is successfully
              finished, you will get the desired crypto. <br />
              <Image
                preview={false}
                src={sc4}
                style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
              ></Image>
            </Text>

            <br />
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 2,
              }}
            >
              Steps for Sell(Currently only supported Fiat is USD):
            </Text>

            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              <br />
              <br />
              1. Choose the Crypto you want Sell for USD
              <br />
              <Image
                preview={false}
                src={sc1}
                style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
              ></Image>
            </Text>
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              <br />
              <br />
              2. Add required details to a new an exchange <br />
              <Image
                preview={false}
                src={sc2}
                style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
              ></Image>
            </Text>
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              <br />
              <br />
              3. Click on create an exchange and enter the necessary bank
              details details <br />
              4. Then Pay the crypto you entered to the wallet address
              <br />
              5. Once the crypto payment is received the exchange is
              successfully finished, you will get the desired fiat in a few
              hours.
            </Text>

            <Image
              preview={false}
              src={sc6}
              style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
            ></Image>

            <br />

            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 2,
              }}
            >
              Steps for Swap:
              <br />
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 20,
                  fontWeight: 400,

                  lineHeight: 2,
                }}
              >
                1. Choose the crypto exchange pair you want to swap <br />
              </Text>
              <Image
                preview={false}
                src={sc1}
                style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
              ></Image>
            </Text>
            <br />
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              2. Enter the recipient’s address <br />
              <Image
                preview={false}
                src={sc2}
                style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
              ></Image>
              <br />
            </Text>
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              3. Send and receive cryptocurrencies <br />
            </Text>
            <Image
              preview={false}
              src={sc7}
              style={{ marginLeft: 80, paddingTop: 40, display: "flex" }}
            ></Image>
            <br />

            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 20,
                fontWeight: 400,

                lineHeight: 2,
              }}
            >
              4. When the swap process is over and the exchange is successfully
              finished, you will get the desired crypto. <br />
            </Text>
          </div>
        </div>

        <div
          className="text-center"
          style={{
            width: 300,
            marginTop: 100,
            borderRadius: 0,
            borderColor: "#006DFF",
          }}
        >
          <a href={baseDEXURL}>
            {" "}
            <Button
              style={{ width: 300, height: 60 }}
              type="primary"
              size="large"
            >
              Decentralize
            </Button>{" "}
          </a>

          <br />
          <br />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default HowCentralized;
