import { TenderMaster } from "src/tender-master/entities/tender-master.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class FundMaster {
    @PrimaryGeneratedColumn()
    id!:number;
    @Column({unique:true})
    name!:string;
    // 🚨 OPTIONAL FIELD DEFINITION:
        @Column({ type: 'varchar', nullable: true }) // 1. Tells the DB (Supabase) to allow NULL
        createdBy?: string | null;                  // 2. Tells TypeScript this field can be undefined or null
        // 🚨 OPTIONAL FIELD DEFINITION:
        @Column({ type: 'varchar', nullable: true }) // 1. Tells the DB (Supabase) to allow NULL
        updatedBy?: string | null;                  // 2. Tells TypeScript this field can be undefined or null
        @CreateDateColumn()// Automatically sets when a row is inserted
        createdAt!: Date;
        @UpdateDateColumn()// Automatically updates every time a row is saved or updated
        updatedAt!: Date;
        @DeleteDateColumn() // Automatically populates when soft-deleted
        deletedAt!: Date;
    
        //  This the relation between FDR And Ban
        //
        //******************************************* */
        //************************************************ */
        //***************************************************** */
        // One fund can have many tenders
        @OneToMany(() => TenderMaster, (tendermaster) => tendermaster.fund)
        tenders!: TenderMaster[];
}
