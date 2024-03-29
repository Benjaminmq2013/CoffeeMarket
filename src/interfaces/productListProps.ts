export interface productListProps {
    product_id: string,
    product_title: string,
    product_description: string,
    product_price: number,
    product_offer_price: number,
    cooperative: string,
    form: string,
    brand: string,
    certifications: boolean,
    initial: number,
    sold: number,
    stock: number,
    department: string,
    municipality: string,
    zone: string,
    weight: number,
    height: string,
    descriptive_height: string,
    type: string,
    mix: string,
    toasted_level: string,
    process: string,
    acidity: string,
    image_url: string,
    cart_product_quantity: number;
}