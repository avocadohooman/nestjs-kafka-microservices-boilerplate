export class CreateOrderEvent {
	constructor(
		public readonly orderId: string,
		public readonly userid: string,
		public readonly price: number,
	){}

	toString() {
		return JSON.stringify({
			orderId: this.orderId,
			userId: this.userid,
			price: this.price,
		})
	}
}