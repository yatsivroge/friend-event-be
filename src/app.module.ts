import { Module } from '@nestjs/common';
import { WishesModule } from './wishes/wishes.module';
@Module({
  imports: [WishesModule],
})
export class AppModule {}
