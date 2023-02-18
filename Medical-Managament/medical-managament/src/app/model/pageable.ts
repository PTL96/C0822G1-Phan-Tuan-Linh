import {Medical} from "./medical";

export interface Pageable {
  content: Medical[];
  pageable: {
    sort: {
      empty: true,
      sorted: false,
      "unsorted": true
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 2,
    unpaged: false,
    paged: true
  },
  totalElements: 4,
  totalPages: 2,
  last: false,
  size: 2,
  number: 0,
  sort: {
    empty: true,
    sorted: false,
    unsorted: true
  },
  numberOfElements: 2,
  first: true,
  empty: false
}
