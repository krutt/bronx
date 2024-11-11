import { ConnectButton } from "@mysten/dapp-kit";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav>
          <ConnectButton />
        </nav>
        <section>Hello, world</section>
      </div>
    </>
  );
}

export default App;
