import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderDTS } from './create-order.dto';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

  @Get()
	getHello(): string {
		return this.appService.getHello();
	}

  @Post()
  createOrder(@Body() createOrder: CreateOrderDTS) {
	  console.log('createOrder', createOrder);
	  this.appService.createOrder(createOrder); 
  }
}
