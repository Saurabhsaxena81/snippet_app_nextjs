"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import type { snippet } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const [title, setTitle] = useState(snippet.title);

  const changeCodeHandler = (value: string = "") => {
    setCode(value);
  };

  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // const saveSnippetAction = async () => {

  //   await saveSnippet(snippet.id, code, title); // Make sure saveSnippet accepts title too
  // };

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code, title);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Edit Your Snippet</h1>

      <form
        action={saveSnippetAction}
        className="flex items-center justify-between gap-4"
      >
        <input
          type="text"
          value={title}
          onChange={changeTitleHandler}
          className="flex-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter snippet title"
        />
        <Button type="submit" className="bg-green-500">
          Save
        </Button>
      </form>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        value={code}
        theme="vs-dark"
        onChange={changeCodeHandler}
      />
    </div>
  );
};

export default EditSnippetForm;

// "use client"
// import React ,{useState} from 'react'
// import { Editor } from '@monaco-editor/react'
// import type { Snippet } from '@prisma/client';
// import { Button } from './ui/button';
// import {saveSnippet}from "@/actions";
// const EditSnippetForm = ({snippet}:{snippet:Snippet}) => {
//     const [code , setCode] = useState(snippet.code);

//   const changeEventHandler = (value:string ="")=>{
//     setCode(value);
//   }

//     const saveSnippetAction = saveSnippet.bind(null,snippet.id,code);
//   return (
//     <div className='flex flex-col gap-4'>
//         <form action={saveSnippetAction} className='flex items-center justify-between '>
//             <h1 className='font-bold text-xl'>Your code editor</h1>
//             <Button type='submit' className='bg-green-500'>Save</Button>
//         </form>
//       <Editor
//               height="40vh"
//               defaultLanguage="javascript"
//               defaultValue={code}
//               theme="vs-dark"
//               onChange={changeEventHandler}
//             />
//     </div>
//   )
// }

// export default EditSnippetForm;
