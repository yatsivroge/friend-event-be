import { Injectable } from '@nestjs/common';
import { Wish } from './wish.model';
import { WishDto } from './dto/wish.dto';

@Injectable()
export class WishesService {
  private wishes: Wish[] = [];

  getAllWishes(): Wish[] {
    return this.wishes;
  }

  addWish(newWish: WishDto): Wish {
    const { title, description } = newWish;

    const wish: Wish = {
      id: '1',
      title,
      description,
      isReserved: false,
    };

    this.wishes.push(wish);
    return wish;
  }
}
