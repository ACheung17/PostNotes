import React from "react";

function Footer() {
  //made the footer year dynamic, so it updates on it's own.
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
