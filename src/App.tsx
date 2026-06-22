import LenisProvider from "./providers/LenisProvider";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LenisProvider />

      <div className="relative min-h-screen text-white">
  <div className="fixed inset-0 bg-black" />
  <div className="fixed inset-0 bg-grid-large" />

  <div className="relative z-10">
    {children}
  </div>
</div>
    </>
  );
}

export default App;