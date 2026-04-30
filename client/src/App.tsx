import { lazy, Suspense, useEffect } from "react";
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

const COURT_RESERVE_URL = "https://app.courtreserve.com/Online/Portal/Index/6689";

const legacyRedirects = [
  { from: "/about-wsc", to: "/about" },
  { from: "/about-3", to: "/about" },
  { from: "/contact-us", to: "/contact" },
  { from: "/faqs", to: "/faq" },
  { from: "/membership-agreement", to: "/policies" },
  { from: "/membership-policies", to: "/policies" },
  { from: "/member-request", to: "/contact" },
  { from: "/newsletter-signup", to: "/contact" },
  { from: "/areasweserve", to: "/about" },
  { from: "/careers", to: "/contact" },
  { from: "/main-gym", to: "/gym" },
  { from: "/apl-training-center", to: "/gym" },
  { from: "/strength-and-conditioning", to: "/gym" },
  { from: "/tier-1-performance", to: "/gym" },
  { from: "/performance-training-team", to: "/gym" },
  { from: "/adult-wsc-tennis", to: "/tennis" },
  { from: "/copy-of-tennis", to: "/tennis" },
  { from: "/tier1coreitennis", to: "/tennis" },
  { from: "/usta", to: "/tennis" },
  { from: "/sact", to: "/tennis" },
  { from: "/racket-stringing", to: "/pro-shop" },
  { from: "/tier1golfacademy", to: "/golf" },
  { from: "/golf-coaching", to: "/golf" },
  { from: "/camps", to: "/summer" },
  { from: "/copy-of-camps", to: "/summer" },
  { from: "/summer-camps-tennis", to: "/summer" },
  { from: "/summer-camps-golf", to: "/summer" },
  { from: "/summer-camps-adventureclub", to: "/summer" },
  { from: "/pickleball-camp", to: "/summer" },
  { from: "/copy-of-adventure-camp", to: "/summer" },
  { from: "/copy-of-tennis-camp", to: "/summer" },
  { from: "/copy-of-golf-camp", to: "/summer" },
  { from: "/registration-instructions", to: "/summer" },
  { from: "/summer-camp-signup", to: "/summer" },
  { from: "/copy-of-2025-summer-camp-sign-up", to: "/summer" },
  { from: "/food-trucks", to: "/contact" },
  { from: "/events-1", to: "/contact" },
  { from: "/testimonials", to: "/about" },
  { from: "/upcoming-session-dates", to: "/contact" },
  { from: "/personal-training-interest-form", to: "/gym" },
  { from: "/matpilates", to: "/gym" },
] as const;

function PageLoading() {
  return (
    <div className="min-h-screen bg-parchment text-ink flex items-center justify-center px-6">
      <p className="text-[12px] tracking-[0.18em] uppercase text-ink-light">
        Loading
      </p>
    </div>
  );
}

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return <PageLoading />;
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
        {legacyRedirects.map(({ from, to }) => (
          <Route key={from} path={from}>
            {() => <Redirect to={to} />}
          </Route>
        ))}
        <Route path="/book">
          {() => <ExternalRedirect to={COURT_RESERVE_URL} />}
        </Route>
        <Route path="/book-online">
          {() => <ExternalRedirect to={COURT_RESERVE_URL} />}
        </Route>
        <Route path="/blog">{() => <Redirect to="/" />}</Route>
        <Route path="/blog/:rest*">{() => <Redirect to="/" />}</Route>
        <Route path="/post/:slug">{() => <Redirect to="/" />}</Route>
        <Route path="/courses">{() => <Redirect to="/summer" />}</Route>
        <Route path="/courses/:slug">{() => <Redirect to="/summer" />}</Route>
        <Route path="/adult-rpm-classes/:slug">{() => <Redirect to="/tennis" />}</Route>
        <Route path="/event-details-registration/:slug">{() => <Redirect to="/contact" />}</Route>
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
