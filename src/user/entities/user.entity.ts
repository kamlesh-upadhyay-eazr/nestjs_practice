import { BaseEntity } from "src/base-entity";
import { CompanyEntity } from "src/companies/companies.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @ManyToOne(() => CompanyEntity,(company) =>company.user)
    company: CompanyEntity;

    // @ManyToOne(type => CompanyEntity,{eager: true})
    // company: CompanyEntity;
    // generate code for nest js postgres ManyToOne relation?
}
