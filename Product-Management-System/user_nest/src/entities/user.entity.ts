import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    name: string;
    
   
   
    @Column({ nullable:false})
    email: string;

    @Column({nullable:false})
    username: string;

    @Column({nullable:false})
    password: string;
    type: any;



    
    @BeforeInsert()
    async HashPassword() {
      this.password = await bcrypt.hash(this.password, 12);
    }
}