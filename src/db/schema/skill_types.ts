import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const skill_types = sqliteTable("skill_types", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    type: text("type"),
});