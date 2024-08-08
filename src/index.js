import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = []
const myWishList = []


const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 =  await createItem("Hotwheels Lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
// await cartService.deleteItem(myCart, item1.name)
// await cartService.deleteItem(myCart, item2.name)

await cartService.displayCart(myCart)


await cartService.calculateTotal(myCart)