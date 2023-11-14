import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons/faShareAlt";
import {faFacebookF, faBehance, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import {dsnCN} from "../../hooks/helper";


const socialData = [
    {link: "https://www.behance.net/shod_fx", icon: faBehance, name: "Be"},
    {link: "https://www.instagram.com/shod.fx/", icon: faInstagram, name: "Ig"},
    {link: "https://www.facebook.com/shodydosh/", icon: faFacebookF, name: "Fb"},
];


function SocialOne({className="" , ...restProps}) {
    return (
        <div className={dsnCN("social-side social-network d-flex align-items-center" , className)} {...restProps}>
            <div className="icon" data-dsn="parallax">
                <FontAwesomeIcon icon={faShareAlt}/>
            </div>
            <ul className="socials d-flex flex-column p-absolute ">
                {socialData && socialData.map(($item, number) => <li key={number} style={{"--dsn-index-animate":socialData.length - number -1}}>
                    <a href={$item.link} target="_blank">
                        <FontAwesomeIcon icon={$item.icon}/>
                        <span>{$item.name}</span>
                    </a>
                </li>)}
            </ul>
        </div>
    );
}


export default SocialOne;