export class Order {
  datePlaced: number;

  constructor(
    public userId: string,
    public shipping: any,
    public items: any[]
  ) {
    this.datePlaced = new Date().getTime();

    this.items = items.map(item => {
      return {
        product: {
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price
        },
        quantity: item.quantity,
        totalPrice: item.totalPrice
      }
    });
  }
}