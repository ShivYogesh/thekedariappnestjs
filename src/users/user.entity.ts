import { Entity,
     PrimaryGeneratedColumn,
      Column, CreateDateColumn,
       UpdateDateColumn, 
       Unique,
        DeleteDateColumn } from "typeorm";
@Entity()
export class user_master {
    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column({ unique: true }) // 👈 Makes username unique
    userName: string = '';
    @Column({ unique: true }) // 👈 Makes username unique
    email: string = '';
    @Column({ unique: true }) // 👈 Makes username unique
    mobileNo: string = '';
    @Column()
    password: string = '';
    @Column()
    role: string = 'user';
    @Column()
    profileImgPath: string = '';
    @Column()
    isemailAuthenticated: boolean = false;
    @Column()
    isMobileAuthenticated: boolean = false;
    @Column()
    isActive: boolean = false;
    @Column()
    createdBy!: string;
    @Column()
    updatedBy!: string;
    // Automatically sets when a row is inserted
    @CreateDateColumn()
    createdAt!: Date;
    // Automatically updates every time a row is saved or updated
    @UpdateDateColumn()
    updatedAt!: Date;
    @DeleteDateColumn() // Automatically populates when soft-deleted
    deletedAt!: Date;
   
}