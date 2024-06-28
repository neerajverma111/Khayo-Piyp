import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-body">
      <div className="container">
        <div className="row">
          <div className="mainFoot d-flex justify-content-evenly mt-4 ">
            <div className="col-md-3">
              <div className="mylogo">
                <div className="logo-name text-center">
                  <ul>
                    <img
                      src="./images/Food_Logo.png"
                      alt=""
                      width={200}
                      height={120}
                    />
                    <h5>Khayo-Piyo</h5>
                    <p>© 2024 Neeraj Verma</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="company-details">
                <ul>
                 <li><h5>Company</h5></li> 
                 <li> <a href="">Career</a></li>
                 <li><a href="">Team</a></li>
                 <li> <a href="">About</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="company-details">
                <ul>
                 <li><h5><a href="/contact">Contact Us</a></h5></li>
                 <li><a href="/help">Help & Support</a></li>
                 <li><a href="">Partner with us</a></li>
                 <li><a href="">Ride with us</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="company-details">
                <ul>
                <li>  <h5>We Deliver To</h5></li>
                <li>  <a href="">Ludhiana</a></li>
                <li>  <a href="">Chandigarh</a></li>
                <li>  <a href="">Jalandhar</a></li>
                <li>  <a href="">Delhi</a></li>
                <li>  <a href="">PHF Leasing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
