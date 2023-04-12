import { BlobBackground } from "~/components/layout/BlobBackground";

export function SuspenseLoader({
  loading,
  children,
}: {
  loading: boolean;
  children: any;
}) {
  return (
    <>
      <div className={loading ? "overflow-hidden h-0" : ""}>{children} </div>
      <div
        className={
          "fixed inset-0 z-10 overflow-hidden bg-gray-950 transition-opacity duration-500 transition-[visible 1s] " +
          (loading ? "opacity-100 visible" : "opacity-0 invisible")
        }
      >
        <div
          className="absolute inset-0 m-auto
            animate-spin
            rounded-[100%] h-80 w-80
            bg-gradient-to-t from-red-600 via-orange-600 to-blue-600
            after:absolute after:inset-0 after:m-8
            after:rounded-[100%] after:bg-gray-950
          "
        />
        <BlobBackground />
      </div>
    </>
  );
}
