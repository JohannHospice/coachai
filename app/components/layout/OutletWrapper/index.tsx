import { Footer } from "../Footer";
import { Header } from "../Header";

export default function OutletWrapper({ children }: { children: any }) {
  return (
    <>
      <Header />
      <div className="flex flex-1 items-center pb-16">{children}</div>
      <Footer />
    </>
  );
}
