import { Model, Str, Num } from '@vuex-orm/core';

export default class File extends Model {
    static entity = 'files';
    static primaryKey = '_id';

    @Uid()
    _id!: string;

    @Str(null, { nullable: true })
    filename!: string | null;

    @Str(null, { nullable: true })
    type!: string | null;

    @Str(null, { nullable: true })
    language!: string | null;

    @Str(null, { nullable: true })
    raw_url!: string | null;

    @Num(null, { nullable: true })
    size!: number | null;
}
