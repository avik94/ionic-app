export class Booking {
    constructor(
        public id: string,
        public userId: string,
        public placeId: string,
        public placeTitle: string,
        public numberOfGuest: string,
        public firstName: string,
        public lastName: string,
        public fromDate: string,
        public toDate: string
    ) {}
}
