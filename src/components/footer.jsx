import logoFooter from "../assets/images/logoFooter.svg";

function Footer() {
  return (
    <footer className="footer">
      <img alt="logo de Kasa" src={logoFooter} className="logoFooter"></img>
      <p>
        © 2020 Kasa. All
        <br /> rights reserved
      </p>
    </footer>
  );
}

export default Footer;
