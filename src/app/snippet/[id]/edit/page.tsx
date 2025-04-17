import EditSnippetForm from "@/components/EditSnippetForm";
import  {prisma } from "@/lib/prisma";
import React from "react";

const EditPageSnippet = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1>Snippet not found</h1>;

  return <EditSnippetForm snippet = {snippet}/>;
};

export default EditPageSnippet;
// import React from "react";
// import EditSnippetForm from "@/components/EditSnippetForm";
// import { prisma } from "@/lib/prisma";


// const EditPageSnippet = async ({ params }) => {
//   const id = parseInt(params.id);
// //   await new Promise((r) => setTimeout(r, 2000)); // Simulate a delay

//   const snippet = await prisma.snippet.findUnique({
//     where: {
//       id,
//     },
//   });

//   if (!snippet)   if (!snippet) return <h1>Snippet not found</h1>;

//   return <EditSnippetForm snippet={snippet} />;
// };

// export default EditPageSnippet;
