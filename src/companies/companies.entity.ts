import { BaseEntity } from "src/base-entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity ('companies' )
export class CompanyEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: String;

    @Column({ type:'varchar', length: 100, nullable:true})
    location: String;

    @Column({type:'text', nullable:true, default:null})
    branch: number;

    // @Column({ nullable: true })
    // user: User;

    @OneToMany(() => User, (user)=>user.company, {cascade: true, eager: true} )
    user: User[];

    // @ManyToOne(type => User, {eager: true})
    // user: User
}