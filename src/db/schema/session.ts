import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const sessionsTable = sqliteTable("sessions", {
    id: text("id").primaryKey(),
    userId: integer("user_id").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});
