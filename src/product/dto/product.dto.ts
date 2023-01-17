// Vamos a definir un objeto de Typescript

// El DTO define lo que voy a estar enviando y recibiendo

export class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly createAt: Date;
}