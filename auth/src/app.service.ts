import { Injectable } from '@nestjs/common';
import { GetUserEvent } from './get-user.dto';

@Injectable()
export class AppService {

	private readonly users: any[] = [
		{
			userId: '42',
			stripeUserId: '43234',
		},
		{
			userId: '21',
		 	stripeUserId: '27279',
		},
	];
	getHello(): string {
		return 'Hello World!';
	}

	getUser(getUserEvent: GetUserEvent) {
		return this.users.find((user) => user.userId === getUserEvent.userId);
	}
}
