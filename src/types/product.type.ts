export interface TProduct {
  id: string;
  name: string;
  image: string;
  colors: string[];
  size: string;
  brand: string;
  condition: string;
  status: "all" | "unsold" | "sold" | "draft";
}
