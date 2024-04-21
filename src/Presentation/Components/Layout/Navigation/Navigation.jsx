import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import LogoIcon from "../../Icons/LogoIcon";
import NavigationItem from "./NavigationItem";
import NavigationTitle from "./NavigationTitle";
import { navigationData } from "@Src/Data/Layout/navigation";

const Navigation = () => {
 const [expand, setExpanded] = useState(false);

 return (
   <Navbar
     expand={"xxl"}
     sticky="top"
     data-bs-theme="dark"
     className="bg-tec text-white"
   >
     <Container fluid>
       <Navbar.Brand>
         <Link to="/" className="decoration-none">
           <LogoIcon width={50} height={50} />
           <NavigationTitle />
         </Link>
       </Navbar.Brand>
       <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
       <Navbar.Offcanvas
         className="bg-tec text-white"
         id={`offcanvasNavbar-expand-xxl`}
         aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
         placement="end"
       >
         <Offcanvas.Header closeButton color="#ffffff">
           <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
             Tecnológico Delicias
           </Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
           <Nav className="justify-content-center flex-grow-1 pe-3">
             {navigationData.map((item, index) => {
               return (
                 <NavDropdown
                   key={`${index}-${item.id}`}
                   title={item.title}
                   id={item.id}
                   className="force-margin-horizontal"
                 >
                   {item.subItems.map((link, index) => {
                     const validation =
                       link.children && link.children.length > 0;

                     return validation ? (
                       <NavDropdown
                         key={`${index}-${link.id}`}
                         title={link.title}
                         id={link.id}
                         className="force-left dropdown-child"
                       >
                         {link.children.map((subLink, index) => (
                           <NavigationItem
                             key={`${index}-${subLink.id}`}
                             href={subLink.href}
                             title={subLink.title}
                             isTargetBlank={subLink.isTargetBlank}
                             onClick={() => setExpanded(false)}
                           />
                         ))}
                       </NavDropdown>
                     ) : (
                       <NavigationItem
                         key={`${index}-${link.id}`}
                         href={link.href}
                         title={link.title}
                         isTargetBlank={link.isTargetBlank}
                         onClick={() => setExpanded(false)}
                       />
                     );
                   })}
                 </NavDropdown>
               );
             })}
           </Nav>
         </Offcanvas.Body>
       </Navbar.Offcanvas>
     </Container>
   </Navbar>
 );
};

export default Navigation;
