"use server";

import { signIn, signOut } from "@/features/skills/service";

export async function logOutAction(){
  await signOut({ redirectTo: "/login" });
}

export async function loginAction(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      // redirectTo: "/dashboard",
      redirect: false,
    });

    
    return {
      success: true,
      message: "Login successful.",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
        
          console.log(
            {
              message: `Login Attempt (loginAction) Invalid email or password for ${formData.get("email")}`,
            }
          );

          return {
              success: false,
              message: `Invalid credentials`,
            };

        default:
          return {
            success: false,
            message: `Authentication failed for ${formData.get("email")}`,
          };
      }
    }

    throw error;
  }
}