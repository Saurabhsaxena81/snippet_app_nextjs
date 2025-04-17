"use client"
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import * as actions from "@/actions"
const CreateSnippetPage = () => {
  const [formSateData , xyz] = useActionState(actions.createSnippet , {message:""});
 
  return (
    <div className="p-7 m-2  h-110 rounded-md border-2 border-dashed">
      <form action={xyz}  >
      <div>
        <Label className="my-4"> Title</Label>
        <Input type="text" name="title" id="title"></Input>
      </div>
      <div>
        <Label className="my-4"> Code</Label>
        <Textarea name="code" id="code"></Textarea>
      </div>
      {formSateData.message && <div className="text-xl p-2 my-2 border-2 rounded-md  bg-red-200 border-red-700 ">{formSateData.message}.</div>}
      <Button type="submit"  className="my-4 cursor-pointer">
        Create
      </Button>
    </form>
    </div>
  );
};

export default CreateSnippetPage;
