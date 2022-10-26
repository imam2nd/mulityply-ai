import React from "react";
import { Fragment, useMemo } from "react";
import * as style from "@/styles/navbar.module.css";
import { Link } from "gatsby";
import { Menu, Transition, Disclosure } from "@headlessui/react";

// images import
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import HomeIcon from "@/images/house-solid.svg";
import engagementEngineIcon from "@/images/engagement-engine-icon.svg";
import customerSupportIcon from "@/images/customer-support-dashboards-icon.svg";
import adviserSystemIcon from "@/images/adviser-system-icon.svg";
import factFindIcon from "@/images/fact-find-icon.svg";
import performanceDashboardsIcon from "@/images/performance-dashboards-icon.svg";
import adviceEngineIcon from "@/images/advice-engine-icon.svg";
import riskEngineIcon from "@/images/risk-engine-icon.svg";
import aIRevenueIcon from "@/images/aI-revenue-profiler-icon.svg";
import lifePlanIcon from "@/images/life-plan-icon.svg";
import contentLibraryIcon from "@/images/content-library-icon.svg";
import autonomousFinanceIcon from "@/images/autonomous-finance-system-icon.svg";

const navLinks = [
  {
    navLabel: "Home",
    navIcon: HomeIcon,
    navUrl: "/",
    panelClass: "",
    navMenu: [],
  },
  {
    navLabel: "Products",
    navIcon: "",
    navUrl: "",
    panelClass: "popPanelOne",

    navMenu: [
      {
        dropType: "Advice",
        dropsClass: "dropsOne",
        dropTypeUrl: "/digital-financial-advice",
        dropMenu: [
          {
            dropIcon: factFindIcon,
            dropLabel: "Fact Find",
            dropDesc: "White label content marketing",
            dropUrl: "/digital-financial-advice?tab=fact-find",
          },
          {
            dropIcon: adviceEngineIcon,
            dropLabel: "Advice Engine",
            dropDesc: "Automated financial advice",
            dropUrl: "/digital-financial-advice?tab=advice-engine",
          },
          {
            dropIcon: riskEngineIcon,
            dropLabel: "Risk Engine",
            dropDesc: "Manage advice risk",
            dropUrl: "/digital-financial-advice?tab=risk-engine",
          },
          {
            dropIcon: lifePlanIcon,
            dropLabel: "Life Plan",
            dropDesc: "White label customer plans",
            dropUrl: "/digital-financial-advice?tab=life-plan",
          },
          {
            dropIcon: adviserSystemIcon,
            dropLabel: "Adviser System",
            dropDesc: "Connect human advisers",
            dropUrl: "/digital-financial-advice?tab=adviser-system",
          },
          {
            dropIcon: contentLibraryIcon,
            dropLabel: "Content Library",
            dropDesc: "White label content marketing",
            dropUrl: "/digital-financial-advice?tab=content-library",
          },
          {
            dropIcon: engagementEngineIcon,
            dropLabel: "Engagement Engine",
            dropDesc: "Trigger customer actions",
            dropUrl: "/digital-financial-advice?tab=engagement-engine",
          },
        ],
      },
      {
        dropType: "Intelligence",
        dropsClass: "dropsTwo",
        dropTypeUrl: "/intelligence",
        dropMenu: [
          {
            dropIcon: aIRevenueIcon,
            dropLabel: "AI Revenue Profiler",
            dropDesc: "Access new insights for your key customer segments",
            dropUrl: "/intelligence?tab=ai-revenue-profiler",
          },
          {
            dropIcon: autonomousFinanceIcon,
            dropLabel: "Autonomous Finance System",
            dropDesc:
              "Move customer money to the right product at the right time",
            dropUrl: "/intelligence?tab=autonomous-finance-system",
          },
        ],
      },
      {
        dropType: "Business Ops",
        dropsClass: "dropsThree",
        dropTypeUrl: "/business-ops",
        dropMenu: [
          {
            dropIcon: performanceDashboardsIcon,
            dropLabel: "Performance Dashboards",
            dropDesc: "Customised reports",
            dropUrl: "/business-ops?tab=performance-dashboards",
          },
          {
            dropIcon: customerSupportIcon,
            dropLabel: "Customer Support Dashboards",
            dropDesc: "Offer enhanced customer support",
            dropUrl: "/business-ops?tab=customer-support-dashboards",
          },
        ],
      },
    ],
  },
  {
    navLabel: "Company",
    navIcon: "",
    navUrl: "",
    panelClass: "popPanelTwo",
    navMenu: [
      {
        dropType: "",
        dropsClass: "dropsFour",
        dropTypeUrl: "",
        dropMenu: [
          {
            dropIcon: "",
            dropLabel: "About us",
            dropDesc: "",
            dropUrl: "/about-us",
          },
          {
            dropIcon: "",
            dropLabel: "Careers",
            dropDesc: "",
            dropUrl: "https://angel.co/company/multiply-ai",
          },
        ],
      },
    ],
  },
  {
    navLabel: "Contact us",
    navIcon: "",
    navUrl: "#book-a-demo",
    panelClass: "",
    navMenu: [],
  },
];

