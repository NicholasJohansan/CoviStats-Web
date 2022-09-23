import React, { useState } from "react";
import { Header, Sidebar, Main, BottomAppBar } from "./components/layout";
import useIsMobile from "./hooks/useIsMobile";
import CountryContext from "./contexts/CountryContext";
import { createStyles, Style } from "./utils/styles"
import { BasicCountryData, FullCountryData } from "./utils/api.interfaces";
import CountryModal from "./components/CountryModal";

const styles: Style = createStyles({
  app: [
    "bg-white",
    "dark:bg-black",
    "h-screen",
    "w-screen",
    "flex",
    "flex-col",
  ],
  content: [
    "w-full",
    "flex-grow",
    "sm:items-stretch",
    "flex",
    "flex-col",
    "gap-1",
    "sm:gap-0",
    "sm:flex-row",
    "overflow-auto"
  ]
});

const App: React.FC = () => {
  const [country, setCountry] = useState<BasicCountryData | null>(null);
  const isMobile = useIsMobile();

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      <div id="app" className={styles.app}>
        <Header />
        <div className={styles.content}>
          { !isMobile && <Sidebar /> }
          <Main />
          { isMobile && <BottomAppBar /> }
        </div>
      </div>
      <CountryModal />
    </CountryContext.Provider>
  )
}

export default App
