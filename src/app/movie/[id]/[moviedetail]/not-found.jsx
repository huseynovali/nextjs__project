import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="absolute w-full h-screen bg-slate-600 text-white flex flex-col justify-center items-center z-50">
      <h2 className="text-[50px]">Movie not found !</h2>

      <p>
        <Link href="/">Go Back</Link>
      </p>
    </div>
  );
}
