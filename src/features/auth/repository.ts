import { eq } from "drizzle-orm";
import { db } from "@/db";
import { usersTable } from "@/db/schema/index";

export async function findByEmail(email: string) {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  return user ?? null;
}