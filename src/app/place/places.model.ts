export class Place {
    constructor(
        public id: string,
        public name: string,
        public imageUrl: string,
        public description: string,
        public location: string,
        public price: number,
        public toDate: Date,
        public fromDate: Date
    ) {}
}
