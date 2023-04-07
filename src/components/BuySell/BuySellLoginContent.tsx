import React, { useState } from "react";
import Email from "../../assets/arts/Email.svg";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { adminLogin, decodeJWT, getUserDetails } from "../../services/api";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

interface Props {
  setScreenName: (value: string | ((prevVar: string) => string)) => void;
}
const BuySellLoginContent: React.FC<Props> = ({ setScreenName }) => {
  console.log(setScreenName);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoadings(true);
    console.log("Success:", values);
    console.log("Success:", values);
    let res = await adminLogin(values.email, values.password);
    console.log(res.status);
    console.log(res.data);
    if (res.status === 200) {
      setLoadings(false);
      openNotificationWithIcon("success", "Login Successful");
      localStorage.setItem("user", values.email);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      let resObj = await decodeJWT(res.data.access_token);
      console.log(resObj);
      let redirectUrl = "";
      window.localStorage.removeItem("redirect");
      let userDetails = await getUserDetails(values.email);
      console.log(userDetails.data);
      redirectUrl ? navigate(redirectUrl) : (window.location.href = "/"); // navigate("/indexx-exchange/buy-sell")
    } else {
      console.log(res.data);
      setLoadings(false);
      openNotificationWithIcon("error", res.data);
    }
  };

  type NotificationType = "success" | "info" | "warning" | "error";
  const [loadings, setLoadings] = useState<boolean>(false);

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string
  ) => {
    const Icon =
      type === "error" ? (
        <CloseCircleFilled />
      ) : (
        <CheckCircleFilled className="text_link" />
      );
    notification[type]({
      message: message,
      description: "",
      icon: Icon,
      style: {
        border: "1px solid #11be6a",
        boxShadow: "none",
        borderRadius: 5,
        top: 100,
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="">
      <div className="d-flex flex-direction-column col-md-12 responsive_container flex-align-center">
        <h1 className="text-center margin-lr-auto top_heading">
          Test Site Admin Log In
        </h1>

        <div className="bs_container bs_form card">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            autoComplete="off"
          >
            <div className="form_element email position-relative">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email Id Required" },
                  { type: "email", message: "Please Enter Valid Email Id" },
                ]}
              >
                <div className="control-input">
                  <Input placeholder="Email id" className="input_height" />
                  <span className="input_icon">
                    <img src={Email} alt="emailIcon" />
                  </span>
                </div>
              </Form.Item>
            </div>
            <div className=" password ">
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <div className="">
                  <Input.Password />
                </div>
              </Form.Item>
            </div>

            <br />
            <br />

            <Form.Item shouldUpdate>
              <Button
                type="primary"
                className="atn-btn atn-btn-round margin-b-1x"
                loading={loadings}
                htmlType="submit"
                block
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
          <br />
        </div>
      </div>
    </div>
  );
};

export default BuySellLoginContent;
