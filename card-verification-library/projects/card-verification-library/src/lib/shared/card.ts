

export class Card {
    Name!: string;
    CardNumber!: number;
    Type!: string;
    Cvc!: number;
    ExpDate!: Date;
    BillingAddress!: Address
}


export class Address {
    Adder1!: string;
    Adder2!: string;
    City!:string;
    State!: string;
    postalCode!: string;
}