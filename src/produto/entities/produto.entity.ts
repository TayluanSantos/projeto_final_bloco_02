import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name:'tb_produtos'})
export class Produto {

    @PrimaryGeneratedColumn()
    @ApiProperty() 
    id:number;

    @IsNotEmpty() 
    @Column({length:255,nullable:false})
    @ApiProperty()
    nome:string;

    @Column({length:5000})
    @ApiProperty() 
    descricao:string;

    @IsNumber({maxDecimalPlaces:2})
    @Column({ type: "decimal", precision: 10, scale: 2 , nullable: false})
    @ApiProperty()
    preco:number;

    @Column({nullable:false})
    @ApiProperty()
    quantidade:number;

    @Column({length:5000})
    @ApiProperty()
    foto:string;

    @ApiProperty({ type: () => Categoria })
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria; 
}