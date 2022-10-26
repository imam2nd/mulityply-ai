import * as React from "react";
import { Tab } from "@headlessui/react";
import { useLocation } from "@reach/router";
import { useInView } from "react-intersection-observer";
import * as style from "@/styles/scrollingpanels.module.css";

type Panel = {
  id: string;
  title: string;
  headline: string;
  description: string;
  image: any;
  background: string;
  features: {
    head: string;
    body: string;
  }[];
};

type ScrollingPanelProps = {
  panels: Panel[];
};

export default function ScrollingPanels({ panels }: ScrollingPanelProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [targetTab, setTargetTab] = React.useState("");
  const location = useLocation();

  const horizontalScroll = (
    element: HTMLElement,
    to: number,
    duration: number
  ) => {
    if (duration <= 0) return;
    var difference = to - element.scrollLeft;
    var perTick = (difference / duration) * 10;
    setTimeout(function () {
      element.scrollLeft = element.scrollLeft + perTick;
      if (element.scrollLeft === to) return;
      horizontalScroll(element, to, duration - 10);
    }, 10);
  };
  const scrollToElement = (id: string, auto?: boolean) => {
    setTargetTab(id);
    const element = document.getElementById(id);
    const wrapper = document.getElementById("panels-wrapper");
    if (!element || !wrapper) return;
    const offset = element.offsetTop - wrapper.offsetTop;
    wrapper.scrollTo({ top: offset, behavior: auto ? "auto" : "smooth" });
  };

  const setTab = (id: string) => {
    if (targetTab && targetTab !== id) {
      return;
    }
    if (targetTab === id) {
      setTargetTab("");
    }
    const index = panels.findIndex((panel) => panel.id === id);
    setSelectedIndex(index);
  };

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    const el = document.getElementById("scrolling-panels");
    if (!tab || !el) return;
    window.scrollTo({ top: el.offsetTop - 40, behavior: "smooth" });
    scrollToElement(tab, true);
  }, [location.search]);

  React.useEffect(() => {
    const panel = panels[selectedIndex];
    const active = document.getElementById(`tab-${panel.id}`);
    const wrapper = document.getElementById("tabs-wrapper");
    const slider = document.getElementById("tab-slider");
    if (!active || !wrapper || !slider) return;
    const isHidden = window.getComputedStyle(wrapper, null).display === "none";
    if (isHidden) {
      return;
    }
    horizontalScroll(wrapper, active.offsetLeft, 500);

    slider.style.transform = `translateX(${active.offsetLeft - 8}px) scaleX(${
      active.clientWidth / 100
    })`;
  }, [selectedIndex, JSON.stringify(panels)]);

  return (
    <div id="scrolling-panels" className={style.scrollingPanelWrapper}>
      <div id="tabs-wrapper" className={style.mobileTablist}>
        {panels.map((panel, i) => (
          <button
            key={panel.id}
            id={`tab-${panel.id}`}
            className={`${style.mobileTab} ${
              selectedIndex === i ? style.activeTab : ""
            }`}
            onClick={() => scrollToElement(panel.id)}
          >
            {panel.title}
          </button>
        ))}
        <div className="h-1">
          <span id="tab-slider" className={style.indicator}></span>
        </div>
      </div>

      <div>
        <Tab.Group selectedIndex={selectedIndex} vertical>
          <Tab.List className={style.tablist}>
            {panels.map((panel, index) => (
              <Tab as={React.Fragment} key={index}>
                {({ selected }) => (
                  <button
                    className={`${style.tab} ${selected ? style.active : ""}`}
                    onClick={() => scrollToElement(panel.id)}
                  >
                    <span>{panel.title}</span>
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>

      <div
        id="panels-wrapper"
        className={`${style.panelsWrapper} no-scrollbar`}
      >
        {panels.map((panel) => (
          <PanelComponent panel={panel} key={panel.id} onInView={setTab} />
        ))}
      </div>
    </div>
  );
}

function PanelComponent({
  panel,
  onInView,
}: {
  panel: Panel;
  onInView: (id: string) => void;
}) {
  const [ref, inView] = useInView({ threshold: 0.35 });
  React.useEffect(() => {
    if (inView) {
      onInView(panel.id);
    }
  }, [inView]);

  return (
    <div
      id={panel.id}
      ref={ref}
      style={{ backgroundColor: panel.background }}
      className={style.panel}
    >
      <h3 className={style.panelTitle}>{panel.headline}</h3>
      <p className={style.panelText}>{panel.description}</p>
      <div className={style.panelImgWrapper}>
        <img
          className={style.panelImg}
          src={panel.image}
          loading="lazy"
          alt={panel.title}
        />
      </div>

      <div className={style.features}>
        {panel.features.map((feat, index) => (
          <div className={style.feature} key={index}>
            <span>
              <h5>{feat.head}</h5>
              <p>{feat.body}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
