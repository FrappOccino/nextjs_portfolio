import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const skills = sqliteTable("skills", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title"),
    href: text("href"),
    icon: text("icon"),
    type: integer("type"),
});