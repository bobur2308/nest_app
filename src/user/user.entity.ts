import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column({ type: 'text', array: true, default: '{}' })
  roles: string[];

  @Column({ default: false })
  isActive: boolean;

  @Column({ type: 'timestamp'})
  createdAt: Date;

}
