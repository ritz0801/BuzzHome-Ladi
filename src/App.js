import React, { Suspense, useEffect, useState } from 'react';
import Introduction from './components/Introduction/Introduction';
import Statistic from './components/Statistic/Statistic';
import Subscription from './components/Subscription/Subscription';
import Footer from './components/Footer/Footer';
import './App.scss';
import ToolBar from './components/ToolBar/ToolBar';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-174908431-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [isCloseToolBar, setIsCloseToolBar] = useState(false);

  const closeToolBar = () => {
    setIsCloseToolBar(!isCloseToolBar);
  }

  useEffect(() => {
    if (localStorage.getItem("language") === "en") {
      window.document.title = "Buzz Home";
    }
    else {
      window.document.title = "BuzzHome - Sàn Kết Nối Bất Động Sản Theo Nhu Cầu"
    }
  }, [])

  return (
    <Suspense fallback={null}>
      <main className="app">
        <ToolBar isCloseToolBar={isCloseToolBar} closeToolBar={closeToolBar} />
        <Introduction isCloseToolBar={isCloseToolBar} />
        <Statistic />
        <Subscription />
        <Footer />
      </main>
    </Suspense>
  );
}

export default App;
