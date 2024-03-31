import {BaseEntity, Column, Entity, PrimaryColumn, Unique} from 'typeorm'

@Entity('User')
@Unique(['username', 'email'])
export class Users extends BaseEntity {
    @PrimaryColumn({ type: 'int', unsigned: true })
    idUsers: number;

    @Column({ length: 45 })
    username: string;

    @Column({ length: 255 })
    password: string;

    @Column({ length: 255 })
    email: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    phone: string | null;

    @Column({ type: 'varchar',length: 255, nullable: true })
    address: string | null;

    @Column({ type: 'enum', enum: ['farmer', 'buyer'], default: 'buyer' })
    role: string;
}