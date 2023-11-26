import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="absolute w-full h-screen bg-slate-600 text-white flex flex-col justify-center items-center z-50 top-0">
      <h2 className="text-[50px]">Page not found !</h2>

      <p>
        <Link href="/home">Go Back</Link>
      </p>
    </div>
  );
}
