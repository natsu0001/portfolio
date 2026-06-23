import LenisProvider from "./providers/LenisProvider";
import DotBackground from "./components/dot-background-demo";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LenisProvider />

      <div className="relative min-h-screen text-white">
        <DotBackground />

        <div className="relative z-10">
          {children}
        </div>
      </div>
    </>
  );
}

export default App;