import { FooterProps } from "../types";
import logo_azape from "../assets/logo_azape.svg";

const Footer = ({ links }: FooterProps) => {
    return (
        <footer className="footer">
            <div className="gap-5">
                {links.map((link, index) => (
                    <a key={index} href={link.href} className="text-muted mx-4">
                        {link.label}
                    </a>
                ))}
            </div>
            <div className="d-flex align-items-center me-4">
                <span className="me-2">
                    <img src={logo_azape} alt="logo Azape" />
                </span>
                <span className="text-muted">® Desenvolvido por Azape</span>
            </div>
        </footer>
    );
};

export default Footer;