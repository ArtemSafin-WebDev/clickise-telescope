import Analytics from "./components/Analytics";
import Benefits from "./components/Benefits";
import Callback from "./components/Callback";
import CallbackModal from "./components/CallbackModal";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Prepare from "./components/Prepare";

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
