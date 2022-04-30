export class IUpdate{
    constructor(
        public id: string | null,
        public status: string | null,
        public date: string | null,
        public bank: string | null
    ){}
}