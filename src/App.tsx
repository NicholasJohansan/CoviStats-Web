import { Header, Sidebar, Main, BottomAppBar } from "./components/layout";
import useIsMobile from "./hooks/useIsMobile";
import { createStyles, Style } from "./utils/styles"

const styles: Style = createStyles({
  app: [
    "bg-white",
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
    "gap-4",
    "sm:gap-0",
    "sm:flex-row",
    "overflow-auto"
  ]
});

const App: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div id="app" className={styles.app}>
      <Header />
      <div className={styles.content}>
        { !isMobile && <Sidebar /> }
        <Main />
        { isMobile && <BottomAppBar /> }
      </div>
    </div>
  )
}

export default App
