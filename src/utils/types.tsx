export interface Product {
  title: string;
  category: string;
  description: string;
  "age-restriction"?: string;
  link: string;
}

export interface Game extends Product {
    productName: "games"
}
export interface Movie extends Product {
    productName: "movies"
}
export interface TVShow extends Product {
    productName: "tv-shows"
}
export interface Stream extends Product {
    productName: "streams"
}

