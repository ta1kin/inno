import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { ActorController } from './developer.controller'
import { ActorModel } from './developer.model'
import { ActorService } from './developer.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ActorModel,
				schemaOptions: {
					collection: 'Actor',
				},
			},
		]),
	],
	providers: [ActorService],
	controllers: [ActorController],
})
export class ActorModule {}