const NavLinks = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <MobileMenu isMobile={isMobile} />
      <DesktopMenu />
    </>
  );
};

export default NavLinks;

const MobileMenu = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className={`${style.navLinks} ${style.mobileLinks} ${
        isMobile ? style.active : ""
      }`}
    >
      {navLinks.map((navItem, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={
                  open ? `${style.activeLink} ${style.navLink}` : style.navLink
                }
              >
                {navItem.navMenu.length !== 0 ? (
                  <div className={style.dropBtnWrapper}>
                    <span>{navItem.navLabel}</span>
                    <ChevronDownIcon
                      className={
                        open
                          ? `${style.activeDropArrow} ${style.dropArrow}`
                          : style.dropArrow
                      }
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  <div className="text-left">
                    <Link to={navItem?.navUrl}>{navItem.navLabel}</Link>
                  </div>
                )}
              </Disclosure.Button>
              {navItem.navMenu.length !== 0 && (
                <Disclosure.Panel className="text-gray-500">
                  <MobileNavMenu navMenu={navItem.navMenu} />
                </Disclosure.Panel>
              )}
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

const DesktopMenu = () => {
  return (
    <div className={`${style.navLinks} ${style.desktopLinks}`}>
      {navLinks.map((navItem, i) => (
        <Menu
          as="div"
          aria-label="dropdown panel"
          className={style.menu}
          key={i}
        >
          {({ open }) => (
            <>
              <Menu.Button
                className={
                  open &&
                  navItem.navLabel !== "Home" &&
                  navItem.navLabel !== "Contact us"
                    ? `${style.activeLink} ${style.navLink}`
                    : navItem.navLabel === "Home"
                    ? style.navLinkHome
                    : navItem.navLabel === "Contact us"
                    ? style.navLinkContact
                    : style.navLink
                }
              >
                {navItem.navMenu.length !== 0 ? (
                  <div className={style.dropBtnWrapper}>
                    <span>{navItem.navLabel}</span>
                    <ChevronDownIcon
                      className={
                        open
                          ? `${style.activeDropArrow} ${style.dropArrow}`
                          : style.dropArrow
                      }
                      aria-hidden="true"
                    />
                  </div>
                ) : navItem.navIcon ? (
                  <Link to={navItem?.navUrl}>
                    <img
                      src={navItem.navIcon}
                      alt={navItem.navLabel}
                      width={24}
                      height={24}
                      className={style.navIcon}
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <Link to={navItem?.navUrl}>{navItem.navLabel}</Link>
                )}
              </Menu.Button>
              {navItem.navMenu.length !== 0 && (
                <Transition
                  as={Fragment}
                  enter={style.tranEnter}
                  enterFrom={style.tranEnterFrom}
                  enterTo={style.tranEnterTo}
                  leave={style.tranLeave}
                  leaveFrom={style.tranLeaveFrom}
                  leaveTo={style.tranLeaveTo}
                >
                  <Menu.Items
                    className={`${style.popPanel}
                    ${style[navItem.panelClass]}`}
                  >
                    <DesktopNavMenu navMenu={navItem.navMenu} />
                  </Menu.Items>
                </Transition>
              )}
            </>
          )}
        </Menu>
      ))}
    </div>
  );
};

type DropMenu = {
  dropIcon: string;
  dropLabel: string;
  dropDesc: string;
  dropUrl: string;
};

const MenuLink = ({ dropItem }: { dropItem: DropMenu }) => {
  const LinkContent = useMemo(
    () => (
      <>
        {dropItem?.dropIcon && (
          <img
            src={dropItem?.dropIcon}
            alt={dropItem.dropLabel}
            width={30}
            height={30}
            className={style.dropIcon}
            loading="lazy"
          />
        )}
        <div className={style.textWrapper}>
          <p className={style.cardTitle}>{dropItem?.dropLabel}</p>
          <p className={style.cardDesc}>{dropItem?.dropDesc}</p>
        </div>
      </>
    ),
    [JSON.stringify(dropItem)]
  );
  return dropItem.dropUrl.startsWith("http") ? (
    <a href={dropItem?.dropUrl}>{LinkContent}</a>
  ) : (
    <Link to={dropItem?.dropUrl}>{LinkContent}</Link>
  );
};

const DesktopMenuLink = ({ dropItem }: { dropItem: DropMenu }) => {
  const LinkContent = useMemo(
    () => (
      <>
        {dropItem?.dropIcon && (
          <img
            src={dropItem?.dropIcon}
            alt={dropItem.dropLabel}
            width={30}
            height={30}
            className={style.dropIcon}
            loading="lazy"
          />
        )}
        <div className={style.textWrapper}>
          <p className={style.cardTitle}>{dropItem?.dropLabel}</p>
          <p className={style.cardDesc}>{dropItem?.dropDesc}</p>
        </div>
      </>
    ),
    [JSON.stringify(dropItem)]
  );
  return dropItem.dropUrl.startsWith("http") ? (
    <Menu.Item>
      <a href={dropItem?.dropUrl}>{LinkContent}</a>
    </Menu.Item>
  ) : (
    <Menu.Item>
      <Link to={dropItem?.dropUrl}>{LinkContent}</Link>
    </Menu.Item>
  );
};

type MobileNavMenuProps = {
  navMenu: {
    dropType: string;
    dropTypeUrl: string;
    dropsClass: string;
    dropMenu: DropMenu[];
  }[];
};

const MobileNavMenu = ({ navMenu }: MobileNavMenuProps) => {
  return (
    <div className={style.mobileMenu}>
      {navMenu.map((menuItem, i) => (
        <div className={style.dropsLayout} key={i}>
          {menuItem.dropType && (
            <Link to={menuItem.dropTypeUrl ?? "/"} className={style.dropType}>
              {menuItem?.dropType}
            </Link>
          )}
          <div className={`${style[menuItem.dropsClass]} ${style.drops}`}>
            {menuItem.dropMenu.map((dropItem, j) => (
              <div className={style.drop} key={j}>
                <MenuLink dropItem={dropItem} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

type DesktopNavMenuProps = {
  navMenu: {
    dropType: string;
    dropTypeUrl: string;
    dropsClass: string;
    dropMenu: DropMenu[];
  }[];
};

const DesktopNavMenu = ({ navMenu }: DesktopNavMenuProps) => {
  return (
    <div className={style.dropsMenu}>
      {navMenu.map((menuItem, i) => (
        <div className={style.dropsLayout} key={i}>
          {menuItem.dropType && (
            <Menu.Item>
              <Link to={menuItem.dropTypeUrl ?? "/"} className={style.dropType}>
                {menuItem?.dropType}
              </Link>
            </Menu.Item>
          )}
          <div className={`${style[menuItem.dropsClass]} ${style.drops}`}>
            {menuItem.dropMenu.map((dropItem, j) => (
              <div className={style.drop} key={j}>
                <DesktopMenuLink dropItem={dropItem} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
