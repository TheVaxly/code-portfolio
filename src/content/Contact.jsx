import React from "react";
import "./../styles/Contact.css";

const Contact = () => {
  const socials = [
    "email: marten.uiboupin@gmail.com;",
    "discord: vaxly;",
    "phone: +372 5841 7113;",
  ];

  return (
    <div className="contact-container">
      <div className="socials">
        <h2>Reach Out Via Socials</h2>
        <pre className="socials-pre">
          <span>1   </span>
          <span className="code-selector">.socials</span>{" "}
          <span className="code-brace">{"{"}</span>
          {socials.map((line, index) => {
            const [key, value] = line.split(": ");
            return (
              <React.Fragment key={index}>
                {`\n${index + 2}       `}
                <span className="code-property">{key}</span>
                <span className="code-colon">: </span>
                <span className="code-value">{value}</span>
              </React.Fragment>
            );
          })}
          {`\n${socials.length + 2}       `}
          <span className="code-property">github</span>
          <span className="code-colon">: </span>
          <a
            href="https://github.com/TheVaxly"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheVaxly;
          </a>
          {`\n${socials.length + 3}   `}
          <span className="code-brace">{"}"}</span>
        </pre>
      </div>

      <hr className="divider" />

      <div className="contact-form">
        <h2>Or Fill Out This Form</h2>
        <form action="https://formspree.io/f/mwppygay" method="POST">
          <label>
            Your Name:
            <input type="text" name="name" required placeholder="Your Name" />
          </label>
          <label>
            Your Email:
            <input type="email" name="email" required placeholder="Your Email" />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" required placeholder="Subject" />
          </label>
          <label>
            Your Message:
            <textarea name="message" required placeholder="Your Message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
