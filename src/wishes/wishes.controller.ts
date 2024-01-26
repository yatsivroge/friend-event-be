import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WishesService } from './wishes.service';
import { Wish } from './wish.model';
import { WishDto } from './dto/wish.dto';

@Controller('wishes')
export class WishesController {
  constructor(private wishesService: WishesService) {}

  @Get()
  getAllWishes(): Wish[] {
    return this.wishesService.getAllWishes();
  }

  @Get('/:id')
  getWishById(@Param('id') id: string): void {
    console.log(id);
    // return this.wishesService.getAllWishes();
  }

  @Delete('/:id')
  deleteWishById(@Param('id') id: string): void {
    console.log(id);
    // return this.wishesService.getAllWishes();
  }

  @Post()
  addWish(@Body() params: WishDto): Wish {
    return this.wishesService.addWish(params);
  }
}
