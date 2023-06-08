import "@/styles/global.css";
import { NavBar } from "@/components";

function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
