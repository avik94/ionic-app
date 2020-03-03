import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {

    private placesList: Place[] = [
        new Place('p1', 'Manhattan', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/31/09/new-york-main-image.jpg', 'Place to spent time with joy', 'New York', 99.00, new Date('2019-07-01'), new Date('2019-12-01')),
        new Place('p2', 'Paris', 'https://www.leschaco.com/fileadmin/user_upload/leschaco_logistics_france_europe_sea_air_freight_tank_container_warehousing_supply_chain_solutions.png', 'Romantc for Couple', 'France', 79.00, new Date('2019-07-01'), new Date('2019-12-01')),
        new Place('p3', 'San Fransisco', 'https://s3.envato.com/files/232505539/IMG_0315.jpg', 'Silicon Valley', 'USA', 19.00, new Date('01-07-2019'), new Date('01-12-2020')),
    ];

    public getPlacesList() {
        return [...this.placesList];
    }

    public getPlaceById(id: string) {
        return this.placesList.find((el) => {
            return (el.id === id);
        });
    }
}
