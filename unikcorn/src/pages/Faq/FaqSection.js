import React from 'react';
import { useEffect, useState } from "react";
import Faq from "react-faq-component";
import './Faq.css'

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What is UnikCorn ?",
            content: `Welcome in a near future, where everything has been destroy by a Human.
            Join our UnikCorn🦄  community where everyone (each of us) will have an impact to re-build a better world .`,
        },
        {
            title: "When it will be launch ?",
            content:
                "November 05, 2021.",
        },
        {
            title: "How much does it cost to mint an NFT ?",
            content: `It will cost 0.5 Sol`,
        },
        {
            title: "What is the total supply ?",
            content: "5000",
        },
        {
            title: "Where can i mint ?",
            content: "On our website",
        },
        {
            title: "How can be access to presale ?",
            content: "You should join our Discord server",
        },

    ],
};

const styles = {
    rowContentPaddingTop: '100',
    bgColor: 'transparent',
    titleTextColor: "#FFF",
    rowTitleColor: "#444",
    rowContentColor: '#444',
    arrowColor: "#222",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

function FaqSection() {
    return (
        <div className="faq_section" id="faq">
            <div className="faq-container">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    );
}

export default FaqSection
