<<<<<<< HEAD
import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkq2jcm",
        "template_xt6bgnn",
        form.current,
        "FeAUZKgiikYIVrIxt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="body">
        <div className="contact-form" id="contact">
          {/* left side copy and paste from work section */}
          <div className="w-left">
            <div className="awesome">
              <span className="get">Get in Touch</span>
              <div className="contact">Contact me</div>
              <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
              ></div>
            </div>
          </div>
          {/* right side form */}
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                className="user"
                placeholder="Name"
              />
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Email"
              />
              <textarea name="message" className="user" placeholder="Message" />
              <input type="submit" value="Send" className="button" />
              <span>{done && "Thanks for Contacting me"}</span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
=======
import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkq2jcm",
        "template_xt6bgnn",
        form.current,
        "FeAUZKgiikYIVrIxt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="contact-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            <span className="get">Get in Touch</span>
            <div className="contact">Contact me</div>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thanks for Contacting me"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
>>>>>>> b4a6f63830a956d2b52b8a83bbd8117089997b54
