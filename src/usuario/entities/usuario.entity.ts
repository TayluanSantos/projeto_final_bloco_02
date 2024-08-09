
import { Transform, TransformFnParams } from "class-transformer"
import { IsNotEmpty, IsEmail, MinLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()  
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})  
    nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    usuario: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false })  
    senha: string

    @Column({length: 5000 })  
    foto: string

}
