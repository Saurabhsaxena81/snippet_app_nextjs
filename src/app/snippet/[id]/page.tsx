import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import * as actions from "@/actions";
const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  // await new Promise((r) => setTimeout(r, 2000));
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) {
    return <div>Snippet not found</div>;
  }
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center  items-center ">
        <Link
          href="/"
          className="text-blue-500 font-bold w-fit hover:underline"
        >
          <Button className="cursor-pointer">Home</Button>{" "}
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl capitalize">{snippet.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button className="cursor-pointer">Edit</Button>
          </Link>

          <form action={deleteSnippetAction}>
            <Button
              className="cursor-pointer"
              variant={"destructive"}
              type="submit"
            >
              Delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();
  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
};
