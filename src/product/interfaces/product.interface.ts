// Los interface definen lo que estoy escribiendo en mi codigo

export interface Product {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly createdAt: Date;
}