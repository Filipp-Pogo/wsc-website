import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Tennis from "./pages/Tennis";
import Golf from "./pages/Golf";
import Fitness from "./pages/Fitness";
import Pickleball from "./pages/Pickleball";
import Summer from "./pages/Summer";
import Membership from "./pages/Membership";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Accessibility from "./pages/Accessibility";
import BackToTop from "./components/BackToTop";
import AccessibilityToggle from "./components/AccessibilityToggle";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tennis" component={Tennis} />
      <Route path="/golf" component={Golf} />
      <Route path="/fitness" component={Fitness} />
      <Route path="/pickleball" component={Pickleball} />
      <Route path="/summer" component={Summer} />
      <Route path="/membership" component={Membership} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/accessibility" component={Accessibility} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <main id="main-content">
            <Router />
          </main>
          <BackToTop />
          <AccessibilityToggle />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
