import { Model, Attr, Str, HasMany, Num } from '@vuex-orm/core';
import Gists from './gists';

export default class User extends Model {
    static entity = 'users';
    static primaryKey = 'id';

    @Attr(null)
    id!: number | null;

    @Str(null, { nullable: true })
    login!: string | null;

    @Str(null, { nullable: true })
    node_id!: string | null;

    @Str(null, { nullable: true })
    avatar_url!: string | null;

    @Str(null, { nullable: true })
    gravatar_id!: string | null;

    @Str(null, { nullable: true })
    url!: string | null;

    @Str(null, { nullable: true })
    html_url!: string | null;

    @Str(null, { nullable: true })
    followers_url!: string | null;

    @Str(null, { nullable: true })
    following_url!: string | null;

    @Str(null, { nullable: true })
    gists_url!: string | null;

    @Str(null, { nullable: true })
    starred_url!: string | null;

    @Str(null, { nullable: true })
    subscriptions_url!: string | null;

    @Str(null, { nullable: true })
    organizations_url!: string | null;

    @Str(null, { nullable: true })
    repos_url!: string | null;

    @Str(null, { nullable: true })
    events_url!: string | null;

    @Str(null, { nullable: true })
    received_events_url!: string | null;

    @Str(null, { nullable: true })
    type!: string | null;

    @Attr(false)
    site_admin!: boolean;

    @Str(null, { nullable: true })
    name!: string | null;

    @Str(null, { nullable: true })
    company!: string | null;

    @Str(null, { nullable: true })
    location!: string | null;

    @Str(null, { nullable: true })
    email!: string | null;

    @Str(null, { nullable: true })
    blog!: string | null;

    @Attr(false)
    hireable!: boolean;

    @Str(null, { nullable: true })
    bio!: string | null;

    @Str(null, { nullable: true })
    twitter_username!: string | null;

    @Num(null, { nullable: true })
    public_repos!: number | null;

    @Num(null, { nullable: true })
    public_gists!: number | null;

    @Num(null, { nullable: true })
    followers!: number | null;

    @Num(null, { nullable: true })
    following!: number | null;

    @Str(null, { nullable: true })
    created_at!: string | null;

    @Str(null, { nullable: true })
    updated_at!: string | null;

    // @HasMany(() => Gists, 'id')
    // gists!: Gists[];

    get fullPersonalInformation(): string {
        return `Nome: ${this.name} - Username: ${this.login} - 'Email: ${this.email}`;
    }
}
