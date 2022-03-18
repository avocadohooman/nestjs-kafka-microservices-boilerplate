import { ForbiddenException, Inject, Injectable, } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderEvent } from './create-order.event';
import { GetUserEvent } from './get-user.event';

@Injectable()
export class AppService {
	constructor(@Inject('AUTH_SERVICE') private readonly authClient: ClientKafka){}

	getHello(): string {
		return 'Hello World!';
	}

	handleOrderCreated(orderCreatedEvent: CreateOrderEvent) {
		console.log('received new ORDER EVENT:', orderCreatedEvent);
		try {
			this.authClient
				.send('get_user', new GetUserEvent(orderCreatedEvent.userId))
				.subscribe((user) => {
					console.log(`Billing user with strip ID ${user.stripeUserId} at price of ${orderCreatedEvent.price}...`);
				})
		} catch (error) {
			console.log('error', error);
			throw new ForbiddenException('user not found');
		}

	}
}
