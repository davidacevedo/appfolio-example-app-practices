import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactFooter from "./ContactFooter";

const Contact: React.FC = () => (
  <div>
    <ContactHeader />
    <ContactInfo />
    <ContactForm />
    <ContactFooter />
  </div>
);

export default Contact;
