export interface Product {
    id: number | string,
    title: string,
    company: string,
    content: string,
    price: number,
    discountPercentage?: number,
    images: Image[]
}

export type Image = {
    url: string,
    thumbnail: string
}

export interface Order {
    product: Product,
    qty: number
}
