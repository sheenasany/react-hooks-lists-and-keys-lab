import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];
  const renderLinks = links.map((link) => {
      return <a href="#home" key={link}>{link}</a>
    })

  return (
    <nav>
      {renderLinks}
      </nav>
  )}

export default NavBar;