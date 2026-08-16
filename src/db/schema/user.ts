import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

// export const usersTable = sqliteTable("users", {
//     id: int().primaryKey({ autoIncrement: true }),
//     name: text().notNull(),
//     age: int().notNull(),
//     email: text().notNull().unique(),
// });


export const users = sqliteTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    password: text("password"),
    emailVerified: int("emailVerified", { mode: "timestamp_ms" }),
    image: text("image"),
})