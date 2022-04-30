export class IOrder{
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public email: string,
        public phone: number,
        public cost: number
    ){}
}