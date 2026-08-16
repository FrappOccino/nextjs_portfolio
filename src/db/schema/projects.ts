import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title"),
    link: text("link"),
    description: text("description"),
    thumb_nail: text("thumb_nail"),
});