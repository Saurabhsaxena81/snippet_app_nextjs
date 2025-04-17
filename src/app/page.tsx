import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

//disable the caching 
// export const dynamic = "force-dynamic"
// export const revalidate = 0;

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-2xl align-middle flex justify-center italic">
        Home 👋
      </h1>
      <div className="flex items-center justify-between">
        <h1 className=" capitalize  font-bold text-2xl italic px-2">
          snippets
        </h1>
        <Link href={"/snippet/new"}>
          <Button className="bg-gray-600 text-white m-2">New</Button>{" "}
        </Link>
      </div>
      {snippets.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="font-bold text-2xl">No snippets found</h1>
          <p className="text-gray-500">Create a new snippet to get started</p>
        </div>
      ) : (
        snippets.map((snippet, index) => (
          <div
            key={snippet.id}
            className={`flex items-center justify-between border rounded-md p-4 my-4 
            ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
          >
            <h2 className="font-bold text-lg capitalize">{snippet.title.toLowerCase()}</h2>
            <Link href={`/snippet/${snippet.id}`}>
              <Button>View</Button>
            </Link>
          </div>
        ))
      )}

    </div>
  );
}
