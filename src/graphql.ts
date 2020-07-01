
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Author {
    __typename?: 'Author';
    id: string;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}

export interface Post {
    __typename?: 'Post';
    id: string;
    authorId: string;
    title: string;
    votes?: number;
}

export interface IQuery {
    __typename?: 'IQuery';
    author(id?: string): Author | Promise<Author>;
    authors(): Author[] | Promise<Author[]>;
}
