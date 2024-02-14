import Image from "next/image";
import { Button } from "primereact/button";
export default function Home() {
  return (
    <>
      {" "}
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
      <main>
        <div className="card flex justify-content-center">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Button
          </button>
        </div>
      </main>
    </>
  );
}
