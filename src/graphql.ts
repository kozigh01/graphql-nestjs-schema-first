
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Post {
    id: number;
    title: string;
    votes?: number;
}

export interface Author {
    id: number;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}

export interface IQuery {
    authors(): Author[] | Promise<Author[]>;
}
