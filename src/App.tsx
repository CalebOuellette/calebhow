import { createSignal } from "solid-js";
import "./App.css";
import mePng from "/me.png";

function App() {
  const [copied, setCopied] = createSignal(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("caleb.ouellette@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <main
        class="relative h-screen flex flex-col items-center justify-center gap-6"
        style="background: #ffffff"
      >
        <img
          src={mePng}
          alt="Caleb Ouellette"
          class="w-20 h-20 rounded-full object-cover"
        />
        <h1 class="font-libre-baskerville text-5xl tracking-tight text-gray-900">
          Caleb Ouellette
        </h1>
        <p class="text-gray-500 text-base max-w-sm text-center leading-relaxed">
          Senior software engineer at Ai2 and founder of Dialed Software.
          Previously co-founded Rendition, a VC-backed AI coding tool.
        </p>
        <p class="absolute bottom-6 text-gray-400 text-sm">Seattle, WA</p>
      </main>

      <section
        class="h-[100px] flex items-center justify-center"
        style="background-color: #ffffff"
      >
        <div class="text-center">
          <p class="text-sm text-gray-500">Feel free to email me</p>
          <p
            class="text-sm text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
            onClick={copyEmail}
          >
            {copied() === true ? "copied!" : "caleb.ouellette@gmail.com"}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
