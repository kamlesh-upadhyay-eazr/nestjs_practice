import { Controller, Delete, Get, Patch, Post, Put, Body, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserService } from 'src/user/user.service';
import { CompanyDto } from './companies.dto';
import { CompanyEntity } from './companies.entity';
import { CompaniesService } from './companies.service';

@Crud({
    model: {
        type: CompanyEntity
    },
    
    query: {
        join: {
            user : {
                eager: true,
            }
        }
    }
})

@Controller('companies')
export class CompaniesController implements CrudController<CompanyEntity> {

    constructor(public service: CompaniesService
        //  private readonly usersServices: UserService
         ) {}
    }

    
    // add company
    // @Post()
    // create(@Body() companyDto: CompanyDto) {
    //     // const user = this.usersServices.findOne(companyDto.companyId)
    //     return this.companiesServices.create(companyDto);
    // }

    // Get All Companies
    // @Get()
    // findAll() {
    //     return this.companiesServices.findAll();
    // }

    // Get single Company
    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.companiesServices.findOne(+id);
    // }

    // Update Company
    // @Patch(':id')
    // update(@Param('id') id: string ,@Body() updatecompanyDto: CompanyDto) {
    //     return this.companiesServices.update(+id, updatecompanyDto);
    // }

    // delete company
    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.companiesServices.remove(+id);
    // }
// }

