import {dsnCN} from "../../hooks/helper";


const socialContent = [
    {name: "Behance.", href: "https://www.behance.net/shod_fx"},
    {name: "Instagram.", href: "https://www.instagram.com/shod.fx/"},
    {name: "Facebook.", href: "https://www.facebook.com/shodydosh/"},
];


function Social({className, ...restProps}) {
    return (
        <div className={dsnCN("footer-social p-relative", className)} {...restProps}>
            <ul>
                {socialContent && socialContent.map(($item, $number) =>
                    <li className="over-hidden" key={$number}>
                        <a href={$item.href} data-dsn="parallax" target="_blank" rel="nofollow">{$item.name}</a>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default Social;