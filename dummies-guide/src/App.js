import HomePage from "./components/Homepage";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import ArticlePage from "./components/ArticlePage";
import SearchPage from "./components/SearchPage";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";

function App() {
  //const location = useLocation();
  return (
    <AnimatePresence /**exitBeforeEnter*/>
      <Switch /**location={location} key={location.pathname}*/>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/article/:title/:id" component={ArticlePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
