import { Header, Sidebar, Main, BottomAppBar } from "./components/layout";
import useIsMobile from "./hooks/useIsMobile";
import { createStyles, Style } from "./utils"

const styles: Style = createStyles({
  app: [
    "bg-gray-100",
    "h-screen",
    "w-screen",
    "sm:flex",
    "sm:flex-col"
  ],
  content: [
    "w-full",
    "sm:flex-grow",
    "sm:items-stretch",
    "sm:flex"
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
