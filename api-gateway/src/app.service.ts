import {	Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderDTS } from './create-order.dto';
import { CreateOrderEvent } from './create-order.event';

@Injectable()
export class AppService {
	constructor(@Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka){}
	getHello(): string {
		return 'Hello World!';
	}

	createOrder(createOrder: CreateOrderDTS) {
		this.billingClient.emit('order_created', new CreateOrderEvent('123', createOrder.userId, createOrder.price));
	}
}
