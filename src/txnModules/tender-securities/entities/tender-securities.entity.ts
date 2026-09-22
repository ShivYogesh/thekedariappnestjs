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
export class TenderSecurities {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ type: 'date' })
    txnDate!: Date;
    @Column()
    tenderId!: number;
    @Column()
    fdrId!:number ;
    @Column()
    head!:string;
    // 1. Basic Date Validation
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    fdrAmount!: number;
    @Column()
    remark!: string;
    
    @Column()
    createdBy!: string;
    @Column()
    updatedBy!: string;
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