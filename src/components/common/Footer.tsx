import React from "react";
import rightArrow from "@/images/arrow-right.svg";
import brandLogo from "@/images/brand-logo.svg";
import * as style from "@/styles/footer.module.css";
import { Link } from "gatsby";

const footerLinks = [
  {
    id: 1,
    category: "ABOUT US",
    links: [{ id: 1, label: "Careers", url: "/", isExternal: false }],
  },
  {
    id: 2,
    category: "CONTACT",
    links: [{ id: 1, label: "Contact us", url: "/", isExternal: false }],
  },
  {
    id: 3,
    category: "PRODUCTS & SERVICES",
    links: [
      { id: 1, label: "Our business solutions", url: "/", isExternal: false },
      {
        id: 2,
        label: "Our consumer app",
        url: "https://multiply.ai/",
        isExternal: true,
      },
    ],
  },
  {
    id: 4,
    category: "LEGAL",
    links: [{ id: 1, label: "Terms and Privacy", url: "/", isExternal: false }],
  },
];

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.footer}>
        <img src={brandLogo} alt="brand logo" loading="lazy" />
        <ul className={style.linksWrapper}>
          {footerLinks.map((item) => (
            <li className={style.category} key={item.id}>
              {item.category}
              <ul className={style.links}>
                {item.links.map((item) => (
                  <li className={style.link} key={item.id}>
                    {item.isExternal ? (
                      <a className={style.anchorLink} href={item.url}>
                        <p>{item.label}</p>
                        <img
                          src={rightArrow}
                          alt="right arrow"
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <Link to={item.url} className={style.anchorLink}>
                        <p>{item.label}</p>
                        <img
                          src={rightArrow}
                          alt="right arrow"
                          loading="lazy"
                        />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className={style.location}>
          Multiply is a trading style of Multiply AI Limited. Multiply AI
          Limited is authorised and regulated by the Financial Conduct
          Authority. FCA register number is 801053. You can confirm this by
          visiting the Financial Conduct Authority website
          www.fca.org.uk/firms/financial-services-register or by contacting the
          Financial Conduct Authority on 0800 111 6768. Our Companies House
          register number is 10470734 and our Registered Office is: 3rd Floor,
          Rise London, 41 Luke Street, London, England, EC2A 4DP.
        </p>
        <p className={style.copyright}>
          Copyright © 2022 Multiply, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
