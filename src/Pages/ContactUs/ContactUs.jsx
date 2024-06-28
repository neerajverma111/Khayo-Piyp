import Footer from "../../Components/Footer/Footer";
import ContactHero from "../../Components/Hero/ContactHero";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <>
      <MyNavbar />
      <div className="contact-main">
        <ContactHero />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
