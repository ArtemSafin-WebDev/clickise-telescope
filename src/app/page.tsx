import Intro from "./components/intro/Intro";
import Prepare from "./components/prepare/Prepare";
import Features from "./components/features/Features";
import Callback from "./components/callback/Callback";
import Benefits from "./components/benefits/Benefits";
import CallbackModal from "./components/callbackModal/CallbackModal";
import Analytics from "./components/analytics/Analytics";

export default function Home() {
  return (
    <>
      <Intro />
      <Prepare />
      <Features />
      <Analytics />
      <Benefits />
      <Callback />
      <CallbackModal />
    </>
  );
}
