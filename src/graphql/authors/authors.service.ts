import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  private authors = [
    { id: "1", firstName: 'mark', lastName: 'geboff' },
    { id: "2", firstName: 'stacey', lastName: 'geboff' },
    { id: "3", firstName: 'nathan', lastName: 'geboff' },
    { id: "4", firstName: 'noah', lastName: 'geboff' },
  ];

  getAuthors() {
    return this.authors;
  }

  getAuthor(id: string) {
    // id needs to be a string!
    return this.authors.find(a => a.id === id);
  }
}
