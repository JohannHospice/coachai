import { Footer } from "../Footer";
import { Header } from "../Header";
import { BlobBackground } from "../BlobBackground";

export default function OutletWrapper({ children }: { children: any }) {
  return (
    <div className="text-white min-h-screen flex flex-col bg-gray-950 z-0 relative overflow-x-hidden">
      <Header />
      <div className="flex flex-1 items-center">{children}</div>
      <BlobBackground />
      <Footer />
    </div>
  );
}
