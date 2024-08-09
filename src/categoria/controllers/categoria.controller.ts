import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Delete, UseGuards } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.services";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@Controller('/categorias')
export class CategoriaController {

    constructor(private readonly categoriaService:CategoriaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Categoria[]>{
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id:number):Promise<Categoria>{
        return this.categoriaService.findById(id);
    }

    @Get('/tipo/:tipo')
    @HttpCode(HttpStatus.OK)
    findByTipo(@Param('tipo') tipo:string):Promise<Categoria[]>{
        return this.categoriaService.findByTipo(tipo);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria:Categoria):Promise<Categoria>{
        return this.categoriaService.create(categoria);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria:Categoria):Promise<Categoria>{
        return this.categoriaService.update(categoria);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id',ParseIntPipe) id:number){
        return this.categoriaService.delete(id);
    }
}