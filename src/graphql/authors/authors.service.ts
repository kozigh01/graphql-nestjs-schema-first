import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  private authors = [
    { id: 1, firstName: 'mark', lastName: 'geboff' },
    { id: 3, firstName: 'nathan', lastName: 'geboff' },
    { id: 4, firstName: 'noah', lastName: 'geboff' },
  ];

  getAuthors() {
    return this.authors;
  }

  getAuthor(id: number) {
    return this.authors.find(a => a.id === id);
  }
}
