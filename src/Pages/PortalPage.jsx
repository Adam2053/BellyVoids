import React, { useRef, useState } from "react";
import { useToast, Button } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import "../static/portal.css";
const PortalPage = () => {
  const form = useRef();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6btsz8m",
        "template_0jk36zp",
        form.current,
        "JHWOeJmO-riqsCWjn"
      )
      .then(
        (result) => {
          toast({
            title: "Success",
            description: "Thanks for contacting us",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          e.target.reset();
          setLoading(false);
          return;
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="fc">
      <div className="lc">
        <div className="feat-1">
          <img
            style={{ marginBottom: "0.3rem" }}
            src="../assets/listpage/map.png"
            alt=""
          />
          <span>Karnal,Haryana,India</span>
        </div>
        <div className="feat-1">
          <img src="../assets/listpage/Email.png" alt="" />
          <span>Bellyvoids@gmail.com</span>
          <span>Bellyvoids@gmail.com</span>
        </div>
        <div style={{ border: "none" }} className="feat-1">
          <img src="../assets/listpage/PhoneCall.png" alt="" />
          <span>98172 65838</span>
          <span>98172 65838</span>
        </div>
      </div>
      <div className="rc">
        <h1>Just Say Hello!</h1>
        <p style={{ width: "30rem" }}>
          Do you fancy saying hi to me or you want to get started with your
          project and you ned my help? Feel free to contact me.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ display: "flex", flexDirection: "column" }}
          action=""
        >
          <div id="imp" >
            <input
              id="phone"
              autoComplete="off"
              placeholder="Your Name"
              name="user_name"
              className="br"
              required={true}
              style={{ margin: "1rem 1rem 1rem 0", width: "18rem" }}
              type="text"
            />
            <input
              id="phone"
              autoComplete="off"
              style={{ width: "18rem" }}
              placeholder="abcd@gmail.com"
              name="user_email"
              required={true}
              className="br"
              type="email"
            />
          </div>

          <input
            placeholder="Subject"
            name="user_subject"
            required={true}
            className="br"
            autoComplete="off"
            style={{ marginBottom: "1rem", fontWeight: "bold" }}
            type="text"
            id="phone2"
          />
          <textarea
            placeholder="Message"
            name="Message"
            style={{ marginBottom: "1rem" }}
            className="br"
            cols="30"
            rows="10"
          ></textarea>
          <Button className="btn-form br" type="submit" isLoading={loading}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PortalPage;
