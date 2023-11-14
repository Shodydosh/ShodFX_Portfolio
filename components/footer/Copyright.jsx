import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <h5 className={dsnCN(className)} {...restProps}>
            {new Date().getFullYear()} © {" "}
            <a className="link-hover" data-hover-text="Shod.fx" target="_blank"
               rel="nofollow"
               href="https://www.instagram.com/shod.fx/"> Shod Nguyen
            </a>
        </h5>
    );
}


export default Copyright;