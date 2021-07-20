import { Collection, Model } from '@vuex-orm/core';
import { format } from 'date-fns';

export default class Gists extends Model {
    static entity = 'gists';

    static fields(): any {
        return {
            id: this.attr(null),
            url: this.attr(null),
            node_id: this.attr(null),
            forks_url: this.attr(null),
            commits_url: this.attr(null),
            git_pull_url: this.attr(null),
            git_push_url: this.attr(null),
            html_url: this.attr(null),
            files: this.attr(null),
            public: this.boolean(false),
            created_at: this.attr(null),
            updated_at: this.attr(''),
            description: this.attr(null),
            comments: this.number(0),
            user: this.attr(null),
            comments_url: this.attr(null),
            owner: this.attr(null),
            truncated: this.boolean(false)
        };
    }

    get updated_at_formated(): string {
        const data = JSON.parse(JSON.stringify(this));
        return format(new Date(data.updated_at), 'dd/MM/yyyy H:mm:ss');
    }

    get created_at_formated(): string {
        const data = JSON.parse(JSON.stringify(this));
        return format(new Date(data.created_at), 'dd/MM/yyyy H:mm:ss');
    }

    get sum_files(): number {
        const data = JSON.parse(JSON.stringify(this));
        return data.files ? Object.keys(data.files).length : 0;
    }

    get file_types_formated(): string {
        const data = JSON.parse(JSON.stringify(this));
        let response_html = '';
        Object.getOwnPropertyNames(data.files)
            .sort()
            .forEach((element) => {
                const dados_file = data.files[element];
                response_html += ` <a href="${dados_file.raw_url}" download target="_blank">${element}</a> <br /> `;
            });

        return response_html;
    }
}
