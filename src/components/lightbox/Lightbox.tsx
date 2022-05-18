import React from "react";
import "./lightbox.scss";

interface LightboxProps {
    children: any;
    bigText?: boolean;
}

export default function Lightbox(props: LightboxProps) {
    const { children, bigText } = props;
    return (
        <div className={`lightbox ${bigText ? "lightbox_big_text" : ""}`}>
            <span>{children}</span>
        </div>
    );
}
