import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username:'postgres',
    password:'Eazr@123',
    port: 5432,
    host:'127.0.0.1',
    database:"NestNew_DB",
    entities: ["dist/**/*.entity{.ts,.js}"],
    // entities: ['dist/src/**/*.entity{.ts,.js}'],
    synchronize: true,
};