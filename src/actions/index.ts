"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache"
export const saveSnippet = async (id: number, code: string, title: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
      title,
    },
  });
  
  revalidatePath(`/snippet/${id}`);
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect("/");
};

export async function createSnippet(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");
    if (!title) {
      return { message: "Title is required" };
    }
    if (typeof title !== "string" || title.length < 4) {
      return {
        message:
          "Title must be a string and should have more that 4 characters.",
      };
    }
    if (!code) {
      return { message: "code is required" };
    }
    if (typeof code !== "string" || code.length < 8) {
      return {
        message:
          "Code must be a string and should have more that 8 characters.",
      };
    }
    await prisma.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });
    // throw new Error("Ooops something went wrong");
  } catch (error: unknown) {
    if(error instanceof Error){
        return { message: error.message}
    }else{
        return {message:"Some internal server error"}
    }
}

revalidatePath("/");
  redirect("/");
}
