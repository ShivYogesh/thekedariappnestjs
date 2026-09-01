
import { FdrMaster } from "src/fdr-master/entities/fdr-master.entity";
import { Entity,
     Column, 
     CreateDateColumn,
      UpdateDateColumn,
      DeleteDateColumn,
       PrimaryColumn, 
       OneToMany} from "typeorm";
@Entity()
export class FdrStatusMaster {
    @PrimaryColumn()
    fdrStatusName!: string ;
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
        // One user can have many photos
        @OneToMany(() => FdrMaster, (fdrmaster) => fdrmaster.status)
        fdrs!: FdrMaster[];

}

