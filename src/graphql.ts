
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Author {
    id: string;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}

export class Post {
    id: string;
    authorId: string;
    title: string;
    votes?: number;
}

export abstract class IQuery {
    abstract author(id?: string): Author | Promise<Author>;

    abstract authors(): Author[] | Promise<Author[]>;
}
