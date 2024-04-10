import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="h-screen flex flex-col text-white">
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
