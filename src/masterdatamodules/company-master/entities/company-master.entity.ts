import { FdrMaster } from "src/fdr-master/entities/fdr-master.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, DeleteDateColumn, PrimaryColumn, OneToMany } from "typeorm";
@Entity()
export class CompanyMaster {
    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column({ unique: true }) // 👈 Makes company name unique
    name!: string ;
    @Column({ type: 'varchar', nullable: true })
    address!:string;
    @Column({unique:true, type: 'varchar', nullable: true }) // 👈 Makes company GST No  unique
    gstNo!:string;
    @Column({ type: 'varchar', nullable: true })//alow null
    createdBy!: string;
    @Column({ type: 'varchar', nullable: true })//alow null
    updatedBy!: string;
    // Automatically sets when a row is inserted
    @CreateDateColumn()
    createdAt!: Date;
    // Automatically updates every time a row is saved or updated
    @UpdateDateColumn()
    updatedAt!: Date;
    @DeleteDateColumn() // Automatically populates when soft-deleted
    deletedAt!: Date;
     //  This the relation between FDR And Ban
        //
        //******************************************* */
        //************************************************ */
        //***************************************************** */
        // One user can have many photos
        @OneToMany(() => FdrMaster, (fdrmaster) => fdrmaster.company)
        fdrs!: FdrMaster[];

}




