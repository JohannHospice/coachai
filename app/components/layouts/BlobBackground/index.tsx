export function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden blur-[128px]">
      <div
        className="absolute inset-0 m-auto
          animate-blob
          rounded-[100%] h-[50vh] w-[50vh] 
          bg-gradient-to-t from-red-600 via-orange-600 to-blue-600
          opacity-25
          "
      />
    </div>
  );
}
