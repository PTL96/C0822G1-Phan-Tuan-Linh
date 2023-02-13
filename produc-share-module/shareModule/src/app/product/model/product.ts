import {Category} from "./category";

export interface Product {
  id?: number,
  code?: string,
  name?: string,
  price?: number,
  starDay?: string,
  origin?: string,
  other?: string,
  category?: Category
}
