import { DotLoader } from "react-spinners";

export default function LoadingIndicator() {
  return (
    <div className="fixed z-50 flex h-screen w-screen items-center justify-center gap-5 bg-black/90 backdrop-blur-md">
      <DotLoader color="#FDE046" />
      <div className="relative">
        <h1 className="font-sans text-5xl font-semibold tracking-[0.2rem] text-white">
          Cyber
        </h1>
        <p className="absolute right-0 animate-pulse rounded-l-lg rounded-br-xl rounded-tr-3xl bg-yellow-300 px-3 text-xl text-black">
          Lofi
        </p>
      </div>
    </div>
  );
}
