import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
import Analytics from "./components/Analytics";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import BackToTop from "./components/BackToTop";
import AccessibilityToggle from "./components/AccessibilityToggle";
import CookieConsent from "./components/CookieConsent";

const Home = lazy(() => import("./pages/Home"));
const Tennis = lazy(() => import("./pages/Tennis"));
const Golf = lazy(() => import("./pages/Golf"));
const Gym = lazy(() => import("./pages/Gym"));
const Pickleball = lazy(() => import("./pages/Pickleball"));
const Summer = lazy(() => import("./pages/Summer"));
const Membership = lazy(() => import("./pages/Membership"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Policies = lazy(() => import("./pages/Policies"));
const FAQ = lazy(() => import("./pages/FAQ"));
const ProShop = lazy(() => import("./pages/ProShop"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoading() {
  return (
    <div className="min-h-screen bg-parchment text-ink flex items-center justify-center px-6">
      <p className="text-[12px] tracking-[0.18em] uppercase text-ink-light">
        Loading
      </p>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tennis" component={Tennis} />
        <Route path="/golf" component={Golf} />
        <Route path="/gym" component={Gym} />
        <Route path="/pickleball" component={Pickleball} />
        <Route path="/summer" component={Summer} />
        <Route path="/membership" component={Membership} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/policies" component={Policies} />
        <Route path="/faq" component={FAQ} />
        <Route path="/pro-shop" component={ProShop} />
        <Route path="/terms">{() => <Redirect to="/policies" />}</Route>
        <Route path="/fitness">{() => <Redirect to="/gym" />}</Route>
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Analytics />
          <Toaster />
          <main id="main-content">
            <Router />
          </main>
          <BackToTop />
          <AccessibilityToggle />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
