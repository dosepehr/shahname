"use client";
import i18n from "@/i18n";

const Header = () => {
    return (
        <div>
            <div className="switch">
                <input
                    id="language-toggle"
                    className="check-toggle check-toggle-round-flat"
                    type="checkbox"
                    onChange={(event) => {
                        if (event.target.checked) {
                            i18n.changeLanguage("en");
                        } else {
                            i18n.changeLanguage("fa");
                        }
                    }}
                />
                <label htmlFor="language-toggle"></label>
                <span className="on">FA</span>
                <span className="off">EN</span>
            </div>
        </div>
    );
};

export default Header;
