import React from "react";

const TabContext = React.createContext({
  tab: 0,
  setTab: (tab: number) => {},
});

export const TabContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};
export default TabContext;
