import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: Number

  @Column({ name: "name", type: "varchar" })
  name: String

  @Column({ name: "resume", type: "varchar" })
  resume: String

  @Column({ name: "price", type: "decimal" })
  price: Number

  @Column({ name: "author", type: "varchar" })
  author: String

  @Column({ name: "release_date", type: "varchar" })
  release_date: String
}
