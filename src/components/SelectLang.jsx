"use client";

import React from "react";
import i18n from "@/i18n";
const SelectLang = () => {
    return (
        <div className="checkbox-wrapper-35">
            <input
                value="private"
                name="switch"
                id="switch"
                type="checkbox"
                className="switch"
                onChange={(event) => {
                    if (event.target.checked) {
                        i18n.changeLanguage("fa");
                    } else {
                        i18n.changeLanguage("en");
                    }
                }}
            />
            <label for="switch">
                <span className="switch-x-toggletext">
                    <span className="switch-x-unchecked !text-white">English</span>
                    <span className="switch-x-checked !text-white">فارسی</span>
                </span>
            </label>
        </div>
    );
};

export default SelectLang;
