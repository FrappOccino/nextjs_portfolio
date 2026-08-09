import { sqliteTable, text } from "drizzle-orm/sqlite-core";


export const users = sqliteTable("skills", {
    id: text("id").primaryKey(),
    title: text("title"),
    href: text("href"),
    icon: text("icon"),
})