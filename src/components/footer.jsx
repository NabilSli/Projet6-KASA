import logoFooter from "../assets/images/logoFooter.svg";

function Footer() {
  return (
    <footer className="footer">
      <img alt="logo de Kasa" src={logoFooter} className="logoFooter"></img>
      <p className="footerTxt">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
