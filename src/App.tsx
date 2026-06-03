import LenisProvider from "./providers/LenisProvider";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LenisProvider />

      <div className="min-h-screen bg-black text-white">
        {children}
      </div>
    </>
  );
}

export default App;