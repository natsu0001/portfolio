import LenisProvider from "./providers/LenisProvider";
import DotBackground from "./components/dot-background-demo";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LenisProvider />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <DotBackground />
      </div>

      <div className="relative min-h-screen overflow-x-hidden text-white">
        {children}
      </div>
    </>
  );
}

export default App;