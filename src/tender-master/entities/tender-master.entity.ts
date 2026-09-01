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
    fileNameInHidi!: string;
    @Column()
    fileNameInEnglesh!: string;
    @Column({ type: 'decimal', precision: 9, scale: 2 })
    fileAmountWithoutGst!: number;
    @Column({ type: 'decimal', precision: 9, scale: 2 })
    fileGstAmount!:number ;
     @Column({ type: 'decimal', precision: 9, scale: 2 })
    fileTotalAmount!:number ;
    @Column()
    companyId!:number;  //master
    @Column()
    tenderGroup!:string;    // master
    @Column()
    fund!:string;    // master
    @Column()
    department!:string;    // master
   
   
    // =======================================================
    // 1. BANK RELATIONSHIP (String Primary Key Match)
    // =======================================================
    /*
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
*/
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
}
