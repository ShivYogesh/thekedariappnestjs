import { CompanyMaster } from "src/masterdatamodules/company-master/entities/company-master.entity";
import { DepartmentMaster } from "src/masterdatamodules/department-master/entities/department-master.entity";
import { FundMaster } from "src/masterdatamodules/fund-master/entities/fund-master.entity";
import { TenderGroupMaster } from "src/masterdatamodules/tender-group-master/entities/tender-group-master.entity";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";

@Entity()
export class TenderMaster {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ unique: true })
    fileNo!:string ;
    @Column()
    nameInHindi!: string;
    @Column()
    nameInEnglish!: string;
    @Column({ type: 'decimal', precision: 14, scale: 2 })
    amountWithoutGst!: number;
    @Column({ type: 'decimal', precision: 14, scale: 2 })
    gstAmount!:number ;
     @Column({ type: 'decimal', precision: 14, scale: 2 })
    totalAmount!:number ;
    @Column()
    companyId!:number;  //master
    @Column({ nullable: true }) // <-- Added nullable: true
    tenderGroupId!:number | null; // <-- Changed type to allow null
    @Column()
    fundId!:number;    // master
    @Column()
    departmentId!:number;    // master
   
   
    // =======================================================
    // TIMESTAMPS and comman fileds
    // =======================================================
    @Column({ nullable: true })
    createdBy!: string;
    @Column({ nullable: true })
    updatedBy!: string;
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
    @DeleteDateColumn()
    deletedAt!: Date;

    /* **************************************************** */
    /* *******  All Relation  **************************** */
    /* *************************************************** */
    
    @ManyToOne(() => CompanyMaster, { onDelete: "RESTRICT" })
    @JoinColumn({ name: "companyId" }) // Defaults to target "id" column in CompanyMaster
    company!: CompanyMaster;

     @ManyToOne(() => TenderGroupMaster, { onDelete: "RESTRICT", nullable: true })
    @JoinColumn({ name: "tenderGroupId" }) // Defaults to target "id" column in CompanyMaster
    tenderGroup!:  TenderGroupMaster | null; // <-- type to allow null

         @ManyToOne(() => FundMaster, { onDelete: "RESTRICT" })
    @JoinColumn({ name: "fundId" }) // Defaults to target "id" column in CompanyMaster
    fund!: FundMaster;

     @ManyToOne(() => DepartmentMaster, { onDelete: "RESTRICT" })
    @JoinColumn({ name: "departmentId" }) // Defaults to target "id" column in CompanyMaster
    department!: DepartmentMaster;    

}
