import { BaseEntity } from "src/base-entity";
import { Column, Index, PrimaryGeneratedColumn } from "typeorm";
import {Geometry, Point} from "geojson";

export class Location extends BaseEntity {
    @PrimaryGeneratedColumn()
    locationId: number;

    @Column()
    city: string;

    @Column()
    lat: number;
    
    @Column()
    long: number;

    @Index({ spatial: true })
    @Column({
        type: 'geography',
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true,
    })
    location: Point
}
