import { Outlet } from "react-router-dom";
import "./Help.css";
import LeftNav from "./LeftNav";
import ContactUs from "./ContactUs";

import Team from "./Privacypolicy";
import { Collapse } from "antd";

import Footer from "../Footer/Footer";
import Termsofservice from "./Termsofservice";

const { Panel } = Collapse;
const Legal = () => {
  return (
    <>
      <div className="nav_container d-flex help_main_page d-md-flex d-none">
        <LeftNav />
        <Outlet />
      </div>
      <div className="nav_container d-flex help_main_page d-md-none">
        <Collapse>
          <Panel header=" indexx Swap Intro" key="1">
            <Termsofservice />
          </Panel>
          <Panel header="indexx Swap Team" key="2">
            <Team />
          </Panel>
          <Panel header="Contact Us" key="3">
            3 <ContactUs />
          </Panel>
        </Collapse>
      </div>

      <Footer helpIcon={false} />
    </>
  );
};

export default Legal;
