import { db } from "@/db";
import {
    eq,
    type SQL,
} from "drizzle-orm";

export abstract class BaseRepository<TTable extends Record<string, any>> {

    protected readonly db = db;
    protected readonly table: TTable;

    constructor(table: TTable) {
        this.table = table;
    }

    async findAll() {
        return await this.db
            .select()
            .from(this.table as any);
    }

    async findById(id: number) {
        const result = await this.db
            .select()
            .from(this.table as any)
            .where(
                eq(
                    (this.table as any).id,
                    id
                )
            )
            .limit(1);

        return result[0];
    }

    async create(data: any) {
        const result = await this.db
            .insert(this.table as any)
            .values(data);

        return result;
    }

    async update(
        id: number,
        data: Record<string, unknown>
    ) {
        const result = await this.db
            .update(this.table as any)
            .set(data)
            .where(
                eq(
                    (this.table as any).id,
                    id
                )
            )
            .returning();

        return result[0];
    }

    async delete(id: number) {
        const result = await this.db
            .delete(this.table as any)
            .where(
                eq(
                    (this.table as any).id,
                    id
                )
            );

        return result;
    }
}