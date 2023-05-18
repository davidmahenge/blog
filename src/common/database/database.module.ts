import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/blog',
      }),
    }),
  ],
  //MongooseModule.forRoot('mongodb://localhost:27017/blog')],
})
export class DatabaseModule {}
