import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { getMongoDbConfig } from './config/mongo.config'
import { ActorModule } from './developer/actor.module'
import { FileModule } from './file/file.module'
import { GenreModule } from './genre/genre.module'
import { MovieModule } from './movie/movie.module'
import { ProjectModule } from './project/project.module'
import { RatingModule } from './rating/rating.module'
import { RoadmapModule } from './roadmap/roadmap.module'
import { TaskModule } from './task/task.module'
import { TelegramModule } from './telegram/telegram.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoDbConfig,
		}),
		AuthModule,
		UserModule,
		GenreModule,
		FileModule,
		ActorModule,
		MovieModule,
		RatingModule,
		TelegramModule,
		ProjectModule,
		RoadmapModule,
		TaskModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
