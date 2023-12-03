import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import MenuContent from "./MenuContent";
import Logo from "../../logo/Logo";


const menuContent = [
    {
        name: "Home", href: "/"
    },
    {
        name: "Portfolio",
        dropdownMenu: [
            {name: "Carousel 1", href: "/carousel-portfolio-1"},
            {name: "Carousel 2", href: "/carousel-portfolio-2"},
            {name: "Carousel 3", href: "/carousel-portfolio-3"},
        ]
    },
    {
        name: "Works",
        dropdownMenu: [
            {
                name: "GOI VE QUA KHU", href: "/portfolio/goi-ve-qua-khu"
            }, {
                name: "NATA", href: "/portfolio/nata"
            },
        ]
    },
    {name: "Service", href: "/service"},
    {
        name: "Story",
        href: "/story"
    },
];

const SHODMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link href={items.href} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand href={"/"} transitionPage={{title: "SHOD"}}>
                <Logo width="75px" height="auto"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

SHODMenu.defaultProps = {
    hamburger: false
}


export default SHODMenu;