// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { LocationService } from './location.service';
// import { CreateLocationDto } from './dto/create-location.dto';
// import { UpdateLocationDto } from './dto/update-location.dto';

// @Controller('location')
// export class LocationController {
//   constructor(private readonly locationService: LocationService) {}

//   @Post()
//   create(@Body() createLocationDto: Location) {
//     return this.locationService.create(createLocationDto);
//   }

//   @Get()
//   findAll() {
//     return this.locationService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.locationService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
//     return this.locationService.update(+id, updateLocationDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.locationService.remove(+id);
//   }
// }


import { Body, Controller, Get, Post } from '@nestjs/common';
import { Location } from 'src/location/entities/location.entity';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private serv: LocationService) { }

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }

  @Post()
  createLocation(@Body() location: Location): void {
    this.serv.create(location);
  }
  
  @Post('range')
  public async getRange(@Body() location: {
    lat: number,
    long: number,
    range: number
  }) {
    return await this.serv.getRange(location.lat, location.long, location.range);
  }
}