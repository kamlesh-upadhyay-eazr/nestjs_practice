// import { Injectable } from '@nestjs/common';
// import { CreateLocationDto } from './dto/create-location.dto';
// import { UpdateLocationDto } from './dto/update-location.dto';

// @Injectable()
// export class LocationService {
//   create(createLocationDto: CreateLocationDto) {
//     return 'This action adds a new location';
//   }

//   findAll() {
//     return `This action returns all location`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} location`;
//   }

//   update(id: number, updateLocationDto: UpdateLocationDto) {
//     return `This action updates a #${id} location`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} location`;
//   }
// }


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'src/location/entities/location.entity';
import { getManager, QueryBuilder, Repository } from 'typeorm';
import { Geometry, Point } from 'geojson';
@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location) private readonly repo: Repository<Location>,
  ) { }

  public async getAll() {
    return await this.repo.find();
  }

  public async create(location: Location) {
    
    const pointObject: Point = {
      type: "Point",
      coordinates: [location.long, location.lat]
    };
    location.location = pointObject;
    return await this.repo.save(location)
  }

  public async getRange(lat: number, long: number, range: number = 1000) {
    let origin = {
      type: "Point",
      coordinates: [long, lat]
    };
    let locations = await this.repo
      .createQueryBuilder('t_test_location')
      .select(['t_test_location.city AS city', 'ST_Distance(location, ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location)))/1000 AS distance'])
      .where("ST_DWithin(location, ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location)) ,:range)")
      .orderBy("distance", "ASC")
      .setParameters({
        // stringify GeoJSON
        origin: JSON.stringify(origin),
        range: range * 1000 //KM conversion
      })
      .getRawMany();
    return locations;
  }
}
