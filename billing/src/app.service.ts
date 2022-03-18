import { Injectable } from '@nestjs/common';
import { CreateOrderEvent } from './create-order.event';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!';
	}

	handleOrderCreated(orderCreatedEvent: CreateOrderEvent) {
		console.log('received new ORDER EVENT:', orderCreatedEvent);
	}
}
