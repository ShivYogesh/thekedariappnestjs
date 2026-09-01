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

import { BankMaster } from "../../masterdatamodules/bank-master/entities/bank-master.entity";
import { FdrStatusMaster } from "../../masterdatamodules/fdr-status-master/entities/fdr-status-master.entity";
import { CompanyMaster } from "../../masterdatamodules/company-master/entities/company-master.entity"; // Import your company master
import { PledgeNameMaster } from "src/masterdatamodules/pledge-name-master/entities/pledge-name-master.entity";

@Entity()
export class FdrMaster {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ unique: true })
    fdrNo!:string ;
    @Column()
    imgUrl!: string;
    // 1. Basic Date Validation
    @Column({ type: 'date' })
    depositDate!: Date;
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    depositAmount!: number;
    @Column({ type: 'decimal', precision: 5, scale: 2 })
    roi!:number ;
    @Column()
    termInDays!: number;
    @Column()
    pledgeStatus: boolean = false;
    @Column()
    createdBy!: string;
    @Column()
    updatedBy!: string;
    // =======================================================
    // 1. BANK RELATIONSHIP (String Primary Key Match)
    // =======================================================
    @Column()
    bankName!: string;
    @ManyToOne(() => BankMaster, { onDelete: "RESTRICT", onUpdate: "CASCADE" })
    @JoinColumn({ name: "bankName", referencedColumnName: "bankName" })
    bank!: BankMaster;
    // =======================================================
    // 1. FDR STATUS RELATIONSHIP (String Primary Key Match)
    // =======================================================
    @Column()
    fdrStatus!: string;
    @ManyToOne(() => FdrStatusMaster, { onDelete: "RESTRICT", onUpdate: "CASCADE" })
    @JoinColumn({ name: "fdrStatus", referencedColumnName: "fdrStatusName" })
    status!: FdrStatusMaster;
    // =======================================================
    // 1. BANK RELATIONSHIP (String Primary Key Match)
    // =======================================================
    @Column()
    pledgeName!: string;

    @ManyToOne(() => PledgeNameMaster, { onDelete: "RESTRICT", onUpdate: "CASCADE" })
    @JoinColumn({ name: "pledgeName", referencedColumnName: "pledgeName" })
    pledgeTo!: PledgeNameMaster;

    // =======================================================
    // 2. COMPANY RELATIONSHIP (Auto-generated Numeric ID Match)
    // =======================================================
    @Column()
    companyId!: number; // Stores the numeric ID pointing to CompanyMaster

    @ManyToOne(() => CompanyMaster, { onDelete: "RESTRICT" })
    @JoinColumn({ name: "companyId" }) // Defaults to target "id" column in CompanyMaster
    company!: CompanyMaster;

    // =======================================================
    // TIMESTAMPS
    // =======================================================
    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;
}