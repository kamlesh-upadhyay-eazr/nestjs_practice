import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { CompaniesController } from './companies.controller';
import { CompanyEntity } from './companies.entity';
import { CompaniesService } from './companies.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule {
  constructor() {
    console.log("Company Module");
  }
}
