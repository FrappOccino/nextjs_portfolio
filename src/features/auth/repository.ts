import { eq } from "drizzle-orm";
import { and } from "drizzle-orm";
import { db } from "@/db";
import { users as usersTable }  from "@/db/schema/user";
import bcrypt from "bcryptjs";

export async function findByEmail(email: string) {
  console.log("FIND BY EMAIL REPOSITORY :", email);
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  return user ?? null;
}


export async function getUserFromDb(email: string, password: string) {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(
      and(
        eq(usersTable.email, email),
        eq(usersTable.password, password)
      )
    );

  return user ?? null;
}
