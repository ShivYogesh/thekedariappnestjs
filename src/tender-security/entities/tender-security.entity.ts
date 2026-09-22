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
export class TenderSecurity {
    @PrimaryGeneratedColumn()
    id!: number;
     @Column()   
    tenderId!: number;  //master
    @Column()
    secType!:string;//this field hold Sec/PG
     @Column()   
    fdrId!: number;  //master
    @Column({ type: 'date' })
    txnDate!:string;
    @Column()
    remark?:string;
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
    /*
    @ManyToOne(() => CompanyMaster, { onDelete: "RESTRICT" })
    @JoinColumn({ name: "companyId" }) // Defaults to target "id" column in CompanyMaster
    company!: CompanyMaster;
    @ManyToOne(() => TenderGroupMaster, { onDelete: "RESTRICT", nullable: true })
    @JoinColumn({ name: "tenderGroupId" }) // Defaults to target "id" column in CompanyMaster
    tenderGroup!: TenderGroupMaster | null; // <-- type to allow null
    @ManyToOne(() => FundMaster, { onDelete: "RESTRICT" })
    @JoinColumn({ name: "fundId" }) // Defaults to target "id" column in CompanyMaster
    fund!: FundMaster;

    @ManyToOne(() => DepartmentMaster, { onDelete: "RESTRICT" })
    @JoinColumn({ name: "departmentId" }) // Defaults to target "id" column in CompanyMaster
    department!: DepartmentMaster;
    */

}
