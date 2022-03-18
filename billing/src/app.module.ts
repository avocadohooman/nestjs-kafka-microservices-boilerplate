import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'AUTH_SERVICE',
				transport: 6,
				options: {
					client: {
						cliendId: 'auth',
						brokers: ['localhost:9092']
					},
					consumer: {
						groupId: 'auth-consumer',
					}
				}
			}
		])
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
