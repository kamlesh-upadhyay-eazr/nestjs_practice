import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CompanyDto } from './companies.dto';
import { CompanyEntity } from './companies.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { v4 as uuid4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CompaniesService extends TypeOrmCrudService<CompanyEntity> {
    // public companies: CompanyDto[] = [];
    // public repository: Repository<CompanyEntity> = null;

    constructor(@InjectRepository(CompanyEntity) repo,
    ) {
        super(repo);
        // this.repository = repository;
    }

}
