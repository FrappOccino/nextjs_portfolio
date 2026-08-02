// app/(auth)/login/actions.ts

"use server";

import { login } from '@/features/auth/service';
import { redirect } from 'next/navigation';


export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {

    const user = await login({ email: email, password: password });

  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "An error occurred during login",
    }
  }

  //     if(user.success){
  //     redirect("/dasboard");
  // }

  redirect("/dashboard");
}
